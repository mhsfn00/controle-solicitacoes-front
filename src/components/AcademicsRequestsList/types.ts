export type Solicitacao = {
  academico: {
    nome: string;
    ra: string;
    email: string;
  };
  titularidade: string;
  situacao: 'Pendente' | 'Aprovado' | 'Rejeitado';
  tipo: string;
};