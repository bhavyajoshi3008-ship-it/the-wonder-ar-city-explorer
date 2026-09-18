import { LandmarkRecognition, LandmarkHistory, NarrationAudio } from "../types";

export async function recognizeLandmark(
  imageDataUrl: string,
  hintName?: string
): Promise<LandmarkRecognition> {
  const mimeMatch = imageDataUrl.match(/^data:([^;]+);/);
  const mimeType = mimeMatch ? mimeMatch[1] : "image/jpeg";

  let response: Response;
  try {
    response = await fetch("/api/recognize-landmark", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        image: imageDataUrl,
        mimeType,
        hintName,
      }),
    });
  } catch (netErr: any) {
    throw new Error(`Network error connecting to recognition service: ${netErr?.message || "Please check connection"}`);
  }

  const contentType = response.headers.get("content-type") || "";
  if (!response.ok) {
    if (contentType.includes("application/json")) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `Recognition failed with status ${response.status}`);
    } else {
      const text = await response.text().catch(() => "");
      throw new Error(`Server temporarily unavailable (${response.status}). Please retry in a moment.`);
    }
  }

  if (!contentType.includes("application/json")) {
    throw new Error("Recognition service returned unexpected response format. Please retry.");
  }

  return response.json();
}

export async function fetchLandmarkHistory(params: {
  landmarkName: string;
  city: string;
  country: string;
  architecturalStyle?: string;
}): Promise<LandmarkHistory> {
  let response: Response;
  try {
    response = await fetch("/api/fetch-history", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params),
    });
  } catch (netErr: any) {
    throw new Error(`Network error retrieving history: ${netErr?.message || "Please check connection"}`);
  }

  const contentType = response.headers.get("content-type") || "";
  if (!response.ok) {
    if (contentType.includes("application/json")) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `History retrieval failed with status ${response.status}`);
    } else {
      throw new Error(`History service temporarily unavailable (${response.status}). Please retry.`);
    }
  }

  if (!contentType.includes("application/json")) {
    throw new Error("History service returned unexpected response format.");
  }

  return response.json();
}

export async function generateNarration(
  text: string,
  voiceName: string = "Kore"
): Promise<NarrationAudio> {
  let response: Response;
  try {
    response = await fetch("/api/generate-narration", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, voiceName }),
    });
  } catch (netErr: any) {
    throw new Error(`Network error generating narration: ${netErr?.message || "Please check connection"}`);
  }

  const contentType = response.headers.get("content-type") || "";
  if (!response.ok) {
    if (contentType.includes("application/json")) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `Audio narration generation failed with status ${response.status}`);
    } else {
      throw new Error(`Audio narration service temporarily unavailable (${response.status}).`);
    }
  }

  if (!contentType.includes("application/json")) {
    throw new Error("Audio service returned unexpected response format.");
  }

  return response.json();
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

    return response.json();
  } catch {
    return { translatedText: text, language: targetLanguage };
  }
}

