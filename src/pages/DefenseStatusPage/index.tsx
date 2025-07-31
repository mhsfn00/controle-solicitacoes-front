import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import {
  EyeIcon,
  Loader2Icon,
  PlaneIcon,
  Shield,
  SignatureIcon,
  UserCheck,
  UsersIcon,
} from 'lucide-react';

const data = {
  informations: [
    {
      label: 'Acadêmico',
      value: 'João da Silva',
    },
    {
      label: 'Tipo',
      value: 'Defesa',
    },
    {
      label: 'Orientador',
      value: 'Xavier',
    },
    {
      label: 'Co-Orientador',
      value: 'Xavier 2',
    },
    {
      label: 'Submetido Em',
      value: '01/01/2025',
    },
    {
      label: 'Aprovado Em',
      value: '10/11/2025',
    },
    {
      label: 'Finalizado Em',
      value: '10/12/2025',
    },
  ],

  history: [
    {
      title: 'Solicitação de Defesa de Mestrado enviado',
      icon: PlaneIcon,
      date: '01/01/2025',
    },
    {
      title: 'Aprovação do Orientador',
      icon: SignatureIcon,
      date: '01/01/2025',
    },
    {
      title: 'Aprovação da Secretaria',
      icon: UserCheck,
    },
    {
      title: 'Aprovação da Coordenação',
      icon: UsersIcon,
    },
  ],
};

const DefenseStatusPage: React.FC = () => {
  return (
    <div className="w-full mx-auto">
      <Card>
        <CardContent>
          <div className="flex items-start justify-between mb-4">
            <Badge className="bg-[#FFF4DB] text-[#FF9760] rounded-full font-bold">
              <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
              Em Progresso
            </Badge>
            <Button>Editar</Button>
          </div>

          <div className="flex items-start gap-4 mb-12">
            <div className="w-20 h-20 bg-[#A3FD55] rounded-xl flex items-center justify-center">
              <Shield size={40} strokeWidth={1.5} />
            </div>
            <h2 className="font-semibold text-xl">Defesa do Mestrado</h2>
          </div>

          <div className="grid grid-cols-4 gap-8">
            {data.informations.map((info) => (
              <div key={info.label}>
                <p className="font-semibold">{info.label}:</p>
                <p className="mt-2">{info.value}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <h3 className="font-semibold text-xl mt-12 mb-6">Feedbacks</h3>
      <div className="flex items-stretch gap-12 justify-between flex-wrap">
        <Card className="flex-1">
          <CardContent>
            <div className="flex items-start justify-between mb-4">
              <div className="rounded-full h-12 w-12 bg-destructive text-background flex items-center justify-center">
                <SignatureIcon size={24} />
              </div>
              <Badge>Defesa Mestrado</Badge>
            </div>
            <h4 className="text-xl font-medium">Solicitacao Rejeitada</h4>
            <p className="text-sm">Orientador</p>

            <h5 className="text-md mt-8 font-medium">Feedback</h5>
            <p className="text-sm">
              Professor Xavier não pode compor a banca examinadora
            </p>
          </CardContent>
        </Card>

        <Card className="w-1/3">
          <CardContent>
            <div className="flex items-start justify-between mb-4 gap-4">
              <h6 className="font-semibold text-xl">Situação</h6>
              <Badge className="bg-[#FFF4DB] text-[#FF9760] rounded-full font-bold">
                <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
                Em Progresso
              </Badge>
            </div>
            <div>
              {data.history.map(({ title, date, icon: Icon }, index) => (
                <div key={index} className="flex items-center gap-4 mb-4">
                  <div
                    className={cn(
                      'w-10 h-10 rounded-full flex items-center justify-center',
                      {
                        'bg-primary text-background': index === 0,
                        'bg-destructive text-background': index === 1,
                        'bg-muted text-muted-foreground': index > 1,
                      }
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">{title}</p>
                    <p className="text-sm text-gray-500">{date}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <h3 className="font-semibold text-xl mt-12 mb-2">Minhas solicitações</h3>
      <p className="mb-6">Lorem Ipsum Dolor</p>
      <div>
        <Badge className="mb-2">Mestrado</Badge>
        <Card>
          <CardContent className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#A3FD55] rounded-xl flex items-center justify-center">
                <Shield size={21} strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-semibold">Orientador</p>
                <p>Xavier</p>
              </div>
              <div>
                <p className="font-semibold">Co-Orientador</p>
                <p>Xavier</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <Button variant="outline">
                <EyeIcon />
                Visualizar
              </Button>
              <div>
                <p className="font-semibold">Submetido</p>
                <p>01/01/2025</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
export default DefenseStatusPage;
