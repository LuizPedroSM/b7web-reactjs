import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function Home() {
  let history = useHistory();
  const dispatch = useDispatch();

  const name = useSelector(state => state.usuario.name);
  const contador = useSelector(state => state.usuario.contador);

  const handleButton = () => {
    history.replace("/sobre");
  };

  const handleBonikey = () => {
    dispatch({
      type: "SET_NAME",
      payload: { name: "Bonieky" }
    });
  };

  const handleIncrement = () => {
    dispatch({
      type: "INCREMENT_CONTADOR"
    });
  };

  return (
    <div>
      <h4>Página Home</h4>
      Nome: {name} <br />
      Contador: {contador} <br />
      <button onClick={handleBonikey}>Setar nome para Bonieky</button>
      <button onClick={handleIncrement}>+1</button>
      <br />
      <br />
      <button onClick={handleButton}>Ir para a página Sobre</button>
    </div>
  );
}

export default Home;
