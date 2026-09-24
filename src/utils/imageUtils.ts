/**
 * Reads a File or Blob into a base64 Data URL string
 */
export function fileToDataUrl(file: File | Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
}

/**
 * Loads an image from a URL and converts it to a base64 Data URL via fetch blob or canvas
 */
export async function urlToDataUrl(url: string): Promise<string> {
  if (!url) return "";
  if (url.startsWith("data:")) return url;

  // 1. Prefer direct fetch -> blob for local / relative and same-origin paths
  try {
    const res = await fetch(url);
    if (res.ok) {
      const blob = await res.blob();
      return await fileToDataUrl(blob);
    }
  } catch {
    // Fall back to Image element approach
  }

  // 2. Image element canvas conversion
  return new Promise((resolve) => {
    const img = new Image();
    if (url.startsWith("http://") || url.startsWith("https://")) {
      img.crossOrigin = "anonymous";
    }
    img.referrerPolicy = "no-referrer";
    img.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        const maxDim = 1024;
        let { width, height } = img;
        if (width > maxDim || height > maxDim) {
          if (width > height) {
            height = Math.round((height * maxDim) / width);
            width = maxDim;
          } else {
            width = Math.round((width * maxDim) / height);
            height = maxDim;
          }
        }
        canvas.width = width || 640;
        canvas.height = height || 480;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          resolve(url);
          return;
        }
        ctx.drawImage(img, 0, 0, width, height);
        const dataUrl = canvas.toDataURL("image/jpeg", 0.82);
        resolve(dataUrl);
      } catch {
        resolve(url);
      }
    };
    img.onerror = () => {
      // Gracefully resolve with original URL so callers never crash
      resolve(url);
    };
    img.src = url;
  });
}

/**
 * Resizes a base64 image if it exceeds maximum dimensions
 */
export async function optimizeBase64Image(dataUrl: string, maxDimension = 1024): Promise<string> {
  return new Promise((resolve) => {
    if (!dataUrl) {
      resolve("");
      return;
    }
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      let { width, height } = img;
      if (!width || !height) {
        resolve(dataUrl);
        return;
      }
      if (width > maxDimension || height > maxDimension) {
        if (width > height) {
          height = Math.round((height * maxDimension) / width);
          width = maxDimension;
        } else {
          width = Math.round((width * maxDimension) / height);
          height = maxDimension;
        }
      }
      try {
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.drawImage(img, 0, 0, width, height);
          // Always export as clean image/jpeg with high 0.85 quality for Gemini Vision
          resolve(canvas.toDataURL("image/jpeg", 0.85));
        } else {
          resolve(dataUrl);
        }
      } catch {
        resolve(dataUrl);
      }
    };
    img.onerror = () => resolve(dataUrl);
    img.src = dataUrl;
  });
}

export interface VisualSignature {
  dominantTone: "terracotta_brick" | "red_sandstone" | "white_marble" | "golden_sandstone" | "dark_basalt" | "neoclassical_white" | "general_heritage";
  terracottaRatio: number;
  whiteMarbleRatio: number;
  yellowSandstoneRatio: number;
  darkStoneRatio: number;
  greeneryRatio: number;
  brightness: number;
  warmth: number;
  topCandidates: string[];
}

/**
 * Analyzes image pixel color distributions and architectural chromatic profiles
 * using an offscreen canvas in under 4ms.
 */
