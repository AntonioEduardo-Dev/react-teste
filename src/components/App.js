import React, { useState } from 'react';

import '../App.css';

const App = () => {
  // Variável normal
  // let message = "Olá"

  // State
  const [message, setMessage] = useState("Olá")

  /*
  return (
    <div className="container">{message}</div>
  );
  */
 
  return (
    <>
      <div className="container">{message}</div>
      <button onClick={() => setMessage("Oi")}>Alterar</button>
    </>
  );
}

export default App;