import { z } from "zod";

export const signUpSchema = z.object({
  fullName: z.string().min(3),
  email: z.string().email(),
  universityId: z.coerce.number(),
  universityCard: z.string().nonempty("University Card is required"),
  password: z.string().min(8),
  // confirmPassword: z
  //   .string()
  //   .refine(
  //     (value) =>
  //       value ===
  //       z.refine((parent) => parent.password).message("Passwords don't match"),
  //   ),
});

export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
