import type { ContentRequest, ContentOutline } from "../types/content.js";
import { generateObject, generateText } from "ai";
import { openai } from "@ai-sdk/openai";
import { ContentOutlineSchema } from "../types/content.js";

export async function generateOutline(
    request: ContentRequest
  ) {
    const prompt = `
  You are a professional content strategist.
  
  Create a structured outline for an article.
  
  Topic: ${request.topic}
  Target length: ${request.targetWordCount} words
  Keywords: ${request.keywords?.join(", ") ?? "none"}
  
  Rules:
  - No prose outside JSON
  - Sections must sum roughly to target length
  `;
  
    const { object } = await generateObject({
      model: openai("gpt-4o-mini"),
      schema: ContentOutlineSchema,
      prompt
    });
  
    return object;
  }