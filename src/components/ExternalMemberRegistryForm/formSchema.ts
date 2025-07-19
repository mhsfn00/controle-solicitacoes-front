import { z } from "zod";

export const titularidadeValues = ['MESTRADO', 'DOUTORADO'] as const;

export const formSchema = z.object({
  nomeMembroExterno: z.string().nonempty(),
  cpf: z.string().nonempty(),
  titularidade: z.enum(titularidadeValues),
  email: z.string().nonempty(),
  telefone: z.string(),
  formacaoOrigem: z.string().nonempty(),
});