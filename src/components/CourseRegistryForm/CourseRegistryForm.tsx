import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { categoriasValues, formSchema, tipoValues } from './formSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form';
import FormHeader from '../FormHeader/FormHeader';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';

export const CourseRegistryForm: React.FC = () => {
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      categoria: 'Presencial',
      cidade: '',
      linhaPesquisa: '',
      codigoCurso: '',
      tipo: 'Mestrado',
      curso: '',
    },
  });

  const onSubmit = (form: z.infer<typeof formSchema>): void => {
    console.log(form);
  };

  return (
    <Form {...form}>
      <FormHeader
        title="Informações de nova linha de pesquisa"
        subTitle="Informe os dados da Linha de Pesquisa e Curso."
      />
      <div className="flex gap-5 py-4 mt-8">
        <FormField
          control={form.control}
          name="tipo"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="gap-0">
                Tipo
                <span className="text-red-500">*</span>
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {tipoValues.map((tipo) => (
                    <SelectItem key={tipo} value={tipo}>
                      {tipo}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="linhaPesquisa"
          render={({ field }) => (
            <FormItem className="w-7/10">
              <FormLabel className="gap-0">
                Linha de Pesquisa
                <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="codigoCurso"
          render={({ field }) => (
            <FormItem className="w-7/10">
              <FormLabel className="gap-0">
                Codigo do Curso
                <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
            </FormItem>
          )}
        />
      </div>

      <div className="flex gap-5 py-4">
        <FormField
          control={form.control}
          name="categoria"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="gap-0">
                Categoria
                <span className="text-red-500">*</span>
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {categoriasValues.map((categoria) => (
                    <SelectItem key={categoria} value={categoria}>
                      {categoria}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="curso"
          render={({ field }) => (
            <FormItem className="w-7/10">
              <FormLabel className="gap-0">
                Curso
                <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
            </FormItem>
          )}
        />
      </div>

      <div className="flex gap-5 py-4">
        <FormField
          control={form.control}
          name="cidade"
          render={({ field }) => (
            <FormItem className="w-7/10">
              <FormLabel className="gap-0">
                Cidade
                <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
            </FormItem>
          )}
        />
      </div>

      <div className="flex justify-end gap-4 py-10">
        <Button
          type="reset"
          className="bg-[#F62D2D] text-white hover:bg-red-700"
          onClick={() => navigate('/')}
        >
          Cancelar
        </Button>
        <Button type="submit" onClick={form.handleSubmit(onSubmit)}>
          Cadastrar
        </Button>
      </div>
    </Form>
  );
};
