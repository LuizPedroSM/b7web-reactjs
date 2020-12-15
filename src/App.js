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
  background-color: ${props => (props.ativo == true ? "#fff" : "#ccc")};
  color: ${props => props.color || "#0f0"};
`;

function App() {
  return (
    <Site>
      <Title>Titulo</Title>
      <Botao ativo={true} color="#f00">
        Clique aqui
      </Botao>
      <Botao ativo={false} color="#00f">
        Clique aqui
      </Botao>
      <Botao>Clique aqui</Botao>
    </Site>
  );
}

export default App;
