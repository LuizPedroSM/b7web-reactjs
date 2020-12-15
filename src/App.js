import React, { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 400px;
  height: 30px;
  font-size: 16px;
  padding: 10px;
  border: 1px solid #000;
`;

function App() {
  const [texto, setTexto] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInput = e => {
    setTexto(e.target.value);
  };
  const handleEmailInput = e => {
    setEmail(e.target.value);
  };

  const handleButton = e => {
    alert(email + " - " + password);
  };

  return (
    <>
      <Input type="text" value={texto} onChange={handleInput} />
      <p>{texto}</p>
      <p>{texto.length} caracteres</p>

      <Input
        placeholder="Digite um e-mail"
        type="email"
        value={email}
        onChange={handleEmailInput}
      />

      <Input
        placeholder="Digite uma senha"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      <button onClick={handleButton}>Dizer</button>
    </>
  );
}

export default App;
