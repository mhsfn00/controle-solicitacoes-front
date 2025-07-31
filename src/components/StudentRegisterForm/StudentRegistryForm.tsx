import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import FormHeader from "../FormHeader/FormHeader";
import { studentFormSchema } from "./studentFormSchema";
import { useNavigate } from "react-router-dom";

const StudentRegisterForm: React.FC = () => {
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof studentFormSchema>>({
    resolver: zodResolver(studentFormSchema),
    defaultValues: {
      name: '',
      academicRegister: '',
      academicEmail: '',
      personalEmail: '',
      cpf: undefined,
      admissionDate: undefined,
    },
  });

  const onSubmit = (data: z.infer<typeof studentFormSchema>) => {
    console.log('Submitted data:', data);
  };

  return (
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
              <FormItem className="w-7/10">
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
              <FormItem>
                <FormLabel required>Registro Acadêmico</FormLabel>
                <FormControl>
                  <Input placeholder="pg123456" {...field} />
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

          <FormField
            control={form.control}
            name="admissionDate"
            render={({ field }) => (
              <FormItem className="w-1/2">
                <FormLabel required>Data de Ingresso</FormLabel>
                <FormControl>
                  <Input
                    type="date"
                    value={
                      field.value ? field.value.toISOString().split('T')[0] : ''
                    }
                    onChange={(e) => field.onChange(new Date(e.target.value))}
                  />
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
            Cadastrar
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default StudentRegisterForm; 