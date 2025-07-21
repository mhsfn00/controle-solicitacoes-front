import { z } from "zod"

export const defenseModality = [
  { value: "inPerson", label: "Presencial"},
  { value: "remote", label: "Remoto"},
  { value: "hybrid", label: "Híbrido"},
];

export const steps = [
  { id: 0, label: '1', text: 'Informações Gerais'},
  { id: 1, label: '2', text: 'Informações Dissertação'},
  { id: 2, label: '3', text: 'Banca Examinadora'}
];

export const formSchema = z.object({
  username: z.string(),
  academicRecord: z.string(),
  defenseModality: z.enum(["inPerson", "remote", "hybrid"]),
  date: z.coerce.date(),
  time: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/),
  block: z.string(),
  room: z.string(),
  thesisTitle: z.string(),
  advisor: z.string(),
  coAdvisor1: z.string(),
  coAdvisor2: z.string(),
  link: z.string(),
  firstTitularMember: z.string(),
});