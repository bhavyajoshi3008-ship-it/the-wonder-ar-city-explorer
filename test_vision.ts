import "dotenv/config";
import fs from "fs";
import path from "path";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

async function testVision() {
  const imgPath = path.join(process.cwd(), "public/images/landmarks/taj-mahal.jpg");
  const imgBuf = fs.readFileSync(imgPath);
  const base64 = imgBuf.toString("base64");

  const prompt = `You are an elite global visual recognition expert.
Identify this place.
Output strictly valid JSON:
{
  "isLandmark": true,
  "detectedCategory": "landmark",
  "name": "Recognized Landmark or Place Name",
  "city": "City",
  "country": "Country",
  "confidence": 95
}`;

  console.log("Calling gemini-3.5-flash-lite with image...");
  const start = Date.now();
  try {
    const res = await ai.models.generateContent({
      model: "gemini-3.5-flash-lite",
      contents: {
        parts: [
          {
            inlineData: {
              mimeType: "image/jpeg",
              data: base64,
            },
          },
          { text: prompt },
        ],
      },
      config: { responseMimeType: "application/json" },
    });
    console.log(`Success in ${Date.now() - start}ms:`, res.text);
  } catch (err: any) {
    console.error(`Failed in ${Date.now() - start}ms:`, err);
  }
}

testVision();
