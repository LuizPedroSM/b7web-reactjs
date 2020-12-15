import React from "react";
import styled from "styled-components";

const Site = styled.div`
  width: 400px;
  height: 400px;
  background-color: #00ff00;
`;

const Title = styled.h1`
  color: #ff0000;
  font-size: 18px;
`;

const Botao = styled.button`
  font-size: 19px;
  padding: 10px 15px;
`;

function App() {
  return (
    <Site>
      <Title>Titulo</Title>
      <Botao>Clique aqui</Botao>
    </Site>
  );
}

export default App;
