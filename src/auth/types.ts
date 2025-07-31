export type Role = 'professor' | 'aluno' | 'secretaria';

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  status: boolean;
  email: string;
  nomeCivil: string;
  professor?: object;
  secretaria?: object;
  aluno?: object;
};
