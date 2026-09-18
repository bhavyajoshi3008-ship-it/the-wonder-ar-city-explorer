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
 * Loads an image from a URL and converts it to a base64 Data URL via canvas
 */
export async function urlToDataUrl(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.referrerPolicy = "no-referrer";
    img.onload = () => {
      const canvas = document.createElement("canvas");
      // Scale down if massive to keep payload optimal for Gemini multimodal processing
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
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        reject(new Error("Unable to create canvas context"));
        return;
      }
      ctx.drawImage(img, 0, 0, width, height);
      const dataUrl = canvas.toDataURL("image/jpeg", 0.82);
      resolve(dataUrl);
    };
    img.onerror = () => {
      reject(new Error(`Failed to load image from ${url}`));
    };
    img.src = url;
  });
}

/**
 * Resizes a base64 image if it exceeds maximum dimensions
 */
export async function optimizeBase64Image(dataUrl: string, maxDimension = 1024): Promise<string> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      let { width, height } = img;
      if (width <= maxDimension && height <= maxDimension) {
        resolve(dataUrl);
        return;
      }
      if (width > height) {
        height = Math.round((height * maxDimension) / width);
        width = maxDimension;
      } else {
        width = Math.round((width * maxDimension) / height);
        height = maxDimension;
      }
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL("image/jpeg", 0.82));
      } else {
        resolve(dataUrl);
      }
    };
    img.onerror = () => resolve(dataUrl);
    img.src = dataUrl;
  });
}
