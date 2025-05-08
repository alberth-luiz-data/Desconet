// src/App.js ou src/index.js - Onde você define suas rotas
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Se estiver usando react-router-dom v5
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Se estiver usando react-router-dom v6
import HomePage from './pages/homePage';
// Importe outros componentes de página aqui

function App() {
  return (
    <Router>
      {/* Switch para v5, Routes para v6 */}
      <Switch> {/* ou <Routes> para v6 */}
        <Route path="/" exact> {/* exact em v5, remova em v6 */}
          <HomePage />
        </Route>
        {/* Adicione outras rotas aqui */}
        {/* <Route path="/profile/:id"><ProfilePage /></Route> */}
      </Switch> {/* ou </Routes> para v6 */}
    </Router>
  );
}

export default App;
