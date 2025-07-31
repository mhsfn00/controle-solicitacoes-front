import { z } from 'zod';

import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form.tsx';
import FormHeader from '@/components/FormHeader/FormHeader.tsx';
import { PageTitle } from '@/components/PageTitle/PageTitle';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const schema = z.object({
  name: z.string().nonempty(),
  socialName: z.string().nonempty(),
  academicRegister: z.string().nonempty(),
  academicEmail: z.string().nonempty(),
  personalEmail: z.string().nonempty(),
  cpf: z.coerce.number().nonnegative(),
  admissionDate: z.coerce.date(),
  professor: z.string().optional(),
  coProfessor: z.string().optional(),
  coProfessor2: z.string().optional(),
});

const AcademicProfilePage: React.FC = () => {
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      socialName: '',
      academicRegister: '',
      academicEmail: '',
      personalEmail: '',
      cpf: undefined,
      admissionDate: undefined,
    },
  });

  const onSubmit = (data: z.infer<typeof schema>) => {
    console.log('Submitted data:', data);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <PageTitle title="Editar Perfil" showShield={true} />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormHeader
            title="Informações do Acadêmico"
            subTitle="Informe os dados do acadêmico."
          />

          <div className="flex col py-2 gap-5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel required>Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="Alan Turing" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="academicRegister"
              render={({ field }) => (
                <FormItem className="w-1/3">
                  <FormLabel required>Registro Acadêmico</FormLabel>
                  <FormControl>
                    <Input placeholder="pg123456" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <div className="flex col py-2 gap-5">
            <FormField
              control={form.control}
              name="socialName"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel required>Nome Social</FormLabel>
                  <FormControl>
                    <Input placeholder="Alan Turing" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="admissionDate"
              render={({ field }) => (
                <FormItem className="w-1/3">
                  <FormLabel required>Data de Ingresso</FormLabel>
                  <FormControl>
                    <Input
                      type="date"
                      value={
                        field.value
                          ? field.value.toISOString().split('T')[0]
                          : ''
                      }
                      onChange={(e) => field.onChange(new Date(e.target.value))}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <div className="flex col gap-5 py-2">
            <FormField
              control={form.control}
              name="academicEmail"
              render={({ field }) => (
                <FormItem className="w-1/2">
                  <FormLabel required>E-mail Institucional</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="pg123456@uem.br"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="personalEmail"
              render={({ field }) => (
                <FormItem className="w-1/2">
                  <FormLabel>E-mail Pessoal</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="pg123456@gmail.com.br"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <div className="flex col gap-5 py-2">
            <FormField
              control={form.control}
              name="cpf"
              render={({ field }) => (
                <FormItem className="w-1/2">
                  <FormLabel required>CPF</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="000.000.000-00"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="professor"
            render={({ field }) => (
              <FormItem>
                <FormLabel required>Orientador</FormLabel>
                <FormControl>
                  <Input placeholder="Alan Turing" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <div className="flex col gap-5 py-2">
            <FormField
              control={form.control}
              name="coProfessor"
              render={({ field }) => (
                <FormItem className="w-1/2">
                  <FormLabel required>Co-Orientador</FormLabel>
                  <FormControl>
                    <Input placeholder="Alan Turing" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="coProfessor2"
              render={({ field }) => (
                <FormItem className="w-1/2">
                  <FormLabel required>Co-Orientador 2</FormLabel>
                  <FormControl>
                    <Input placeholder="Alan Turing" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <div className="flex justify-end gap-4 py-10">
            <Button
              type="reset"
              variant="destructive"
              onClick={() => navigate('/')}
            >
              Cancelar
            </Button>
            <Button type="submit" onClick={form.handleSubmit(onSubmit)}>
              Salvar
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
export default AcademicProfilePage;
