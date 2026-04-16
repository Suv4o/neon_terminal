import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
    collections: {
        articles: defineCollection({
            type: "page",
            source: "articles/**",
            schema: z.object({
                title: z.string(),
                description: z.string(),
                date: z.string(),
                cover: z.string(),
                tags: z.array(z.string()),
                readingTime: z.number(),
            }),
        }),
    },
});
