import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  // Type-check and validate frontmatter
  schema: ({ image }) =>
    z.object({
      author: z.string(),
      date: z.string(),
      image: image(),
      title: z.string(),
      // FIX: Add the description field to the schema.
      // This is required because your [slug].astro page uses it.
      description: z.string(),
    }),
});

export const collections = {
  posts: postsCollection,
};
