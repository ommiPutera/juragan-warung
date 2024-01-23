import * as z from "zod";

export const userAuthSchema = z.object({
  companyId: z.string().min(1),
  email: z.string().email(),
  password: z.string()
});
