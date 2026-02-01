import { streamText } from "ai";
import { openai } from "@ai-sdk/openai";

interface SectionRequest {
  topic: string;
  heading: string;
  description: string;
  targetWordCount: number;
  keywords?: string[];
}

export async function writeSection(
  input: SectionRequest
): Promise<string> {
  const prompt = `
Write a section for an article.

Topic: ${input.topic}
Section heading: ${input.heading}
Description: ${input.description}
Target length: ${input.targetWordCount} words
Keywords to naturally include: ${input.keywords?.join(", ") ?? "none"}

Rules:
- Write in natural paragraphs
- Use Normal paragraphs
- No prose
- Just words with the headers and everything required
- NO code blocks
`;

const { text } = await streamText({
  model: openai("gpt-4o-mini"),
  prompt
});

return text;
}