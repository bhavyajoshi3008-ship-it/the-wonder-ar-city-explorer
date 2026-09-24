import fs from "fs";
import path from "path";

async function testCases() {
  const cases = [
    { file: "public/images/landmarks/sagrada-familia.jpg", lang: "es", langName: "Spanish" },
    { file: "public/images/landmarks/hagia-sophia.jpg", lang: "en", langName: "English" },
    { file: "public/images/landmarks/lalibela.jpg", lang: "en", langName: "English" },
    { file: "public/images/landmarks/univ-harvard.jpg", lang: "en", langName: "English" },
    { file: "public/images/landmarks/mount-fuji.jpg", lang: "ja", langName: "Japanese" },
  ];

  for (const c of cases) {
    const fullPath = path.join(process.cwd(), c.file);
    if (!fs.existsSync(fullPath)) continue;
    const base64 = fs.readFileSync(fullPath).toString("base64");
    const dataUrl = `data:image/jpeg;base64,${base64}`;

    const start = Date.now();
    try {
      const res = await fetch("http://localhost:3000/api/recognize-landmark", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          image: dataUrl,
          targetLanguage: c.lang,
          targetLanguageName: c.langName,
          mode: "landmark_tour",
        }),
      });

      const data = await res.json();
      console.log(`[PASS] ${c.file} (${c.lang}) in ${Date.now() - start}ms:`, {
        name: data.name,
        city: data.city,
        country: data.country,
        category: data.detectedCategory,
        confidence: data.confidence,
        modelUsed: data.modelUsed,
        summarySample: data.summary?.slice(0, 60),
      });
    } catch (e: any) {
      console.error(`[FAIL] ${c.file}:`, e.message);
    }
  }
}

testCases();
