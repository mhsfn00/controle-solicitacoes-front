import { useForm } from "react-hook-form";
import { z } from "zod";
import { formSchema } from "./formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import React, { useEffect, useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useAuth } from '@/auth/AuthContext';
import { routes } from '@/routes';

const LoginRequestForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { login, loading, user, hasRole } = useAuth();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      usuario: '',
      senha: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    login(values.usuario, values.senha);
  };

  useEffect(() => {
    if (!user) return;

    const firstRouteByRole = Object.values(routes.app).find(
      (route) => !route.role || hasRole(route.role)
    );

    if (!firstRouteByRole) return;

    navigate(firstRouteByRole?.path);
  }, [user, hasRole, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-left">
          <div className="p-3 bg-gray-100 rounded-full">
            <img
              src="./src/assets/images/uem-logo.png"
              className="w-6 h-6 text-gray-600"
            />
          </div>
        </div>

        <div className="text-left">
          <h1 className="text-2xl font-bold">Acesse sua conta</h1>
          <p className="text-sm text-gray-600">
            Gerencie as atividades de mestrado e doutorado.
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="usuario"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Usuário</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      {...field}
                      placeholder="ra106170@uem.br"
                    />
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
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Sua senha"
                        {...field}
                      />
                    </FormControl>
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="inset-y-0 absolute right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end text-sm">
              <Link
                to="/forgotPassword"
                className="h-auto p-0 font-normal underline"
              >
                Esqueceu a sua senha?
              </Link>
            </div>

            <Button
              type="submit"
              className={cn('w-full py-6')}
              disabled={loading}
            >
              Entrar
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default LoginRequestForm;