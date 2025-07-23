import { z } from "zod";

export const formSchema = z.object({
  usuario: z.string().email({ message: "Por favor, insira um e-mail válido." }),
  senha: z.string().min(1, { message: "A senha não pode estar em branco." }),
});