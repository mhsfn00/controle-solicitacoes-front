import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { formSchema } from "./formSchema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const ForgotPasswordForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Redefinição de senha para:", values.email);
    // aqui vocês chamam a API para envio de link...
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        {/* Ícone */}
        <div className="flex justify-left">
          <div className="p-3 bg-gray-100 rounded-full">
            <img
              src="./src/assets/images/uem-logo.png"
              className="w-6 h-6"
              alt="logo"
            />
          </div>
        </div>

        {/* Cabeçalho */}
        <div className="text-left">
          <h1 className="text-2xl font-bold">Redefinir senha</h1>
          <p className="text-sm text-gray-600">
            Informe seu e‑mail institucional para receber o link.
          </p>
        </div>

        {!submitted ? (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E‑mail</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="seu@email.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full bg-black text-white hover:bg-gray-800"
              >
                Enviar link
              </Button>
            </form>
          </Form>
        ) : (
          <p className="text-center text-green-600">
            Se o e‑mail estiver cadastrado, você receberá instruções em instantes.
          </p>
        )}

        {/* Botão voltar */}
        <div className="flex justify-end text-sm">
        {/* <div className="pt-4"> */}
          <Link
            to="/login"
            //className="block w-full text-center text-sm text-blue-600 hover:underline"
            className="h-auto p-0 font-normal underline"
          >
            Voltar para o login
          </Link>
        </div>
      </div>
    </div>
  );

};

export default ForgotPasswordForm;
