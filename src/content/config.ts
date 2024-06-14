// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `type` and `schema` for each collection
const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      description: z.string(),
      keywords: z.optional(z.array(z.string())),
      tags: z.optional(z.array(z.string())),
      pubDate: z.date(),
      image: z.object({
        url: z.string(),
        alt: z.string()
        }),
      author: z.object({
        name: z.string(),
        link: z.string(),
      }),
      type: z.string(),

    })
});
const plansCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pricing: z.object({
      initial: z.number().optional().nullable(),
      subscription: z.number().optional().nullable(),
      subsInfo: z.string(),
    }),
    feat: z.array(z.string()),
    benefits: z.array(z.string()),
    cta: z.string(),
    link: z.string(),
    available: z.boolean().optional().nullable(),
  }),
})
// Export a single `collections` object to register your collection(s)
export const collections = {
  posts: postsCollection,
  plans: plansCollection,
};