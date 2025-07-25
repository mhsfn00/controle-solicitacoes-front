import React from "react";
import { useNavigate } from "react-router-dom";
import FormHeader from "../../components/FormHeader/FormHeader";
import { Button } from "../../components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";

import { mockSolicitacoes } from "./constants";
import type { Solicitacao } from "./types";
import { Bell, GraduationCapIcon } from "lucide-react";

const SolicitacoesDefesa: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex">
      {/* Main Content */}
      <div>
        <FormHeader
          title="Solicitação de Defesa"
          subTitle="Requerimentos de solicitações"
        />

        {/* Cards de Resumo */}
        <div className="flex flex-wrap gap-6 mt-8">
          <div className="flex items-center p-4 bg-white rounded-lg shadow-md flex-1 min-w-[250px]">
            <div className="p-3 bg-red-500 rounded-full">
              <span className="text-white text-xl"><Bell /></span>
            </div>
            <div className="ml-4">
              <div className="text-lg font-semibold">Novo Envio!</div>
              <div className="text-gray-500">
                
                  Solicitações
                
              </div>
            </div>
            <div className="ml-auto text-red-500 text-2xl font-bold">1</div>
          </div>

          <div className="flex items-center p-4 bg-white rounded-lg shadow-md flex-1 min-w-[250px]">
            <div className="p-3 bg-green-500 rounded-full">
              <span className="text-white text-xl"><GraduationCapIcon /></span>
            </div>
            <div className="ml-4">
              <div className="text-lg font-semibold">Quant. Mestrandos</div>
              <div className="text-gray-500">
                
                  Defesa
                
              </div>
            </div>
            <div className="ml-auto text-green-500 text-2xl font-bold">1</div>
          </div>

          <div className="flex items-center p-4 bg-white rounded-lg shadow-md flex-1 min-w-[250px]">
            <div className="p-3 bg-blue-500 rounded-full">
              <span className="text-white text-xl"><GraduationCapIcon /></span>
            </div>
            <div className="ml-4">
              <div className="text-lg font-semibold">Quant. Doutorandos</div>
              <div className="text-gray-500">
                
                  Exame de Qualificação
                
              </div>
            </div>
            <div className="ml-auto text-blue-500 text-2xl font-bold">1</div>
          </div>
        </div>

        {/* Tabela de Solicitações */}
        <div className="mt-8 bg-white rounded-lg shadow-md overflow-auto">
          <Table>
            <TableHeader className="bg-black">
              <TableRow>
                <TableHead className="text-white">Acadêmico</TableHead>
                <TableHead className="text-white">Titularidade</TableHead>
                <TableHead className="text-white">Situação</TableHead>
                <TableHead className="text-white">Tipo</TableHead>
                <TableHead className="text-right text-white">Ação</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockSolicitacoes.map((solicitacao: Solicitacao, index: number) => (
                <TableRow key={index}>
                  <TableCell>
                    <div className="font-medium">{solicitacao.academico.nome}</div>
                    <div className="text-sm text-gray-500">
                      {solicitacao.academico.ra}@{solicitacao.academico.email.split("@")[1]}
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="px-3 py-1 bg-white border border-gray-300 rounded-lg shadow-sm text-sm font-medium">
                      {solicitacao.titularidade}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span
                      className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${
                        solicitacao.situacao === "Pendente"
                          ? "bg-yellow-100 text-yellow-800"
                          : solicitacao.situacao === "Aprovado"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {solicitacao.situacao}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className="px-3 py-1 bg-white border border-gray-300 rounded-lg shadow-sm text-sm font-medium">
                      {solicitacao.tipo}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="px-3 py-1 bg-white border border-gray-300 rounded-lg shadow-sm text-sm"
                    >
                      Visualizar
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default SolicitacoesDefesa;
