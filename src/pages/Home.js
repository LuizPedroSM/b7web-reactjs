import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

function Home(props) {
  let history = useHistory();

  const handleButton = () => {
    history.replace("/sobre");
  };

  const handleBonikey = () => {
    props.setName("Bonieky");
  };

  const handleIncrement = () => {
    props.increment();
  };

  return (
    <div>
      <h4>Página Home</h4>
      Nome: {props.name} <br />
      Contador: {props.contador} <br />
      <button onClick={handleBonikey}>Setar nome para Bonieky</button>
      <button onClick={handleIncrement}>+1</button>
      <br />
      <br />
      <button onClick={handleButton}>Ir para a página Sobre</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    name: state.usuario.name,
    contador: state.usuario.contador
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setName: newName =>
      dispatch({ type: "SET_NAME", payload: { name: newName } }),
    increment: () => dispatch({ type: "INCREMENT_CONTADOR" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
