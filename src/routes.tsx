import type { ReactElement } from "react";
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
  HomeScreenStudentPage,
  DefenseApprovalPage,
} from "./pages";
import {
  CalendarIcon,
  GraduationCapIcon,
  UserRoundPenIcon,
  UserRoundIcon,
  BookOpenCheckIcon,
  UserRoundPlusIcon,
  TableCellsMergeIcon,
  ScrollTextIcon,
} from "lucide-react";

interface RouteConfig {
  path: string;
  label?: string;
  element?: ReactElement;
  icon?: ReactElement;
}

interface RoutesProps {
  [key: string]: RouteConfig;
}

export const routes: RoutesProps = {
  home: {
    path: "/",
    label: "Início",
    element: <HomePage />,
    icon: <CalendarIcon />,
  },
  defenseRequest: {
    path: "/defenseRequest",
    label: "Solicitar Defesa",
    element: <DefenseRequestPage />,
    icon: <GraduationCapIcon />,
  },
  professor: {
    path: "/professor",
    label: "Cadastrar Professor",
    element: <ProfessorRegistryPage />,
    icon: <UserRoundPenIcon />,
  },
  aluno: {
    path: "/student",
    label: "Cadastrar Aluno",
    element: <AcademicRegisterPage />,
    icon: <UserRoundIcon />,
  },
  course: {
    path: "/course",
    label: "Cadastrar Curso",
    element: <CourseRegistryPage />,
    icon: <BookOpenCheckIcon />,
  },
  externalMember: {
    path: "/external-member",
    label: "Registro de Membro Externo",
    element: <ExternalMemberRegistryPage />,
    icon: <UserRoundPlusIcon />,
  },
  defenseApproval: {
    path: "/defense-approval",
    label: "Requisição de Defesa",
    element: <DefenseApprovalPage />,
  },
  login: {
    path: "/login",
    element: <LoginRequestPage />,
  },
  forgotPassword: {
    path: "/forgot-password",
    element: <ForgotPasswordPage />,
  },
  resetPassword: {
    path: "/reset-password",
    element: <ResetPasswordPage />,
  },
  requestExam: {
    path: "/",
    label: "Solicitar Exame",
    icon: <ScrollTextIcon />,
  },
  viewStatus: {
    path: "/",
    label: "Visualizar Status",
    icon: <TableCellsMergeIcon />,
  },
  editPerfil: {
    path: "/",
    label: "Editar Perfil",
    icon: <UserRoundPenIcon />,
  },
  academicsRequests: {
    path: "/students-request",
    label: "Requisições de Alunos",
    icon: <GraduationCapIcon />,
    element: <AcademicsRequestsPage />,
  },
  HomeScreenStudent: {
    path: "/students-main-page",
    label: "Tela Principal Alunos",
    element: <HomeScreenStudentPage />,
  },
};
