import { z } from "zod";

export const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: "O e‑mail é obrigatório." })
    .email({ message: "Por favor, insira um e‑mail válido." }),
});
