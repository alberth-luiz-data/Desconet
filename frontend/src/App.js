import React, { useEffect, useState } from 'react';

function App() {
  const [comunidades, setComunidades] = useState([]);

  useEffect(() => {
    fetch('/api/comunidade')
      .then(res => res.json())
      .then(data => setComunidades(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Comunidades</h1>
      <ul>
        {comunidades.map(c => (
          <li key={c.id}>{c.nome}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
