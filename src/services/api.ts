import { LandmarkRecognition, LandmarkHistory, NarrationAudio, GoogleMapsGroundingInfo, LocationReferencePhoto } from "../types";

/**
 * Resilient helper to parse JSON response with automatic handling of
 * non-standard headers, proxy HTML pages (server warmup), and plain-text JSON.
 */
async function parseJsonResponse<T>(response: Response, serviceName: string): Promise<T> {
  const rawText = await response.text().catch(() => "");

  if (!response.ok) {
    if (rawText) {
      try {
        const errorData = JSON.parse(rawText);
        if (errorData.error) {
          throw new Error(errorData.error);
        }
      } catch (parseErr: any) {
        if (parseErr.message && !parseErr.message.includes("JSON")) {
          throw parseErr;
        }
      }
    }
    if (response.status === 502 || response.status === 503 || response.status === 504) {
      throw new Error(`The ${serviceName} is warming up or experiencing high demand (HTTP ${response.status}). Please retry in a moment.`);
    }
    throw new Error(`${serviceName} failed (HTTP ${response.status}). Please try again.`);
  }

  if (rawText) {
    // Attempt standard JSON parse
    try {
      return JSON.parse(rawText) as T;
    } catch {
      // Check if it's an HTML page (e.g. server startup / reverse proxy)
      if (rawText.includes("<!DOCTYPE") || rawText.includes("<html") || rawText.includes("<head")) {
        throw new Error(`The ${serviceName} is warming up. Please tap retry in a moment.`);
      }
    }
  }

  throw new Error(`${serviceName} returned unexpected response format. Please retry.`);
}

/**
 * Executes a fetch with automatic retries on transient network / 502/503 / warm-up HTML errors
 */
async function fetchWithRetry(
  url: string,
  options: RequestInit,
  serviceName: string,
  maxRetries = 2
): Promise<Response> {
  let lastError: any = null;
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      const response = await fetch(url, options);
      const contentType = response.headers.get("content-type") || "";

      // Check if server is warming up (Nginx returns 200 with text/html for /warmup.html)
      // or status is 502/503/504
      const isWarmupOrProxy =
        response.status === 502 ||
        response.status === 503 ||
        response.status === 504 ||
        contentType.includes("text/html");

      if (isWarmupOrProxy && attempt < maxRetries) {
        await new Promise((res) => setTimeout(res, (attempt + 1) * 1200));
        continue;
      }
      return response;
    } catch (netErr: any) {
      lastError = netErr;
      if (attempt < maxRetries) {
        await new Promise((res) => setTimeout(res, (attempt + 1) * 1200));
        continue;
      }
    }
  }
  throw new Error(`Network connection error with ${serviceName}: ${lastError?.message || "Please check your connection"}`);
}

export async function recognizeLandmark(
  imageDataUrl: string,
  hintName?: string,
  targetLanguage?: string,
  targetLanguageName?: string,
  visualSignature?: any,
  gpsCoords?: { latitude: number; longitude: number },
  isSamplePreset?: boolean,
  mode: "landmark_tour" | "guess_location" = "landmark_tour"
): Promise<LandmarkRecognition> {
  const mimeMatch = imageDataUrl.match(/^data:([^;]+);/);
  const mimeType = mimeMatch ? mimeMatch[1] : "image/jpeg";

  const response = await fetchWithRetry(
    "/api/recognize-landmark",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        image: imageDataUrl,
        mimeType,
        hintName,
        targetLanguage,
        targetLanguageName,
        visualSignature,
        gpsCoords,
        isSamplePreset: Boolean(isSamplePreset),
        mode,
      }),
    },
    "landmark recognition service"
  );

  return parseJsonResponse<LandmarkRecognition>(response, "Landmark recognition service");
}

export async function fetchLandmarkHistory(params: {
  landmarkName: string;
  city: string;
  country: string;
  architecturalStyle?: string;
  periodEra?: string;
  summary?: string;
  photoAnalysis?: any;
  arKeypoints?: any[];
  coordinatesEstimate?: { lat: number; lng: number };
  coordinates?: { lat: number; lng: number };
  isLandmark?: boolean;
  detectedCategory?: string;
  notLandmarkReason?: string;
  targetLanguage?: string;
  targetLanguageName?: string;
}): Promise<LandmarkHistory> {
  const response = await fetchWithRetry(
    "/api/fetch-history",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params),
    },
    "history retrieval service"
  );

  return parseJsonResponse<LandmarkHistory>(response, "History retrieval service");
}

export async function fetchMapsGrounding(params: {
  landmarkName: string;
  city?: string;
  country?: string;
  coordinates?: { lat: number; lng: number };
}): Promise<GoogleMapsGroundingInfo> {
  const response = await fetchWithRetry(
    "/api/maps-grounding",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params),
    },
    "Google Maps grounding service"
  );

  return parseJsonResponse<GoogleMapsGroundingInfo>(response, "Google Maps grounding service");
}

