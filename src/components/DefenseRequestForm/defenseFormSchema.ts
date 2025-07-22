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

const firstSteps = z.object({
  username: z.string().nonempty(),
  academicRecord: z.string().nonempty(),
  defenseModality: z.enum(["inPerson", "remote", "hybrid"]),
  date: z.coerce.date(),
  time: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/).nonempty(),
  block: z.string(),
  room: z.string(),
  thesisTitle: z.string().nonempty(),
  advisor: z.string().nonempty(),
  coAdvisor1: z.string(),
  coAdvisor2: z.string(),
  link: z.string(),
});

const titularMemberSchema = z.object({
  type: z.literal("titular"),
  name: z.string().nonempty(),
  title: z.enum(["mestrado", "doutorado"]),
  eMail: z.string().email(),
  institution: z.string().nonempty(),
  hardCopy: z.enum(["não", "sim"])
});

const suplenteMemberSchema = z.object({
  type: z.literal("suplente"),
  name: z.string().nonempty(),
  title: z.enum(["mestrado", "doutorado"]),
  eMail: z.string().email(),
  institution: z.string().nonempty(),
  hardCopy: z.enum(["não", "sim"])
});

const externalMemberSchema = z.object({
  type: z.literal("externo"),
  name: z.string().nonempty(),
  eMail: z.string().email(),
  lattes: z.string()
})

const titularMembers = z.object({
  titularMembers: z.array(titularMemberSchema)
});

const suplenteMembers = z.object({
  suplenteMembers: z.array(suplenteMemberSchema)
});

const externalMembers = z.object({
  externalMembers: z.array(externalMemberSchema)
});

export const formSchema = firstSteps.merge(titularMembers).merge(suplenteMembers).merge(externalMembers);