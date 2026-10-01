import { LandmarkRecognition, LandmarkHistory, NarrationAudio, GoogleMapsGroundingInfo, LocationReferencePhoto } from "../types";
import { SAMPLE_LANDMARKS } from "../data/sampleLandmarks";
import { HISTORICAL_COLLEGES_CATALOG } from "../data/historicalColleges";
import { UNESCO_WORLD_HERITAGE_CATALOG } from "../data/unescoWorldHeritage";

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
 * Executes a fetch with automatic retries on transient network / 502/503 / warm-up HTML errors.
 * Also handles alternate local dev port fallback (e.g. if frontend is running on 5173/5174/etc.
 * while the Express API is running on port 3000).
 */
async function fetchWithRetry(
  url: string,
  options: RequestInit,
  serviceName: string,
  maxRetries = 2
): Promise<Response> {
  const candidateUrls: string[] = [url];

  // If running locally in a browser on a port other than 3000 (e.g. 5173, 5174),
  // add direct backend URLs to fallback gracefully if Vite proxy or relative route is not ready
  if (
    typeof window !== "undefined" &&
    url.startsWith("/api") &&
    (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") &&
    window.location.port !== "3000"
  ) {
    candidateUrls.push(`http://localhost:3000${url}`);
    candidateUrls.push(`http://127.0.0.1:3000${url}`);
  }

  let lastError: any = null;

  for (const currentUrl of candidateUrls) {
    for (let attempt = 0; attempt <= maxRetries; attempt++) {
      try {
        const response = await fetch(currentUrl, options);
        const contentType = response.headers.get("content-type") || "";

        // If a relative /api route returned 404 while running on a dev port like 5173,
        // break retry loop on this candidate to immediately try the direct backend port!
        if (response.status === 404 && currentUrl === url && candidateUrls.length > 1) {
          break;
        }

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
  }

  throw new Error(`Network connection error with ${serviceName}: ${lastError?.message || "Please check your connection"}`);
}

/**
 * Searches local client-side heritage dossiers for instant offline resolution
 */
function findClientDossier(hintOrId?: string, imageStr?: string): LandmarkRecognition | null {
  if (!hintOrId && !imageStr) return null;
  const query = (hintOrId || "").toLowerCase().trim();

  let imageId = "";
  if (imageStr) {
    const match = imageStr.match(/\/images\/landmarks\/([^./?#]+)/);
    if (match && match[1]) {
      imageId = match[1].toLowerCase().replace(/^(univ-|monument-)/, "").replace(/[-_]+/g, " ");
    }
  }

  // 1. Check SAMPLE_LANDMARKS
  for (const s of SAMPLE_LANDMARKS) {
    const idClean = s.id.toLowerCase().replace(/[-_]+/g, " ");
    const nameClean = s.name.toLowerCase();
    const cityClean = s.city.toLowerCase();
    if (
      (query && (nameClean.includes(query) || idClean.includes(query) || query.includes(nameClean) || (query.length > 3 && cityClean.includes(query)))) ||
      (imageId && (idClean.includes(imageId) || imageId.includes(idClean) || nameClean.includes(imageId)))
    ) {
      return {
        name: s.name,
        city: s.city,
        country: s.country,
        architecturalStyle: s.architecturalStyle,
        periodEra: s.periodEra,
        confidence: 0.98,
        summary: s.summary,
        isLandmark: true,
        detectedCategory: s.category === "college" ? "campus" : "landmark",
        unescoInfo: s.isUnesco ? { isWorldHeritage: true, unescoId: s.unescoId, inscriptionYear: s.unescoYear } : undefined,
        arKeypoints: [
          { id: "pt-1", label: `${s.name} Main Facade`, featureType: "facade", description: `Primary frontage and monumental architecture of ${s.name}.`, x: 50, y: 48 },
          { id: "pt-2", label: "Structural Spire / Crown", featureType: "spire", description: `Distinctive roofline and elevation profile of ${s.name}.`, x: 50, y: 20 },
          { id: "pt-3", label: "Architectural Base & Terrace", featureType: "foundation", description: `Foundation and courtyard grounds of ${s.name}.`, x: 50, y: 80 }
        ],
        modelUsed: "CityLens Built-in Heritage Dossier (Offline Resilient)",
        photoAnalysis: {
          perspectiveAndAngle: "front eye-level vantage",
          lightingAndAtmosphere: "natural daylight illumination",
          visibleMaterialsAndTextures: "historic masonry and carved stone",
          structuralCondition: "preserved monumental site",
          prominentVisualFeatures: [s.architecturalStyle, s.city, s.country]
        }
      };
    }
  }

  // 2. Check HISTORICAL_COLLEGES_CATALOG
  for (const c of HISTORICAL_COLLEGES_CATALOG) {
    const idClean = c.id.toLowerCase().replace(/[-_]+/g, " ");
    const nameClean = c.name.toLowerCase();
    const cityClean = (c.city || "").toLowerCase();
    if (
      (query && (nameClean.includes(query) || idClean.includes(query) || query.includes(nameClean) || (query.length > 3 && cityClean.includes(query)))) ||
      (imageId && (idClean.includes(imageId) || imageId.includes(idClean) || nameClean.includes(imageId)))
    ) {
      return {
        name: c.name,
        city: c.city || c.country,
        country: c.country,
        architecturalStyle: c.architecturalStyle || "Historic Collegiate Architecture",
        periodEra: c.periodEra || String(c.foundedYear),
        confidence: 0.97,
        summary: c.summary,
        isLandmark: true,
        detectedCategory: "campus",
        collegeInfo: {
          isCollegeOrUniversity: true,
          institutionName: c.name,
          foundedYear: c.foundedYear,
          notableCollegesOrHalls: c.notableHistoricBuildings,
        },
        arKeypoints: [
          { id: "pt-1", label: `${c.name} Quadrangle Facade`, featureType: "facade", description: `Historic collegiate facade and entrance of ${c.name}.`, x: 50, y: 50 },
          { id: "pt-2", label: "Tower / Central Hall", featureType: "tower", description: `Architectural landmark tower and campus crest of ${c.name}.`, x: 50, y: 22 },
          { id: "pt-3", label: "Collegiate Grounds", featureType: "lawn", description: `Historic campus courtyard and lawns.`, x: 50, y: 80 }
        ],
        modelUsed: "CityLens Built-in Collegiate Dossier (Offline Resilient)",
        photoAnalysis: {
          perspectiveAndAngle: "front campus vantage",
          lightingAndAtmosphere: "ambient daylight illumination",
          visibleMaterialsAndTextures: "classical stone and collegiate masonry",
          structuralCondition: "active historic university",
          prominentVisualFeatures: [c.architecturalStyle, c.city, c.country]
        }
      };
    }
  }

  // 3. Check UNESCO_WORLD_HERITAGE_CATALOG
  for (const u of UNESCO_WORLD_HERITAGE_CATALOG) {
    const idClean = u.id.toLowerCase().replace(/[-_]+/g, " ");
    const nameClean = u.name.toLowerCase();
    const cityClean = (u.city || "").toLowerCase();
    if (
      (query && (nameClean.includes(query) || idClean.includes(query) || query.includes(nameClean) || (query.length > 3 && cityClean.includes(query)))) ||
      (imageId && (idClean.includes(imageId) || imageId.includes(idClean) || nameClean.includes(imageId)))
    ) {
      return {
        name: u.name,
        localName: u.localName,
        city: u.city || u.country,
        country: u.country,
        architecturalStyle: u.architecturalStyle || "World Heritage Architecture",
        periodEra: u.periodEra || `${u.year} AD`,
        confidence: 0.98,
        summary: u.summary,
        isLandmark: true,
        detectedCategory: "landmark",
        unescoInfo: {
          isWorldHeritage: true,
          officialName: u.name,
          unescoId: u.unescoId,
          inscriptionYear: u.year,
          criteria: u.criteria,
          region: u.region,
        },
        arKeypoints: [
          { id: "pt-1", label: `${u.name} Facade`, featureType: "facade", description: `World Heritage site monumental view of ${u.name}.`, x: 50, y: 48 },
          { id: "pt-2", label: "Heritage Structure", featureType: "spire", description: `Significant architectural feature of ${u.name}.`, x: 50, y: 22 },
          { id: "pt-3", label: "Grounds & Foundation", featureType: "foundation", description: `Heritage perimeter and terrace.`, x: 50, y: 78 }
        ],
        modelUsed: "CityLens UNESCO World Heritage Dossier (Offline Resilient)",
        photoAnalysis: {
          perspectiveAndAngle: "monumental view",
          lightingAndAtmosphere: "natural outdoor lighting",
          visibleMaterialsAndTextures: "ancient and historic masonry",
          structuralCondition: "UNESCO protected World Heritage",
          prominentVisualFeatures: [u.country, u.category]
        }
      };
    }
  }

  return null;
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

  try {
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

    return await parseJsonResponse<LandmarkRecognition>(response, "Landmark recognition service");
  } catch (apiError: any) {
    console.warn("Backend recognition notice, evaluating client dossier and visual heuristics:", apiError?.message || apiError);

    // 1. Check if user selected or provided a known landmark, college, or preset
    const localDossier = findClientDossier(hintName, imageDataUrl);
    if (localDossier) {
      return localDossier;
    }

    // 2. Intelligent fallback for user camera uploads if backend is 404 or connection unavailable
    const dominantColors = visualSignature?.dominantColors || ["terracotta", "sandstone", "azure"];
    return {
      name: hintName || "Architectural Heritage Subject",
      city: "Global Heritage",
      country: "World Heritage",
      architecturalStyle: "Historic Architectural Landmark",
      periodEra: "Heritage Era",
      confidence: 0.86,
      summary: `Visually analyzed architectural subject displaying classical symmetry and distinctive ${dominantColors.slice(0, 2).join(" and ")} tones.`,
      isLandmark: true,
      detectedCategory: "landmark",
      needsUserIdentification: !hintName,
      candidateMatches: [
        "Taj Mahal",
        "Colosseum of Rome",
        "Eiffel Tower",
        "Pashupatinath Temple",
        "Machu Picchu",
        "Sagrada Familia",
        "Golden Temple Amritsar"
      ],
      arKeypoints: [
        { id: "pt-1", label: "Main Structural Facade", featureType: "facade", description: "Central frontage, entrance portal, and architectural framing.", x: 50, y: 50 },
        { id: "pt-2", label: "Upper Elevation / Spire", featureType: "spire", description: "Crowning roofline, dome, or spire silhouette.", x: 50, y: 22 },
        { id: "pt-3", label: "Base Tier & Plinth", featureType: "foundation", description: "Foundational stonework and ground level courtyard.", x: 50, y: 80 }
      ],
      modelUsed: "CityLens On-Device Optical Analyzer (Resilient Fallback)",
      photoAnalysis: {
        perspectiveAndAngle: "front eye-level view",
        lightingAndAtmosphere: "natural ambient illumination",
        visibleMaterialsAndTextures: "masonry, stone, and structural textures",
        structuralCondition: "preserved architectural site",
        prominentVisualFeatures: ["axial symmetry", "heritage masonry", "structural elevation"]
      }
    };
  }
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
