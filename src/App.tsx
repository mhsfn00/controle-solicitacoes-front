import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.tsx'
import DefenseRequestPage from './pages/DefenseRequestPage/DefenseRequestPage.tsx';
import AcademicRegisterPage from './pages/AcademicRegisterPage/AcademicRegisterPage.tsx';
import Navbar from './components/NavBar/NavBar.tsx';
import ProfessorRegistryPage from './pages/ProfessorRegistryPage/ProfessorRegistryPage.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/defenseRequest" element={<DefenseRequestPage />} />
      </Routes>
    </Router>
  );
};

export default App;
