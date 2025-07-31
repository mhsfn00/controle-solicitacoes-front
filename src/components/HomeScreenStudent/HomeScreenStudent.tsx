
import { Card, CardContent } from "@/components/ui/card";
import { Check, User, ArrowLeft } from 'lucide-react';
import { Button } from '../ui/button';

// Dados mocados para a timeline, facilitando a renderização
const qualificationSteps = [
  {
    date: '25/06/2025 20:00',
    description: 'Aprovado pelo professor avaliador',
    status: 'completed',
  },
  {
    date: '20/06/2025 15:32',
    description: 'Aguardando aprovação de professor',
    status: 'pending',
  },
  {
    date: '20/06/2025 19:12',
    description: 'Solicitação enviada pelo discente',
    status: 'pending',
  },
];

export default function HomeScreenStudent() {
  return (
    <div className="flex">
      <main className="flex-1 p-8 ml-[280px] mr-[280px]">
        <header className="flex justify-between items-center text-sm text-gray-500 mb-8">
          <span>PCC - UEM - 24/06/2025 20:00</span>
          <Button variant="outline" className="absolute left-[17rem] top-6">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </header>

        <div className="mb-8">
          <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-3 py-1 rounded-full">
            Mestrando
          </span>
          <h1 className="text-3xl font-bold mt-2">Acadêmico: Alan Turing</h1>
          <p className="text-gray-600">Teoria Computacional</p>
        </div>

        {/* Situação do Exame de Qualificação */}
        <section>
          <h2 className="text-xl font-semibold">
            Situação de Exame de Qualificação
          </h2>
          <p className="text-gray-500 mb-4">Em andamento</p>

          <Card>
            <CardContent className="pt-6">
              <div className="relative">
                {qualificationSteps.map((step, index) => (
                  <div key={index} className="flex gap-4 mb-4 last:mb-0">
                    <div className="flex flex-col items-center">
                      <span
                        className={`flex items-center justify-center w-8 h-8 rounded-full ${
                          index === 0
                            ? 'bg-black text-white'
                            : 'bg-gray-200 text-gray-600'
                        }`}
                      >
                        {index === 0 ? <Check size={16} /> : <User size={16} />}
                      </span>
                      {index < qualificationSteps.length - 1 && (
                        <div className="w-px h-full bg-gray-300 my-1"></div>
                      )}
                    </div>
                    <div className={`pt-1 ${index === 0 ? 'font-bold' : ''}`}>
                      <p className="text-sm">
                        {step.date} - {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Situação da Defesa */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold">Situação Defesa</h2>
          <p className="text-gray-500 mb-4">Não iniciado</p>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 text-gray-500">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-600">
                  <User size={16} />
                </span>
                <p>Sem solicitação até o momento...</p>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};