import { ScannedLandmarkEntry, NarrationAudio } from "../types";

const DB_NAME = "citylens_ar_offline_db";
const DB_VERSION = 1;
const STORE_JOURNAL = "journal_entries";
const STORE_NARRATION = "narration_assets";
const MEDIA_CACHE_NAME = "citylens-media-v1";

let dbInstance: IDBDatabase | null = null;

/**
 * Initializes and upgrades the IndexedDB database for offline journals & narration
 */
export function initOfflineDB(): Promise<IDBDatabase> {
  if (dbInstance) return Promise.resolve(dbInstance);

  return new Promise((resolve, reject) => {
    if (typeof window === "undefined" || !window.indexedDB) {
      return reject(new Error("IndexedDB is not supported in this environment"));
    }

    const request = window.indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;

      // Object store for full journal entries (including history, coordinates, and photo)
      if (!db.objectStoreNames.contains(STORE_JOURNAL)) {
        const journalStore = db.createObjectStore(STORE_JOURNAL, { keyPath: "id" });
        journalStore.createIndex("scannedAt", "scannedAt", { unique: false });
        journalStore.createIndex("landmarkName", "recognition.name", { unique: false });
      }

      // Object store for high-fidelity audio narration assets
      if (!db.objectStoreNames.contains(STORE_NARRATION)) {
        const narrationStore = db.createObjectStore(STORE_NARRATION, { keyPath: "id" });
        narrationStore.createIndex("landmarkName", "landmarkName", { unique: false });
      }
    };

    request.onsuccess = (event) => {
      dbInstance = (event.target as IDBOpenDBRequest).result;
      resolve(dbInstance);
    };

    request.onerror = (event) => {
      console.warn("Failed to open IndexedDB for offline journals:", (event.target as IDBOpenDBRequest).error);
      reject((event.target as IDBOpenDBRequest).error);
    };
  });
}

/**
 * Persists a complete landmark scan into IndexedDB and the Service Worker Cache API
 */
export async function saveOfflineJournalEntry(entry: ScannedLandmarkEntry): Promise<void> {
  try {
    const db = await initOfflineDB();

    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction([STORE_JOURNAL, STORE_NARRATION], "readwrite");
      const journalStore = tx.objectStore(STORE_JOURNAL);
      const narrationStore = tx.objectStore(STORE_NARRATION);

      // Save journal entry
      journalStore.put(entry);

      // Save audio narration asset if present
      if (entry.narration?.audioBase64) {
        narrationStore.put({
          id: entry.id,
          landmarkName: entry.recognition.name,
          voiceName: entry.narration.voiceName,
          audioBase64: entry.narration.audioBase64,
          sampleRate: entry.narration.sampleRate,
          durationEstimateSec: entry.narration.durationEstimateSec,
          cachedAt: new Date().toISOString(),
        });
      }

      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });

    // Also persist narration to Service Worker Cache API for offline audio playback
    if (entry.narration?.audioBase64 && "caches" in window) {
      try {
        const mediaCache = await caches.open(MEDIA_CACHE_NAME);
        const cacheUrl = `/api/audio-cache/${encodeURIComponent(entry.id)}`;
        const audioResponse = new Response(entry.narration.audioBase64, {
          headers: {
            "Content-Type": "text/plain",
            "X-Cached-At": new Date().toISOString(),
          },
        });
        await mediaCache.put(cacheUrl, audioResponse);
      } catch (cacheErr) {
        console.warn("Cache API audio persistence notice:", cacheErr);
      }
    }
  } catch (err) {
    console.warn("IndexedDB journal save notice (falling back to memory):", err);
  }
}

/**
 * Retrieves all offline journal entries ordered by scan date descending
 */
export async function getAllOfflineJournalEntries(): Promise<ScannedLandmarkEntry[]> {
  try {
    const db = await initOfflineDB();

    return await new Promise<ScannedLandmarkEntry[]>((resolve, reject) => {
      const tx = db.transaction(STORE_JOURNAL, "readonly");
      const store = tx.objectStore(STORE_JOURNAL);
      const request = store.getAll();

      request.onsuccess = () => {
        const entries = (request.result || []) as ScannedLandmarkEntry[];
        // Sort newest first
        entries.sort((a, b) => new Date(b.scannedAt).getTime() - new Date(a.scannedAt).getTime());
        resolve(entries);
      };

      request.onerror = () => reject(request.error);
    });
  } catch (err) {
    console.warn("IndexedDB journal read notice:", err);
    return [];
  }
}

/**
 * Retrieves a single offline entry by ID, rehydrating audio if available
 */