export async function generateNarration(
  text: string,
  voiceName: string = "Kore",
  targetLanguageName?: string,
  targetLanguage?: string
): Promise<NarrationAudio> {
  try {
    const response = await fetchWithRetry(
      "/api/generate-narration",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, voiceName, targetLanguageName, targetLanguage }),
      },
      "audio narration service"
    );

    return await parseJsonResponse<NarrationAudio>(response, "Audio narration service");
  } catch (err: any) {
    // Graceful fallback to client browser speech synthesis
    const durationEst = Math.max(15, Math.round((text || "").split(" ").length / 2.5));
    return {
      audioBase64: "",
      useClientFallback: true,
      voiceName: voiceName || "Kore",
      sampleRate: 24000,
      durationEstimateSec: durationEst,
      status: "client_fallback",
      infoMessage: "Interactive Browser Voice Engine active",
      modelUsed: "client-speech-synthesis-fallback",
    };
  }
}

async function clientFastTranslate(text: string, targetLanguage: string): Promise<string> {
  if (!text || !text.trim() || targetLanguage === "en" || targetLanguage === "English") return text;
  const langCode = targetLanguage.split("-")[0].toLowerCase();
  try {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${encodeURIComponent(langCode)}&dt=t&q=${encodeURIComponent(text.trim())}`;
    const res = await fetch(url);
    if (!res.ok) return text;
    const json: any = await res.json();
    if (json && Array.isArray(json[0])) {
      const translated = json[0].map((part: any) => part[0]).filter(Boolean).join("");
      if (translated && translated.trim()) {
        return translated.trim();
      }
    }
  } catch {
    // Return original on complete offline failure
  }
  return text;
}

export async function translateText(
  text: string,
  targetLanguage: string,
  targetLanguageName?: string
): Promise<{ translatedText: string; language: string }> {
  if (!text || targetLanguage === "en") {
    return { translatedText: text, language: "en" };
  }
  try {
    const response = await fetch("/api/translate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text,
        targetLanguage,
        targetLanguageName,
      }),
    });

    if (response.ok) {
      const data = await response.json().catch(() => null);
      if (data?.translatedText && data.translatedText !== text) {
        return data;
      }
    }
    const fallback = await clientFastTranslate(text, targetLanguage);
    return { translatedText: fallback || text, language: targetLanguage };
  } catch {
    const fallback = await clientFastTranslate(text, targetLanguage);
    return { translatedText: fallback || text, language: targetLanguage };
  }
}

export async function translateUIBatch(
  keys: Record<string, string>,
  targetLanguage: string,
  targetLanguageName?: string
): Promise<Record<string, string>> {
  if (!keys || Object.keys(keys).length === 0 || targetLanguage === "en") return keys;
  try {
    const response = await fetch("/api/translate-ui-batch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        keys,
        targetLanguage,
        targetLanguageName,
      }),
    });

    if (response.ok) {
      const data = await response.json().catch(() => null);
      if (data?.translations && Object.keys(data.translations).length > 0) {
        // If any key was translated differently from the original, return the translations
        const hasTranslations = Object.entries(data.translations).some(([k, v]) => v && v !== keys[k]);
        if (hasTranslations) {
          return data.translations;
        }
      }
    }
    // Fallback: translate missing or untranslated keys
    const result: Record<string, string> = {};
    const entries = Object.entries(keys);
    await Promise.all(
      entries.map(async ([k, val]) => {
        if (!val || typeof val !== "string") {
          result[k] = val;
          return;
        }
        result[k] = await clientFastTranslate(val, targetLanguage);
      })
    );
    return result;
  } catch {
    const result: Record<string, string> = {};
    const entries = Object.entries(keys);
    await Promise.all(
      entries.map(async ([k, val]) => {
        result[k] = await clientFastTranslate(val, targetLanguage);
      })
    );
    return result;
  }
}

export interface LandmarkSearchResult {
  name: string;
  localName?: string;
  city?: string;
  country?: string;
  architecturalStyle?: string;
  summary?: string;
  coordinatesEstimate?: { lat: number; lng: number };
  source?: string;
}

export async function searchLandmarks(query: string): Promise<LandmarkSearchResult[]> {
  try {
    const response = await fetch(`/api/search-landmarks?q=${encodeURIComponent(query)}`);
    if (response.ok) {
      const data = await response.json();
      return data.results || [];
    }
  } catch (err) {
    console.warn("Search landmarks error:", err);
  }
  return [];
}

/**
 * Dedicated AI Geo-Detective helper to deduce/guess the location of any photo
 * using visual cues (architecture, vegetation, street signage, scripts, driving side)
 * and cross-referencing with verified photos available on Google & Wikimedia.
 */
export async function guessLocationFromPhoto(
  imageDataUrl: string,
  hintName?: string,
  targetLanguage?: string,
  targetLanguageName?: string,
  gpsCoords?: { latitude: number; longitude: number }
): Promise<LandmarkRecognition> {
  return recognizeLandmark(
    imageDataUrl,
    hintName,
    targetLanguage,
    targetLanguageName,
    undefined,
    gpsCoords,
    false,
    "guess_location"
  );
}

/**
 * Fetches verified reference photos of a location or landmark from Wikimedia Commons & Google,
 * returning high-resolution photos with source attribution and direct Google search URLs.
 */
export async function fetchLocationReferencePhotos(
  locationName: string,
  city?: string,
  country?: string
): Promise<{ photos: LocationReferencePhoto[]; googleImagesUrl: string; googleLensUrl: string }> {
  const response = await fetchWithRetry(
    "/api/location-photos",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ locationName, city, country }),
    },
    "location photos service"
  );

  return parseJsonResponse<{
    photos: LocationReferencePhoto[];
    googleImagesUrl: string;
    googleLensUrl: string;
  }>(response, "Location photos service");
}
