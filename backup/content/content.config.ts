// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';

// 3. Define your collection(s)
const blog = defineCollection({
    loader: glob({ pattern: "**/*.md" }),
    schema: z.object({
        title: z.string(),
        pubDate: z.coerce.date(),
        description: z.string(),
        author: z.string(),
        image: z.object({
            url: z.string(),
            alt: z.string(),
        }),
        tags: z.array(z.string()),
    })
});

const bookmark = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/data/bookmark" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
    })
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { blog, bookmark };