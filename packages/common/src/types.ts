import z from "zod";

export const SignUpSchema = z.object({
  username: z.string().min(3).max(20),
  password: z.string().min(6),
  name: z.string(),
});

export const SignInSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export const CreateRoomSchema = z.object({
  name: z.string(),
});
