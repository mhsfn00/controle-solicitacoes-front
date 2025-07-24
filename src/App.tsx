import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import { routes } from "./routes";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {Object.entries(routes).map(
          ([key, item]) =>
            !!item.element && (
              <Route key={key} path={item.path} element={item.element} />
            )
        )}
      </Routes>
    </Router>
  );
};

export default App;
