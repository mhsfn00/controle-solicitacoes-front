import type { Solicitacao } from "./types";

export const mockSolicitacoes: Solicitacao[] = [
  {
    academico: {
      nome: "Kithelyn Correa Andrade",
      ra: "ra124791",
      email: "ra124791@uem.br",
    },
    titularidade: "Doutorando",
    situacao: "Aprovado",
    tipo: "Exame",
  },
  {
    academico: {
      nome: "Rafael Angelis do Nascimento",
      ra: "ra125241",
      email: "ra125241@uem.br",
    },
    titularidade: "Mestrando",
    situacao: "Pendente",
    tipo: "Defesa",
  },
  {
    academico: {
      nome: "Renan Batista Meying Junior",
      ra: "ra123756",
      email: "ra123756@uem.br",
    },
    titularidade: "Doutorando",
    situacao: "Rejeitado",
    tipo: "Defesa",
  },
  {
    academico: {
      nome: "Thiago Minoru Abe Matsuzaki",
      ra: "ra123851",
      email: "ra123851@uem.br",
    },
    titularidade: "Mestrando",
    situacao: "Rejeitado",
    tipo: "Exame",
  },
  {
    academico: {
      nome: "William Massashi Ito Yoshida",
      ra: "ra117497",
      email: "ra117497@uem.br",
    },
    titularidade: "Mestrando",
    situacao: "Rejeitado",
    tipo: "Defesa",
  },
];