export async function analyzeImageVisualSignature(dataUrl: string): Promise<VisualSignature> {
  return new Promise((resolve) => {
    const fallback: VisualSignature = {
      dominantTone: "general_heritage",
      terracottaRatio: 0.1,
      whiteMarbleRatio: 0.1,
      yellowSandstoneRatio: 0.1,
      darkStoneRatio: 0.1,
      greeneryRatio: 0.1,
      brightness: 120,
      warmth: 10,
      topCandidates: [],
    };

    if (typeof window === "undefined") {
      resolve(fallback);
      return;
    }

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      try {
        const size = 64;
        const canvas = document.createElement("canvas");
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          resolve(fallback);
          return;
        }

        ctx.drawImage(img, 0, 0, size, size);
        const imgData = ctx.getImageData(0, 0, size, size).data;
        const totalPixels = size * size;

        let terracottaCount = 0;
        let whiteMarbleCount = 0;
        let yellowSandstoneCount = 0;
        let darkStoneCount = 0;
        let greeneryCount = 0;
        let totalBrightness = 0;
        let totalRed = 0;
        let totalBlue = 0;

        for (let i = 0; i < imgData.length; i += 4) {
          const r = imgData[i];
          const g = imgData[i + 1];
          const b = imgData[i + 2];

          totalBrightness += (r + g + b) / 3;
          totalRed += r;
          totalBlue += b;

          // Terracotta / Red Brick / Warm Victorian Gothic Basalt voussoirs
          if (r > 90 && g < 110 && b < 100 && (r - g) > 18 && (r - b) > 22) {
            terracottaCount++;
          }
          // Pure White Marble (Taj Mahal, Victoria Memorial, Lotus Temple)
          else if (r > 185 && g > 185 && b > 185 && Math.abs(r - g) < 25 && Math.abs(g - b) < 25) {
            whiteMarbleCount++;
          }
          // Golden / Buff Sandstone (Gateway of India, Jaisalmer Fort, Amer Fort)
          else if (r > 150 && g > 125 && b < 120 && (r - b) > 35) {
            yellowSandstoneCount++;
          }
          // Deep Basalt / Dark Gothic Masonry / Wood verandas
          else if (r < 80 && g < 80 && b < 80) {
            darkStoneCount++;
          }
          // Quadrangle Greenery / Courtyard Lawn / Trees
          else if (g > r * 1.12 && g > b * 1.12 && g > 55) {
            greeneryCount++;
          }
        }

        const terracottaRatio = terracottaCount / totalPixels;
        const whiteMarbleRatio = whiteMarbleCount / totalPixels;
        const yellowSandstoneRatio = yellowSandstoneCount / totalPixels;
        const darkStoneRatio = darkStoneCount / totalPixels;
        const greeneryRatio = greeneryCount / totalPixels;
        const brightness = Math.round(totalBrightness / totalPixels);
        const warmth = Math.round((totalRed - totalBlue) / totalPixels);

        let dominantTone: VisualSignature["dominantTone"] = "general_heritage";
        let topCandidates: string[] = [];

        // Identify dominant architectural material tone
        if (
          terracottaRatio > 0.05 ||
          (terracottaRatio > 0.025 && darkStoneRatio > 0.12) ||
          (terracottaRatio > 0.025 && greeneryRatio > 0.04) ||
          (warmth > 15 && darkStoneRatio > 0.15)
        ) {
          dominantTone = "terracotta_brick";
        } else if (whiteMarbleRatio > 0.20 && brightness > 145) {
          dominantTone = "white_marble";
        } else if (yellowSandstoneRatio > 0.14) {
          dominantTone = "golden_sandstone";
        } else if (terracottaRatio > 0.18) {
          dominantTone = "red_sandstone";
        } else if (darkStoneRatio > 0.35) {
          dominantTone = "dark_basalt";
        } else {
          dominantTone = "general_heritage";
        }

        resolve({
          dominantTone,
          terracottaRatio: Math.round(terracottaRatio * 100) / 100,
          whiteMarbleRatio: Math.round(whiteMarbleRatio * 100) / 100,
          yellowSandstoneRatio: Math.round(yellowSandstoneRatio * 100) / 100,
          darkStoneRatio: Math.round(darkStoneRatio * 100) / 100,
          greeneryRatio: Math.round(greeneryRatio * 100) / 100,
          brightness,
          warmth,
          topCandidates,
        });
      } catch (err) {
        console.warn("Visual signature calculation notice:", err);
        resolve(fallback);
      }
    };

    img.onerror = () => resolve(fallback);
    img.src = dataUrl;
  });
}

