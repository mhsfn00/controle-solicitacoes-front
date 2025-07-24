import { useForm } from "react-hook-form";
import { z } from "zod";
import { formSchema } from "./formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import React, { useState } from "react";
// Assumindo que você usa lucide-react, que é comum com shadcn/ui
import { Eye, EyeOff } from 'lucide-react';

import { Link } from "react-router-dom";

const LoginRequestForm: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            usuario: "",
            senha: "",
        },
    });


    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log("Dados do formulário:", values);
        // Aqui você adicionaria a lógica de autenticação
        // Ex: navigate('/dashboard');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
                {/* Ícone no topo */}
                <div className="flex justify-left">
                    {/*Substituir este ícone*/}
                    <div className="p-3 bg-gray-100 rounded-full">
                        <img src="./src/assets/images/uem-logo.png" className="w-6 h-6 text-gray-600" />
                    </div>
                </div>

                {/* Cabeçalho */}
                <div className="text-left">
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
                                        <Input type="email" {...field} placeholder="ra106170@uem.br" />
                                    </FormControl>
                                    <FormMessage />

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
                                        <FormMessage />

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

                        {/* <div className="flex justify-end text-sm">
                            <Button
                                variant="link"
                                type="button"
                                className="h-auto p-0 font-normal underline"
                            >
                                Esqueceu a sua senha?
                            </Button>
                        </div> */}
                        <div className="flex justify-end text-sm">
                            <Link
                                to="/forgot-password"
                                //className="block w-full text-center text-sm text-blue-600 hover:underline"
                                className="h-auto p-0 font-normal underline"
                            >
                                Esqueceu a sua senha?
                            </Link>
                        </div>

                        <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800">
                            Entrar
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    );
};

export default LoginRequestForm;