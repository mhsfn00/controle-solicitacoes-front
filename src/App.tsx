import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import { routes } from "./routes";

// Lista de rotas que NÃO devem mostrar a Navbar
const hiddenNavbarRoutes = ["/login", "/forgotPassword", "/resetPassword"];

const AppContent: React.FC = () => {
  const location = useLocation();
  const shouldShowNavbar = !hiddenNavbarRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      <Routes>
        {Object.entries(routes).map(
          ([key, item]) =>
            !!item.element && (
              <Route key={key} path={item.path} element={item.element} />
            )
        )}
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
