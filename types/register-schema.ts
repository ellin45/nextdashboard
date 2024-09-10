import {z} from "zod";

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(8, {
    message: "password must be at least 8 characters long",
  }),
  name:z.string().min(2,{
    message: "Please add a name with at least 4 characters"
  })
});
