import "dotenv/config";
import { generateContent } from "./engine/contentWriter.js";

async function main() {
    const article = await generateContent({
    topic: "Why Singapore is an economic powerhouse",
    targetWordCount: 1200,
    keywords: ["finance", "economy", "Singapore"]
    }
    );
    console.log(article);
}

main();