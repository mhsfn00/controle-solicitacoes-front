import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import type { Role } from './types';

type Props = {
  children: React.ReactNode;
  role?: Role | Role[];
};

export const Protected = ({ children, role }: Props) => {
  const { user, hasRole } = useAuth();

  if (!user || (role && !hasRole(role))) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};
