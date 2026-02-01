import type { ContentRequest, GeneratedContent } from "../types/content.js";
import { generateOutline } from "./outlineGenerator.js";
import { writeSection } from "./sectionWriter.js";

export async function generateContent (
    request: ContentRequest
): Promise<GeneratedContent> {
    const outline = await generateOutline(request);

    const sections: string[] = [];

    for (const section of outline.sections) {
        const content = await writeSection({
            topic: request.topic,
            heading: section.heading,
            description: section.description,
            targetWordCount: section.targetWordCount,
            ...(request.keywords ? { keywords: request.keywords } : {})
        },
    );
        sections.push(`## ${section.heading}\n\n${content}`);
    }

    const fullContent = sections.join("\n\n");

    return {
        title: outline.title,
        content: fullContent,
        meta: {
        wordCount: fullContent.split(/\s+/).length,
        keywordsUsed: request.keywords ?? []
        }
    };
}