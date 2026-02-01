import { z } from "zod";

export interface ContentRequest {
    topic: string;
    keywords?: string[]; //Array of strings
    targetWordCount: number;
}

export interface ContentOutline {
    title: string;
    sections: {
        heading: string;
        description: string;
        targetWordCount: number;
    }[]; // To make this an array of different sections
}

export interface GeneratedContent {
    title: string;
    content: string;
    meta: {
        wordCount: number;
        keywordsUsed: string[];
    }
}

export const ContentOutlineSchema = z.object({
    title: z.string(),
    sections: z.array(
    z.object({
        heading: z.string(),
        description: z.string(),
        targetWordCount: z.number().int().positive()
    })
    )
});

export type ContentOutlineSchema = z.infer<typeof ContentOutlineSchema>;