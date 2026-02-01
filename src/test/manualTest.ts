import { generateContent } from "../engine/contentWriter.js";

async function run() {
  const result = await generateContent({
    topic: "What is Kubernetes?",
    keywords: ["containers", "devops"],
    targetWordCount: 500
  });

  console.log(JSON.stringify(result, null, 2));
}

run().catch(console.error);