import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
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

// Initialize Firebase App
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Silence internal Firestore SDK logs completely
try {
  setLogLevel("silent");
} catch (_) {
  // Ignored if already configured
}

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export { onAuthStateChanged };

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

let googleSignInPromise: Promise<FirebaseUser | null> | null = null;

/**
 * Signs in user with Google Auth Popup
 */
export async function signInWithGoogle(): Promise<FirebaseUser | null> {
  if (googleSignInPromise) {
    return googleSignInPromise;
  }

  googleSignInPromise = (async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      if (result.user) {
        clearLocalGuestUser();
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
      console.warn("Google sign-in notice:", err?.message || err);
      throw err;
    } finally {
      googleSignInPromise = null;
    }
  })();

  return googleSignInPromise;
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
      await saveUserProfile(result.user);
      notifyAuthChange();
      return result.user;
    }
  } catch (err: any) {
    // When Firebase project has not enabled Anonymous sign-in in Firebase console,
    // auth/admin-restricted-operation is returned.
    console.info(
      "Firebase anonymous sign-in is restricted by console configuration. Activating local Guest Explorer session:",
      err?.message || err
    );
  }

  const existingGuest = getStoredGuestUser();
  const guestUser = existingGuest || createLocalGuestUser();
  notifyAuthChange();
  return guestUser;
}

/**
 * Signs out current user
 */
export async function logOutUser(): Promise<void> {
  clearLocalGuestUser();
  if (auth.currentUser) {
    await signOut(auth);
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
