import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import FormHeader from "../FormHeader/FormHeader";

const StudentRegisterForm: React.FC = () => 
{
    const formSchema = z.object({
        name: z.string(),
        academicRegister: z.string(),
        academicEmail: z.string(),
        personalEmail: z.string(),
        cpf: z.coerce.number(),
        admissionDate: z.coerce.date()
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            academicRegister: "",
            academicEmail: "",
            personalEmail: "",
            cpf: undefined,
            admissionDate: undefined,
        },
    });

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        console.log("Submitted data:", data);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormHeader
                    title="Informações do Acadêmico"
                    subTitle="Informe os dados do acadêmico."
                />

                {/* Name */}
                <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel className="gap-0">
                        Nome
                        <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                        <Input placeholder="Nome Completo" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />

                {/* Academic Register */}
                <FormField
                control={form.control}
                name="academicRegister"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel className="gap-0">
                        Registro Acadêmico
                        <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                        <Input placeholder="ra123456" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />

                {/* Academic Email */}
                <FormField
                control={form.control}
                name="academicEmail"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel className="gap-0">
                        E-mail Institucional
                        <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                        <Input type="email" placeholder="ra123456@uem.br" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />

                {/* Personal Email */}
                <FormField
                control={form.control}
                name="personalEmail"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>
                        E-mail Pessoal
                    </FormLabel>
                    <FormControl>
                        <Input type="email" placeholder="emailPessoal@gmail.com" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />

                {/* CPF */}
                <FormField
                control={form.control}
                name="cpf"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel className="gap-0">
                        CPF
                        <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                        <Input type="number" placeholder="000.000.000-00" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />

                {/* Admission Date */}
                <FormField
                control={form.control}
                name="admissionDate"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel className="gap-0">
                        Data de Ingresso
                        <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                        <Input
                        type="date"
                        value={field.value ? field.value.toISOString().split("T")[0] : ""}
                        onChange={(e) => field.onChange(new Date(e.target.value))}
                        />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />

                {/* Submit Button */}
                <div>
                    <Button>
                        Cancelar
                    </Button>
                    <Button type="submit">
                        Cadastrar
                    </Button>
                </div>
            </form>
        </Form>
  );
}

export default StudentRegisterForm; 