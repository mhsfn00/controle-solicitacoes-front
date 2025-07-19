import { z } from "zod";

export const titularidadeValues = ['MESTRADO', 'DOUTORADO'] as const;

export const formSchema = z.object({
  nomeDocente: z.string().nonempty(),
  cpf: z.string().nonempty(),
  titularidade: z.enum(titularidadeValues),
  email: z.string().nonempty(),
  telefone: z.string(),
  lattes: z.array(z.instanceof(File)).min(1, { message: 'O arquivo do lattes é obrigatório.'})
});