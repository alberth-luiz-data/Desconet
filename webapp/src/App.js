// src/App.js ou onde você define suas rotas
import React from 'react';
// Importe 'Routes' em vez de 'Switch'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage'; // Importe seu componente HomePage
// Importe outros componentes de página aqui

function App() {
  return (
    <Router>
      {/* Use <Routes> em vez de <Switch> */}
      <Routes>
        {/* Use o atributo 'element' para renderizar o componente */}
        {/* O atributo 'exact' não é mais necessário na v6 */}
        <Route path="/" element={<HomePage />} />

        {/* Exemplo com parâmetro de rota na v6 */}
        {/* <Route path="/profile/:id" element={<ProfilePage />} /> */}

        {/* Rotas aninhadas também mudaram na v6, mas para uma rota simples '/' é assim */}

      </Routes>
    </Router>
  );
}

export default App;
