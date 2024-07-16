import { z } from "zod";
import { procedure, router } from "../trpc";

const postSchema = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string(),
  body: z.string(),
});
const getPostInput = z.object({ id: z.number().optional() });

export const postsRouter = router({
  getPost: procedure.query(async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const response = await fetch(url);
    const data = await response.json();

    return postSchema.array().parse(data);
  }),
});
export const singlePostsRouter = router({
  getPost: procedure.input(getPostInput).query(async ({ input }) => {
    const url = `https://jsonplaceholder.typicode.com/posts/${input.id}`;
    const response = await fetch(url);
    const data = await response.json();

    return postSchema.parse(data);
  }),
});
