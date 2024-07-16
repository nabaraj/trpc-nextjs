import { z } from "zod";

// Define the schema for a Post using Zod
export const PostSchema = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string(),
  body: z.string(),
});

export const PostsSchema = z.array(PostSchema);

export type Post = z.infer<typeof PostSchema>;
export type Posts = z.infer<typeof PostsSchema>;