export async function getOfflineJournalEntry(id: string): Promise<ScannedLandmarkEntry | null> {
  try {
    const db = await initOfflineDB();

    return await new Promise<ScannedLandmarkEntry | null>((resolve, reject) => {
      const tx = db.transaction([STORE_JOURNAL, STORE_NARRATION], "readonly");
      const journalStore = tx.objectStore(STORE_JOURNAL);
      const narrationStore = tx.objectStore(STORE_NARRATION);

      const journalReq = journalStore.get(id);

      journalReq.onsuccess = () => {
        const entry = journalReq.result as ScannedLandmarkEntry | undefined;
        if (!entry) {
          return resolve(null);
        }

        // If narration has no base64, check narration store
        if (!entry.narration?.audioBase64) {
          const narrReq = narrationStore.get(id);
          narrReq.onsuccess = () => {
            if (narrReq.result?.audioBase64) {
              entry.narration = {
                audioBase64: narrReq.result.audioBase64,
                voiceName: narrReq.result.voiceName || entry.narration?.voiceName || "Kore",
                sampleRate: narrReq.result.sampleRate || 24000,
                durationEstimateSec: narrReq.result.durationEstimateSec || 30,
                modelUsed: "Offline Cached Audio Asset",
              };
            }
            resolve(entry);
          };
          narrReq.onerror = () => resolve(entry);
        } else {
          resolve(entry);
        }
      };

      journalReq.onerror = () => reject(journalReq.error);
    });
  } catch (err) {
    console.warn("Failed to retrieve offline entry:", err);
    return null;
  }
}

/**
 * Deletes a journal entry and its cached narration asset from IndexedDB
 */
export async function deleteOfflineJournalEntry(id: string): Promise<void> {
  try {
    const db = await initOfflineDB();

    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction([STORE_JOURNAL, STORE_NARRATION], "readwrite");
      tx.objectStore(STORE_JOURNAL).delete(id);
      tx.objectStore(STORE_NARRATION).delete(id);

      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });

    if ("caches" in window) {
      try {
        const mediaCache = await caches.open(MEDIA_CACHE_NAME);
        await mediaCache.delete(`/api/audio-cache/${encodeURIComponent(id)}`);
      } catch {}
    }
  } catch (err) {
    console.warn("Failed to delete offline entry from IndexedDB:", err);
  }
}

/**
 * Clears all offline journal records and cached narration assets
 */
export async function clearAllOfflineJournalEntries(): Promise<void> {
  try {
    const db = await initOfflineDB();

    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction([STORE_JOURNAL, STORE_NARRATION], "readwrite");
      tx.objectStore(STORE_JOURNAL).clear();
      tx.objectStore(STORE_NARRATION).clear();

      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });

    if ("caches" in window) {
      try {
        await caches.delete(MEDIA_CACHE_NAME);
      } catch {}
    }
  } catch (err) {
    console.warn("Failed to clear offline entries:", err);
  }
}

/**
 * Stores standalone narration audio for a landmark
 */
export async function storeOfflineNarrationAsset(
  entryId: string,
  landmarkName: string,
  narration: NarrationAudio
): Promise<void> {
  if (!narration.audioBase64) return;

  try {
    const db = await initOfflineDB();

    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(STORE_NARRATION, "readwrite");
      tx.objectStore(STORE_NARRATION).put({
        id: entryId,
        landmarkName,
        voiceName: narration.voiceName,
        audioBase64: narration.audioBase64,
        sampleRate: narration.sampleRate,
        durationEstimateSec: narration.durationEstimateSec,
        cachedAt: new Date().toISOString(),
      });

      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  } catch (err) {
    console.warn("Failed to store narration asset offline:", err);
  }
}

/**
 * Gets cached narration audio for a landmark
 */
export async function getOfflineNarrationAsset(entryId: string): Promise<NarrationAudio | null> {
  try {
    const db = await initOfflineDB();

    return await new Promise<NarrationAudio | null>((resolve, reject) => {
      const tx = db.transaction(STORE_NARRATION, "readonly");
      const req = tx.objectStore(STORE_NARRATION).get(entryId);

      req.onsuccess = () => {
        if (req.result?.audioBase64) {
          resolve({
            audioBase64: req.result.audioBase64,
            voiceName: req.result.voiceName || "Kore",
            sampleRate: req.result.sampleRate || 24000,
            durationEstimateSec: req.result.durationEstimateSec || 30,
            modelUsed: "Offline Local Storage",
          });
        } else {
          resolve(null);
        }
      };

      req.onerror = () => reject(req.error);
    });
  } catch {
    return null;
  }
}
