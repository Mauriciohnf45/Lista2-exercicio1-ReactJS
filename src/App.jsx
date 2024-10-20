import React from 'react';
import Mensagem from './components/Mensagem'; // Importando o novo componente

function App() {
  return (
    <div>
      <h1>Olá, Mundo!</h1>
      <Mensagem /> {/* Incluindo o componente Mensagem */}
    </div>
  );
}

export default App;
