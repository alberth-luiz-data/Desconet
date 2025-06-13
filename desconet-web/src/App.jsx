import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes";
import { AuthProvider } from "./contexts/AuthContext";
export default function App() {
  return (
    <Router>
      <AuthProvider>
      <Routes>
        {routes.map(({ path, element }, index) => (
          <Route key={index} path={path} element={element} />
        ))}
      </Routes>
      </AuthProvider>
    </Router>
  );
}
