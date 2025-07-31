import type { ReactElement } from 'react';
import {
  AcademicRegisterPage,
  CourseRegistryPage,
  DefenseRequestPage,
  ExternalMemberRegistryPage,
  HomePage,
  ProfessorRegistryPage,
  LoginRequestPage,
  ForgotPasswordPage,
  ResetPasswordPage,
  AcademicsRequestsPage,
  DefenseApprovalPage,
} from './pages';
import {
  CalendarIcon,
  GraduationCapIcon,
  UserRoundPenIcon,
  UserRoundIcon,
  BookOpenCheckIcon,
  UserRoundPlusIcon,
  TableCellsMergeIcon,
  ScrollTextIcon,
  SheetIcon,
} from 'lucide-react';
import type { Role } from './auth/types';
import AcademicProfilePage from './pages/AcademicProfilePage';
import DefenseStatusPage from './pages/DefenseStatusPage';

interface RouteConfig {
  path: string;
  label?: string;
  element?: ReactElement;
  icon?: ReactElement;
  role?: Role | Role[];
  hidden?: boolean;
}

interface RoutesProps {
  app: {
    [key: string]: RouteConfig;
  };
  auth: {
    [key: string]: Omit<RouteConfig, 'role'>;
  };
}

export const routes: RoutesProps = {
  app: {
    home: {
      path: '/',
      label: 'Início',
      element: <HomePage />,
      icon: <CalendarIcon />,
    },
    defenseRequest: {
      path: '/defesa',
      label: 'Solicitar Defesa',
      element: <DefenseRequestPage />,
      icon: <GraduationCapIcon />,
      role: 'aluno',
    },
    aluno: {
      path: '/aluno',
      label: 'Cadastrar Acadêmico',
      element: <AcademicRegisterPage />,
      icon: <UserRoundIcon />,
      role: 'secretaria',
    },
    professor: {
      path: '/professor',
      label: 'Cadastrar Docente',
      element: <ProfessorRegistryPage />,
      icon: <UserRoundPenIcon />,
      role: 'secretaria',
    },
    course: {
      path: '/curso',
      label: 'Cadastrar Curso',
      element: <CourseRegistryPage />,
      icon: <BookOpenCheckIcon />,
      role: 'secretaria',
    },
    externalMember: {
      path: '/membro-externo',
      label: 'Cadastrar Membro Externo',
      element: <ExternalMemberRegistryPage />,
      icon: <UserRoundPlusIcon />,
      role: 'secretaria',
    },
    academicsRequests: {
      path: '/requisicoes-alunos',
      label: 'Solicitações',
      icon: <SheetIcon />,
      element: <AcademicsRequestsPage />,
      role: ['secretaria', 'professor'],
    },

    defenseApproval: {
      path: '/requisicoes-alunos/:id',
      label: 'Requisição de Defesa',
      element: <DefenseApprovalPage />,
      role: ['secretaria', 'professor'],
      hidden: true,
    },
    requestExam: {
      path: '/',
      label: 'Solicitar Exame',
      icon: <ScrollTextIcon />,
      role: 'aluno',
    },
    viewStatus: {
      path: '/status-defesa',
      label: 'Visualizar Status',
      icon: <TableCellsMergeIcon />,
      element: <DefenseStatusPage />,
      role: 'aluno',
    },
    editPerfil: {
      path: '/perfil',
      label: 'Editar Perfil',
      icon: <UserRoundPenIcon />,
      element: <AcademicProfilePage />,
      role: 'aluno',
    },
  },
  auth: {
    login: {
      path: '/login',
      element: <LoginRequestPage />,
    },
    forgotPassword: {
      path: '/forgot-password',
      element: <ForgotPasswordPage />,
    },
    resetPassword: {
      path: '/reset-password',
      element: <ResetPasswordPage />,
    },
  },
};
