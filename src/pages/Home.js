import React from "react";
import { useHistory } from "react-router-dom";

function Home() {
  let history = useHistory();

  const handleButton = () => {
    history.replace("/sobre");
  };

  return (
    <div>
      <h4>Página Home</h4>
      <button onClick={handleButton}>Ir para a página Sobre</button>
    </div>
  );
}

export default Home;
