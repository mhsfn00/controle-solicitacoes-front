import { z } from "zod";

export const formSchema = z.object({
  senha: z.string().min(8, { message: "A senha deve ter no mínimo 8 caracteres." }),
  confirmarSenha: z.string().min(8, { message: "A confirmação deve ter no mínimo 8 caracteres." }),
}).refine((data) => data.senha === data.confirmarSenha, {
  message: "As senhas não coincidem.",
  path: ["confirmarSenha"], // Mostra o erro no campo 'confirmarSenha'
});