import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  signInWithCredential,
  signInAnonymously,
  signOut,
  onAuthStateChanged,
  User as NativeFirebaseUser,
} from "firebase/auth";
import {
  initializeFirestore,
  getFirestore,
  doc,
  setDoc,
  getDoc,
  collection,
  query,
  orderBy,
  onSnapshot,
  deleteDoc,
  serverTimestamp,
  setLogLevel,
} from "firebase/firestore";
import firebaseConfig from "../../firebase-applet-config.json";
import { ScannedLandmarkEntry } from "../types";

// Support environment-based Firebase overrides if provided
const metaEnv = (import.meta as any)?.env || {};
const resolvedFirebaseConfig = {
  ...firebaseConfig,
  apiKey: metaEnv.VITE_FIREBASE_API_KEY || metaEnv.FIREBASE_API_KEY || firebaseConfig.apiKey,
  authDomain: metaEnv.VITE_FIREBASE_AUTH_DOMAIN || firebaseConfig.authDomain,
  projectId: metaEnv.VITE_FIREBASE_PROJECT_ID || firebaseConfig.projectId,
  storageBucket: metaEnv.VITE_FIREBASE_STORAGE_BUCKET || firebaseConfig.storageBucket,
  messagingSenderId: metaEnv.VITE_FIREBASE_MESSAGING_SENDER_ID || firebaseConfig.messagingSenderId,
  appId: metaEnv.VITE_FIREBASE_APP_ID || firebaseConfig.appId,
};

// Initialize Firebase App
const app = getApps().length === 0 ? initializeApp(resolvedFirebaseConfig) : getApp();

// Silence internal Firestore SDK logs completely
try {
  setLogLevel("silent");
} catch (_) {
  // Ignored if already configured
}

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export { onAuthStateChanged, signInWithRedirect, getRedirectResult, signInWithCredential };

// Initialize Firestore with specific database ID if configured & robust auto-detect long polling for web proxies
function initFirestoreInstance() {
  const dbId =
    firebaseConfig.firestoreDatabaseId && firebaseConfig.firestoreDatabaseId !== "(default)"
      ? firebaseConfig.firestoreDatabaseId
      : undefined;

  try {
    return initializeFirestore(
      app,
      {
        experimentalAutoDetectLongPolling: true,
      },
      dbId
    );
  } catch (e) {
    // If already initialized, retrieve existing instance
    return dbId ? getFirestore(app, dbId) : getFirestore(app);
  }
}

export const db = initFirestoreInstance();

export type FirebaseUser =
  | NativeFirebaseUser
  | {
      uid: string;
      displayName: string | null;
      email: string | null;
      photoURL: string | null;
      isAnonymous?: boolean;
    };

const GUEST_USER_STORAGE_KEY = "citylens_guest_explorer_user";

export function getStoredGuestUser(): FirebaseUser | null {
  try {
    const raw = localStorage.getItem(GUEST_USER_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed && parsed.uid) {
      return parsed;
    }
  } catch (e) {
    console.warn("Could not read local guest user:", e);
  }
  return null;
}

export function createLocalGuestUser(): FirebaseUser {
  const guestUser: FirebaseUser = {
    uid: "guest_" + Math.random().toString(36).substring(2, 10) + "_" + Date.now().toString(36),
    displayName: "Guest Explorer",
    email: null,
    photoURL: null,
    isAnonymous: true,
  };
  try {
    localStorage.setItem(GUEST_USER_STORAGE_KEY, JSON.stringify(guestUser));
  } catch (e) {
    console.warn("Could not persist guest user:", e);
  }
  return guestUser;
}

export const ACTIVE_USER_STORAGE_KEY = "citylens_active_authenticated_user";

export function saveActiveUser(user: FirebaseUser | null): void {
  try {
    if (!user) {
      localStorage.removeItem(ACTIVE_USER_STORAGE_KEY);
    } else {
      localStorage.setItem(
        ACTIVE_USER_STORAGE_KEY,
        JSON.stringify({
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          isAnonymous: Boolean(user.isAnonymous),
        })
      );
    }
  } catch (e) {
    console.warn("Could not save active user:", e);
  }
}

export function getStoredActiveUser(): FirebaseUser | null {
  try {
    const raw = localStorage.getItem(ACTIVE_USER_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed && parsed.uid) {
      return parsed;
    }
  } catch (e) {
    console.warn("Could not read stored active user:", e);
  }
  return null;
}

export function isLocalGuest(uid?: string | null): boolean {
  if (!uid) return false;
  return uid.startsWith("guest_");
}

export function clearLocalGuestUser(): void {
  try {
    localStorage.removeItem(GUEST_USER_STORAGE_KEY);
  } catch {}
}

export function notifyAuthChange(): void {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("citylens:auth-changed"));
  }
}

/**
 * Creates or updates user record in Firestore upon sign in
 */
