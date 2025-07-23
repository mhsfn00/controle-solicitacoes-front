import { useForm } from "react-hook-form";
import { z } from "zod";
import { formSchema } from "./formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
// Assumindo que você usa lucide-react, que é comum com shadcn/ui
import { Eye, EyeOff, Paperclip } from 'lucide-react'; 

const LoginRequestForm: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      usuario: "pg000000@uem.br",
      senha: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Dados do formulário:", values);
    // Aqui você adicionaria a lógica de autenticação
    // Ex: navigate('/dashboard');
  };

  return (
    <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        {/* Ícone no topo */}
        <div className="flex justify-center">
            {/* Você pode substituir este ícone pelo seu. Paperclip é um exemplo. */}
            <div className="p-3 bg-gray-100 rounded-full">
                <Paperclip className="w-6 h-6 text-gray-600" /> 
            </div>
        </div>

        {/* Cabeçalho */}
        <div className="text-center">
            <h1 className="text-2xl font-bold">Acesse sua conta</h1>
            <p className="text-sm text-gray-600">
                Gerencie as atividades do mestrado e doutorado em Ciência da Computação.
            </p>
        </div>

        {/* Formulário */}
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="usuario"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Usuário</FormLabel>
                            <FormControl>
                                <Input type="email" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="senha"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Senha</FormLabel>
                            <div className="relative">
                                <FormControl>
                                    <Input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Sua senha"
                                        {...field}
                                    />
                                </FormControl>
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700"
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </FormItem>
                    )}
                />

                <div className="flex justify-end text-sm">
                    <Button variant="link" type="button" className="h-auto p-0 font-normal">
                        Esqueceu a sua senha?
                    </Button>
                </div>
                
                <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800">
                    Entrar
                </Button>
            </form>
        </Form>
    </div>
  );
};

export default LoginRequestForm;