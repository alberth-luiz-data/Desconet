// src/pages/HomePage.js
import React, { useState, useEffect } from 'react';
// import './HomePage.css'; // Crie este arquivo para estilos, se quiser

// A URL base da sua função Express 'api'
// Substitua 'us-central1' e 'desconet-8d482' pelos seus valores,
// embora já usei os do seu projeto informado!
const FUNCTIONS_BASE_URL = 'https://api-qjufruucrq-uc.a.run.app/api';

function HomePage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Função assíncrona para buscar os usuários
    const fetchUsers = async () => {
      try {
        // Faz a requisição GET para a rota /usuarios do seu backend Express
        const response = await fetch(`${FUNCTIONS_BASE_URL}/usuarios`);

        // Verifica se a resposta foi bem sucedida (status 2xx)
        if (!response.ok) {
          // Se não foi OK, lança um erro
          const errorData = await response.text(); // Tenta pegar o texto do erro
          throw new Error(`Erro HTTP: ${response.status} - ${errorData || response.statusText}`);
        }

        // Converte a resposta para JSON
        const data = await response.json();

        // Atualiza o estado com a lista de usuários
        setUsers(data);
        setLoading(false); // Terminou o carregamento

      } catch (err) {
        // Captura erros (de rede, de resposta não-OK, etc.)
        console.error("Erro ao buscar usuários:", err);
        setError(err.message || "Ocorreu um erro ao carregar os usuários."); // Armazena a mensagem de erro
        setLoading(false); // Terminou o carregamento (com erro)
      }
    };

    // Chama a função de buscar usuários quando o componente monta
    fetchUsers();

    // O array vazio [] como segundo argumento significa que este useEffect
    // roda apenas uma vez, equivalente a componentDidMount em classes.
  }, []);

  // --- Renderização do Componente ---
  return (
    <div className="home-container">
      <h1>Lista de Usuários</h1>

      {loading && <p>Carregando usuários...</p>}

      {error && <p className="error-message">Erro: {error}</p>}

      {!loading && !error && (
        // Se não está carregando e não tem erro, mostra a lista ou mensagem de vazio
        users.length > 0 ? (
          <ul className="user-list">
            {users.map(user => (
              // Assumindo que cada objeto de usuário tem um 'id' e um 'nome' ou 'username'
              // Ajuste 'user.nome' ou 'user.username' conforme a estrutura dos seus dados no Firestore
              <li key={user.id} className="user-item">
                {user.nome || user.username || user.email || `Usuário ${user.id}`}
              </li>
            ))}
          </ul>
        ) : (
          <p>Nenhum usuário encontrado.</p>
        )
      )}
    </div>
  );
}

export default HomePage; // Exporte o componente
