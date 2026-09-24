import "dotenv/config";
import fs from "fs";
import path from "path";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

async function testFull() {
  const images = [
    "public/images/landmarks/sagrada-familia.jpg",
    "public/images/landmarks/hagia-sophia.jpg",
    "public/images/landmarks/univ-oxford.jpg",
    "public/images/landmarks/lalibela.jpg",
  ];

  for (const relPath of images) {
    const fullPath = path.join(process.cwd(), relPath);
    if (!fs.existsSync(fullPath)) continue;
    const base64 = fs.readFileSync(fullPath).toString("base64");

    const prompt = `You are an elite global visual recognition expert, geographer, architectural historian, and world heritage specialist.
Carefully inspect every pixel of this photograph and accurately identify the exact place, landmark, structure, landscape, or subject depicted.

Output strictly valid JSON matching this schema:
{
  "isLandmark": true,
  "detectedCategory": "landmark | sacred | campus | nature | architecture | urban | person | object",
  "notLandmarkReason": "",
  "name": "Recognized Landmark or Place Name",
  "localName": "Name in local language",
  "city": "City or Region / State",
  "country": "Country",
  "architecturalStyle": "Architectural Style",
  "periodEra": "Year built or era",
  "confidence": 95,
  "summary": "2-3 sentence overview.",
  "arKeypoints": [
    {
      "id": "pt-1",
      "label": "Visible feature label",
      "featureType": "facade | dome | spire | arch | column",
      "description": "Short note",
      "x": 50,
      "y": 25
    }
  ]
}`;

    const start = Date.now();
    try {
      const res = await ai.models.generateContent({
        model: "gemini-3.5-flash-lite",
        contents: {
          parts: [
            { inlineData: { mimeType: "image/jpeg", data: base64 } },
            { text: prompt },
          ],
        },
        config: { responseMimeType: "application/json" },
      });
      const parsed = JSON.parse(res.text || "{}");
      console.log(`[PASS] ${relPath} in ${Date.now() - start}ms: Name="${parsed.name}", City="${parsed.city}", Cat="${parsed.detectedCategory}", Conf=${parsed.confidence}`);
    } catch (e: any) {
      console.error(`[FAIL] ${relPath} in ${Date.now() - start}ms:`, e.status, e.message);
    }
  }
}

testFull();
