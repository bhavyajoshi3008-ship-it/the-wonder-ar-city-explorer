import { LandmarkRecognition, LandmarkHistory, NarrationAudio } from "../types";

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
  hintName?: string
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
  isLandmark?: boolean;
  detectedCategory?: string;
  notLandmarkReason?: string;
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

export async function generateNarration(
  text: string,
  voiceName: string = "Kore",
  targetLanguageName?: string
): Promise<NarrationAudio> {
  try {
    const response = await fetchWithRetry(
      "/api/generate-narration",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, voiceName, targetLanguageName }),
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

export async function translateText(
  text: string,
  targetLanguage: string,
  targetLanguageName?: string
): Promise<{ translatedText: string; language: string }> {
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

    if (!response.ok) {
      return { translatedText: text, language: targetLanguage };
    }

    const data = await response.json().catch(() => null);
    if (data?.translatedText) {
      return data;
    }
    return { translatedText: text, language: targetLanguage };
  } catch {
    return { translatedText: text, language: targetLanguage };
  }
}

export async function translateUIBatch(
  keys: Record<string, string>,
  targetLanguage: string,
  targetLanguageName?: string
): Promise<Record<string, string>> {
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

    if (!response.ok) return keys;
    const data = await response.json().catch(() => null);
    return data?.translations || keys;
  } catch {
    return keys;
  }
}


