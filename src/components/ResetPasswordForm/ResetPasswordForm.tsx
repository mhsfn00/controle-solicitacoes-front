import { useForm } from "react-hook-form";
import { z } from "zod";
import { formSchema } from "./formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Eye, EyeOff, LockKeyhole } from 'lucide-react';

const CreateNewPasswordForm: React.FC = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            senha: "",
            confirmarSenha: "",
        },
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log("Nova senha definida:", values.senha);
        // Lógica para salvar a nova senha e navegar para a tela de login
        alert("Senha alterada com sucesso!");
        navigate('/login'); // Quando essa linha é executada, o usuário é redirecionado para /login
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">

                <div className="flex justify-left">
                     <div className="p-3 bg-gray-100 rounded-full">
                        <LockKeyhole className="w-6 h-6 text-gray-600" />
                    </div>
                </div>

                <div className="text-left">
                    <h1 className="text-2xl font-bold">Crie uma nova senha</h1>
                    <p className="text-sm text-gray-600">
                        Informe sua nova senha.
                    </p>
                </div>

                {/* Formulário */}
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="senha"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nova Senha</FormLabel>
                                    <div className="relative">
                                        <FormControl>
                                            <Input
                                                type={showPassword ? "text" : "password"}
                                                placeholder="Digite sua nova senha"
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
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="confirmarSenha"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Confirme a Nova Senha</FormLabel>
                                    <div className="relative">
                                        <FormControl>
                                            <Input
                                                type={showConfirmPassword ? "text" : "password"}
                                                placeholder="Digite a senha novamente"
                                                {...field}
                                            />
                                        </FormControl>
                                        <button
                                            type="button"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                            className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700"
                                        >
                                            {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                        </button>
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        
                        <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800 mt-6">
                            Salvar Nova Senha
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    );
};

export default CreateNewPasswordForm;