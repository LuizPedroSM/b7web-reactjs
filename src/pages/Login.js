import React from "react";
import { connect } from "react-redux";
function Login(props) {
  const handleFelipe = () => {
    props.setName("Felipe");
  };

  return (
    <div>
      <h4>Página Login</h4>
      <p>O nome é: {props.name} </p>
      <button onClick={handleFelipe}>Trocar o nome para Felipe</button>
    </div>
  );
}

const mapStateToProps = state => ({
  name: state.usuario.name
});

const mapDispatchToProps = dispatch => {
  return {
    setName: newName =>
      dispatch({ type: "SET_NAME", payload: { name: newName } })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
