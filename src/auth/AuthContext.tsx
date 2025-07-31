import React, { createContext, useContext } from 'react';
import type { Role, User } from './types';

import { useMutation } from '@tanstack/react-query';
import * as service from './authService';

type AuthContextType = {
  user: User | null;
  login: (username: string, password: string) => Promise<User>;
  logout: () => void;
  loading: boolean;
  hasRole: (role: Role | Role[]) => boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const {
    mutateAsync: login,
    data,
    reset,
    isPending,
  } = useMutation({
    mutationFn: ({
      username,
      password,
    }: {
      username: string;
      password: string;
    }) => {
      return service.login(username, password);
    },
  });

  const logout = () => reset();
  const handleLogin = async (username: string, password: string) => {
    return await login({ username, password });
  };
  const hasRole = (role: Role | Role[]) => {
    if (!data) return false;
    if (Array.isArray(role)) {
      return role.some((r) => data[r] !== undefined);
    }
    return data[role] !== undefined;
  };

  return (
    <AuthContext.Provider
      value={{
        user: data || null,
        login: handleLogin,
        logout,
        loading: isPending,
        hasRole,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
