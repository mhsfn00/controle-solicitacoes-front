import FormHeader from "../FormHeader/FormHeader"
import { formSchema, titularidadeValues } from "./formSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import type { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useForm } from "react-hook-form"
import { CustomFileInput } from "../CustomFileInput/CustomFileInput"
import { Button } from "../ui/button"
import { useNavigate } from "react-router-dom"

export const ProfessorRegistryForm: React.FC = () => {
    const navigate = useNavigate(); 
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            cpf: "",
            email: "",
            lattes: [],
            nomeDocente: "",
            telefone: "",
            titularidade: 'MESTRADO'
        },
    })

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values);
    }

    return (
        <Form {...form}>

        <FormHeader title="Informações do Docente" subTitle="Informe os dados do Docente"/>

             <div className="flex gap-5 py-2 mt-8">
               <FormField
                 control={form.control}
                 name="nomeDocente"
                 render={({ field }) => (
                   <FormItem className="w-7/10">
                     <FormLabel className="gap-0">
                       Nome do Docente
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

             <div className="flex gap-5 py-2 mt-8">
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
             </div>


             <div className="flex gap-5 py-2 mt-8">
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

                <div className="w-full py-8">

                <FormField
                    control={form.control}
                    name="lattes"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel className="gap-0">
                       Anexar Lattes 
                       <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                                <CustomFileInput onChange={field.onChange} />
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