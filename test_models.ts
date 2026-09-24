import "dotenv/config";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

async function test() {
  const models = [
    "gemini-3.5-flash-lite",
    "gemini-3.5-flash",
    "gemini-3-flash-preview",
    "gemini-3.8-flash",
    "gemini-2.0-flash",
    "gemini-2.5-flash",
    "gemini-flash-latest"
  ];
  for (const m of models) {
    try {
      const res = await ai.models.generateContent({
        model: m,
        contents: "Say hello in 2 words",
      });
      console.log("SUCCESS:", m, "->", res.text?.trim());
    } catch (e: any) {
      console.log("FAIL:", m, "->", e?.status, e?.message?.slice(0, 80));
    }
  }
}

test();
