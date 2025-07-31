import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import { routes } from "./routes";
import { AuthProvider } from './auth/AuthContext';
import { Protected } from './auth/Protected';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <AuthProvider>
          <Routes>
            {Object.entries(routes.app).map(([key, item]) => {
              return (
                <Route
                  key={key}
                  path={item.path}
                  element={
                    <Protected role={item.role}>
                      <div className="flex">
                        <Navbar />
                        <div className="flex-1 p-12 flex justify-center">
                          <div className="w-full max-w-7xl">{item.element}</div>
                        </div>
                      </div>
                    </Protected>
                  }
                />
              );
            })}

            {Object.entries(routes.auth).map(([key, item]) => {
              return (
                <Route key={key} path={item.path} element={item.element} />
              );
            })}
          </Routes>
        </AuthProvider>
      </Router>
    </QueryClientProvider>
  );
};
export default App;