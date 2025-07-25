import { useForm } from "react-hook-form"
import { z } from "zod"
import { formSchema, titularidadeValues } from "./formSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form"
import FormHeader from "../FormHeader/FormHeader"
import { Button } from "../ui/button"
import { useNavigate } from "react-router-dom"
import { Input } from "../ui/input"
import { RadioGroup } from "@radix-ui/react-radio-group"
import { RadioGroupItem } from "../ui/radio-group"

export const ExternalMemberRegistryForm: React.FC = () => {

  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cpf: "",
      email: "",
      formacaoOrigem: "",
      nomeMembroExterno: "",
      telefone: "",
      titularidade: 'MESTRADO'
    }
  })


  const onSubmit = (form: z.infer<typeof formSchema>): void => {
    console.log(form)
  }

  return (
    <Form {...form}> 
      <FormHeader title="Informações do Membro Externo" subTitle="Informe os dados do membro externo e sua especialização na banca."/>
      
             <div className="flex gap-5 py-4 mt-8">
               <FormField
                 control={form.control}
                 name="nomeMembroExterno"
                 render={({ field }) => (
                   <FormItem className="w-7/10">
                     <FormLabel className="gap-0">
                       Nome do Membro Externo
                       <span className="text-red-500">*</span>
                     </FormLabel>
                     <FormControl>
                       <Input placeholder="Alan Turing" {...field} />
                     </FormControl>
                   </FormItem>
                 )}
               />

               <FormField
                 control={form.control}
                 name="cpf"
                 render={({ field }) => (
                   <FormItem className="size-fit">
                     <FormLabel className="gap-0">
                       CPF 
                       <span className="text-red-500">*</span>
                     </FormLabel>
                     <FormControl>
                    <Input
                        {...field}
                        placeholder="000.000.000-00"
                        maxLength={11}
                        onChange={(e) => {
                            const onlyNums = e.target.value.replace(/\D/g, '');
                            field.onChange(onlyNums);
                        }}
                        />
                     </FormControl>
                   </FormItem>
                 )}
               />
             </div>
      
             <div className="flex gap-5 py-4">
              <FormField
                  control={form.control}
                  name="titularidade"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="gap-0">
                        Titularidade
                        <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          value={field.value}
                          className="flex gap-5"
                        >
                          {titularidadeValues.map((option) => (
                            <FormItem
                              key={option}
                              className="flex items-center space-y-0"
                            >
                              <FormControl>
                                <RadioGroupItem value={option}/>
                              </FormControl>
                              <FormLabel className="font-normal">
                                {option}
                              </FormLabel>
                            </FormItem>
                          ))}
                        </RadioGroup>
                      </FormControl>
                    </FormItem>
                )}
              />

               <FormField
                 control={form.control}
                 name="formacaoOrigem"
                 render={({ field }) => (
                   <FormItem className="w-7/10">
                     <FormLabel className="gap-0">
                       Instituição de Origem
                       <span className="text-red-500">*</span>
                     </FormLabel>
                     <FormControl>
                       <Input placeholder="Universidade Estadual de Maringá" {...field} />
                     </FormControl>
                   </FormItem>
                 )}
                />
             </div>

             <div className="flex gap-5 py-4">
               <FormField
                 control={form.control}
                 name="email"
                 render={({ field }) => (
                   <FormItem className="w-7/10">
                     <FormLabel className="gap-0">
                      Email 
                       <span className="text-red-500">*</span>
                     </FormLabel>
                     <FormControl>
                       <Input placeholder="exemplo@edu.br" {...field} />
                     </FormControl>
                   </FormItem>
                 )}
               />

               <FormField
                 control={form.control}
                 name="telefone"
                 render={({ field }) => (
                   <FormItem className="w-7/10">
                     <FormLabel className="gap-0">
                      Telefone 
                     </FormLabel>
                     <FormControl>
                       <Input placeholder="44997611361" {...field}
                        onChange={(e) => {
                            const onlyNums = e.target.value.replace(/\D/g, '');
                            field.onChange(onlyNums);
                        }} />
                     </FormControl>
                   </FormItem>
                 )}
               />
             </div>

            <div className="flex justify-end gap-4 py-10">
                <Button type="reset" className="bg-[#F62D2D] text-white hover:bg-red-700" onClick={() => navigate('/')}>
                    Cancelar
                </Button>
                <Button type="submit" onClick={form.handleSubmit(onSubmit)}>
                    Cadastrar
                </Button>
            </div>
    </Form>
  )
}