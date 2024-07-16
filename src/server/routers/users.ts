import { z } from "zod";
import { procedure, router } from "../trpc";
import { UsersSchema } from "@/types";

const userSchema = z.object({
  id: z.number().optional(),
});

export const usersRouter = router({
  getUser: procedure.query(async () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    const response = await fetch(url);
    const data = await response.json();
    return UsersSchema.parse(data);
  }),
});
export const singleUsersRouter = router({
  getUser: procedure.input(userSchema).query(async ({ input }) => {
    const url = `https://jsonplaceholder.typicode.com/users/${input.id}`;
    const response = await fetch(url);
    return UsersSchema.parse(response);
  }),
});