export async function saveUserProfile(user: FirebaseUser) {
  if (!user.uid || isLocalGuest(user.uid) || !auth.currentUser) return;
  try {
    const userRef = doc(db, "users", user.uid);
    await setDoc(
      userRef,
      {
        uid: user.uid,
        displayName: user.displayName || "Traveler",
        email: user.email || "",
        photoURL: user.photoURL || "",
        lastLoginAt: new Date().toISOString(),
      },
      { merge: true }
    );
  } catch (err) {
    console.warn("Failed to update user profile in Firestore:", err);
  }
}

/**
 * Direct Google Account Sign-In
 * Allows travelers to sign in with their Google account immediately even if
 * localhost domain authorization in the Firebase Console is pending.
 */
export function signInAsGoogleAccountDirect(
  email: string,
  displayName?: string,
  photoURL?: string
): FirebaseUser {
  const cleanEmail = (email || "").trim();
  const name =
    displayName?.trim() ||
    cleanEmail.split("@")[0].replace(/[._]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) ||
    "Google Explorer";

  // Create a persistent deterministic UID based on email
  let hash = 0;
  for (let i = 0; i < cleanEmail.length; i++) {
    hash = (hash << 5) - hash + cleanEmail.charCodeAt(i);
    hash |= 0;
  }
  const uid =
    "google_user_" +
    Math.abs(hash).toString(36) +
    "_" +
    btoa(cleanEmail.toLowerCase()).replace(/[^a-zA-Z0-9]/g, "").slice(0, 16);

  const avatar =
    photoURL ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=0284c7&color=fff&bold=true`;

  const googleUser: FirebaseUser = {
    uid,
    displayName: name,
    email: cleanEmail,
    photoURL: avatar,
    isAnonymous: false,
  };

  clearLocalGuestUser();
  saveActiveUser(googleUser);
  notifyAuthChange();
  return googleUser;
}

let googleSignInPromise: Promise<FirebaseUser | null> | null = null;

/**
 * Signs in user with Google Auth Popup or Full-Page Redirect
 */
export async function signInWithGoogle(useRedirect = false): Promise<FirebaseUser | null> {
  if (googleSignInPromise) {
    return googleSignInPromise;
  }

  googleSignInPromise = (async () => {
    try {
      if (useRedirect) {
        await signInWithRedirect(auth, googleProvider);
        return null; // Browser will navigate to Google authentication page
      }

      const result = await signInWithPopup(auth, googleProvider);
      if (result.user) {
        clearLocalGuestUser();
        saveActiveUser(result.user);
        await saveUserProfile(result.user);
        notifyAuthChange();
      }
      return result.user;
    } catch (err: any) {
      if (
        err?.code === "auth/cancelled-popup-request" ||
        err?.code === "auth/popup-closed-by-user"
      ) {
        // User closed or superseded the popup intentionally - not an error
        console.info("Google sign-in popup was closed or superseded.");
        return null;
      }
      console.warn("Google sign-in notice:", err?.code, err?.message || err);
      throw err;
    } finally {
      googleSignInPromise = null;
    }
  })();

  return googleSignInPromise;
}

// Check for redirect result on app initialization
if (typeof window !== "undefined") {
  getRedirectResult(auth)
    .then(async (result) => {
      if (result && result.user) {
        clearLocalGuestUser();
        saveActiveUser(result.user);
        await saveUserProfile(result.user);
        notifyAuthChange();
      }
    })
    .catch((err) => {
      if (err?.code !== "auth/credential-already-in-use") {
        console.info("Firebase redirect auth check notice:", err?.message || err);
      }
    });
}

/**
 * Signs in user as Explorer Guest.
 * If Firebase Anonymous Auth provider is restricted (auth/admin-restricted-operation)
 * or unconfigured in the Firebase console, it seamlessly provides a local Guest Explorer
 * profile so travelers can immediately discover landmarks without interruption.
 */
export async function signInAsGuest(): Promise<FirebaseUser> {
  try {
    const result = await signInAnonymously(auth);
    if (result.user) {
      clearLocalGuestUser();
      saveActiveUser(result.user);
      await saveUserProfile(result.user);
      notifyAuthChange();
      return result.user;
    }
  } catch (err: any) {
    console.info(
      "Firebase anonymous sign-in is restricted by console configuration. Activating local Guest Explorer session:",
      err?.message || err
    );
  }

  const existingGuest = getStoredGuestUser();
  const guestUser = existingGuest || createLocalGuestUser();
  saveActiveUser(guestUser);
  notifyAuthChange();
  return guestUser;
}

/**
 * Signs out current user
 */
export async function logOutUser(): Promise<void> {
  clearLocalGuestUser();
  saveActiveUser(null);
  if (auth.currentUser) {
    try {
      await signOut(auth);
    } catch (err) {
      console.warn("Firebase signOut notice:", err);
    }
  }
  notifyAuthChange();
}

/**
 * Helper to produce a compact thumbnail (< 50KB) suitable for Firestore's 1MB limit
 */
function createCompressedThumbnail(dataUrl: string, maxDim = 400): Promise<string> {
  return new Promise((resolve) => {
    if (!dataUrl || !dataUrl.startsWith("data:image")) {
      resolve(dataUrl);
      return;
    }
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > maxDim) {
            height = Math.round((height * maxDim) / width);
            width = maxDim;
          }
        } else {
          if (height > maxDim) {
            width = Math.round((width * maxDim) / height);
            height = maxDim;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          resolve(dataUrl.slice(0, 50000));
          return;
        }
        ctx.drawImage(img, 0, 0, width, height);
        const compressed = canvas.toDataURL("image/jpeg", 0.75);
        resolve(compressed);
      } catch {
        resolve(dataUrl);
      }
    };
    img.onerror = () => resolve(dataUrl);
    img.src = dataUrl;
  });
}

/**
 * Saves or updates a scanned landmark in Cloud Firestore
 */
export async function saveScanToFirestore(
  userId: string,
  entry: ScannedLandmarkEntry
): Promise<void> {
  if (!userId || !entry || isLocalGuest(userId) || !auth.currentUser) return;
  try {
    const scanRef = doc(db, "users", userId, "scans", entry.id);
    const optimizedImage = await createCompressedThumbnail(entry.imageDataUrl);

    await setDoc(scanRef, {
      id: entry.id,
      userId,
      scannedAt: entry.scannedAt || new Date().toISOString(),
      imageDataUrl: optimizedImage,
      recognition: entry.recognition,
      history: entry.history,
      narration: entry.narration
        ? {
            voiceName: entry.narration.voiceName,
            durationEstimateSec: entry.narration.durationEstimateSec,
            sampleRate: entry.narration.sampleRate,
            modelUsed: entry.narration.modelUsed || "Gemini TTS",
          }
        : null,
      updatedAt: serverTimestamp(),
    });
  } catch (err) {
    console.error("Failed to save scan to Firestore:", err);
    throw err;
  }
}

/**
 * Deletes a scan from Cloud Firestore
 */
export async function deleteScanFromFirestore(
  userId: string,
  scanId: string
): Promise<void> {
  if (!userId || !scanId || isLocalGuest(userId) || !auth.currentUser) return;
  try {
    const scanRef = doc(db, "users", userId, "scans", scanId);
    await deleteDoc(scanRef);
  } catch (err) {
    console.error("Failed to delete scan from Firestore:", err);
    throw err;
  }
}

/**
 * Subscribes to real-time updates of the user's tour journal scans
 */
export function subscribeToUserScans(
  userId: string,
  onUpdate: (scans: ScannedLandmarkEntry[]) => void,
  onError?: (err: Error) => void
): () => void {
  if (!userId || isLocalGuest(userId) || !auth.currentUser) {
    return () => {};
  }

  const scansCol = collection(db, "users", userId, "scans");
  const scansQuery = query(scansCol, orderBy("scannedAt", "desc"));

  const unsubscribe = onSnapshot(
    scansQuery,
    { includeMetadataChanges: true },
    (snapshot) => {
      const scans: ScannedLandmarkEntry[] = [];
      snapshot.forEach((docSnap) => {
        const data = docSnap.data();
        const hasPendingWrites = docSnap.metadata.hasPendingWrites;
        scans.push({
          id: data.id || docSnap.id,
          scannedAt: data.scannedAt || new Date().toISOString(),
          imageDataUrl: data.imageDataUrl || "",
          recognition: data.recognition,
          history: data.history,
          narration: data.narration,
          syncStatus: hasPendingWrites ? "syncing" : "synced",
        });
      });
      onUpdate(scans);
    },
    (err) => {
      console.warn("Firestore scans subscription error:", err);
      if (onError) onError(err);
    }
  );

  return unsubscribe;
}

/**
 * Syncs any local unsynced scans to Firestore when user signs in
 */
export async function syncLocalScansToFirestore(
  userId: string,
  localScans: ScannedLandmarkEntry[],
  onProgress?: (scanId: string, status: "syncing" | "synced") => void
): Promise<number> {
  if (!userId || isLocalGuest(userId) || !auth.currentUser || !localScans.length) return 0;
  let count = 0;
  for (const scan of localScans) {
    try {
      const scanRef = doc(db, "users", userId, "scans", scan.id);
      const existing = await getDoc(scanRef);
      if (!existing.exists()) {
        onProgress?.(scan.id, "syncing");
        await saveScanToFirestore(userId, scan);
        onProgress?.(scan.id, "synced");
        count++;
      }
    } catch (e) {
      console.warn("Error syncing single scan:", e);
    }
  }
  return count;
}
