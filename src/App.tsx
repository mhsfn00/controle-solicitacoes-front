import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage.tsx';
import DefenseRequestPage from './pages/DefenseRequestPage/DefenseRequestPage.tsx';
import AcademicRegisterPage from './pages/AcademicRegisterPage/AcademicRegisterPage.tsx';
import Navbar from './components/NavBar/NavBar.tsx';
import ProfessorRegistryPage from './pages/ProfessorRegistryPage/ProfessorRegistryPage.tsx';
import CourseRegistryPage from './pages/CourseRegistryPage/CourseRegistryPage.tsx';
import ExternalMemberRegistryPage from './pages/ExternalMemberRegistryPage/ExternalMemberRegistryPage.tsx';
import LoginRequestPage from './pages/LoginRequestPage/LoginRequestPage.tsx';
import ForgotPasswordPage from './pages/ForgotPasswordPage/ForgotPasswordPage.tsx';
import ResetPasswordPage from './pages/ResetPasswordPage/ResetPasswordPage.tsx';

const AppContent: React.FC = () => {
  const location = useLocation();

  // Rotas onde a Navbar NÃO deve aparecer
  const rotasSemNavbar = ['/login', '/forgot-password', '/reset-password'];

  return (
    <>
      {!rotasSemNavbar.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/defenseRequest" element={<DefenseRequestPage />} />
        <Route path="/professor" element={<ProfessorRegistryPage />} />
        <Route path="/aluno" element={<AcademicRegisterPage />} />
        <Route path="/course" element={<CourseRegistryPage />} />
        <Route path="/external-member" element={<ExternalMemberRegistryPage />} />
        <Route path="/login" element={<LoginRequestPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
      </Routes>
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
