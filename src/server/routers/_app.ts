import { z } from "zod";
import { procedure, router } from "../trpc";
import { postsRouter, singlePostsRouter } from "./posts";
import { usersRouter } from "./users";

//write a method that takes in a text and name and returns a greeting
const PostSchema = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string(),
  body: z.string(),
});
export const appRouter = router({
  hello: procedure
    .input(
      z.object({
        name: z.string(),
      })
    )
    .query((opts) => {
      return {
        greeting: `hello , ${opts.input.name}`,
        test: "test",
      };
    }),
  posts: postsRouter,
  singlePostsRouter: singlePostsRouter,
  users: usersRouter,
});
console.log("**** ", typeof appRouter);
// export type definition of API
export type AppRouter = typeof appRouter;
