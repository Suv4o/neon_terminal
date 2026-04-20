import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
    collections: {
        articles: defineCollection({
            type: "page",
            source: "articles/**/**",
            schema: z.object({
                title: z.string(),
                description: z.string(),
                date: z.string(),
                image: z.string(),
                published: z.string().optional(),
                readTime: z.number(),
                author: z.string().optional(),
                articleTags: z.array(z.string()),
                keywords: z.array(z.string()).optional(),
                type: z.string().optional(),
                blog: z.string().optional(),
            }),
        }),
        throughTheLens: defineCollection({
            type: "page",
            source: "through-the-lens/**",
            schema: z.object({
                title: z.string(),
                description: z.string(),
                image: z.string(),
                keywords: z.array(z.string()).optional(),
                type: z.string().optional(),
                slug: z.string().optional(),
                location: z.string().optional(),
                gridImages: z
                    .array(
                        z.object({
                            filename: z.string(),
                            title: z.string(),
                            location: z.string().optional(),
                            aspect: z.string().optional(),
                        }),
                    )
                    .optional(),
            }),
        }),
    },
});
