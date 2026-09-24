import fs from "fs";
import path from "path";

async function runTest() {
  const imgPath = path.join(process.cwd(), "public/images/landmarks/taj-mahal.jpg");
  const base64 = fs.readFileSync(imgPath).toString("base64");
  const dataUrl = `data:image/jpeg;base64,${base64}`;

  console.log("Sending recognition request to http://localhost:3000/api/recognize-landmark...");
  const start = Date.now();
  try {
    const res = await fetch("http://localhost:3000/api/recognize-landmark", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        image: dataUrl,
        mode: "landmark_tour",
      }),
    });

    const data = await res.json();
    console.log(`Response in ${Date.now() - start}ms:`, {
      name: data.name,
      city: data.city,
      country: data.country,
      category: data.detectedCategory,
      confidence: data.confidence,
      modelUsed: data.modelUsed,
      keypointsCount: data.arKeypoints?.length,
    });
  } catch (e: any) {
    console.error("Test failed:", e.message);
  }
}

runTest();
