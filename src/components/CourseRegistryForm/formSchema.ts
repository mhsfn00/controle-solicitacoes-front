import { z } from "zod";

export const tipoValues = ['Mestrado', 'Doutorado'] as const;

export const categoriasValues = ['Presencial', 'Semipresencial', 'EAD'] as const;

export const formSchema = z.object({
  linhaPesquisa: z.string().nonempty(),
  tipo: z.enum(tipoValues),
  codigoCurso: z.string().nonempty(),
  categoria: z.enum(categoriasValues),
  cidade: z.string().nonempty(),
  curso: z.string().nonempty()
});