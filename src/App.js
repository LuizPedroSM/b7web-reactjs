import React, { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 400px;
  height: 30px;
  font-size: 16px;
  padding: 10px;
  border: 1px solid #000;
  margin: 10px 0;
`;

function App() {
  const [conta, setConta] = useState("");
  const [perGorjeta, setPerGorjeta] = useState("");
  return (
    <>
      <h2>Calculadora de Gorjeta</h2>
      <label htmlFor="conta">
        Quanto deu a conta? <br />
        <Input
          id="conta"
          type="number"
          value={conta}
          onChange={e => setConta(Number(e.target.value))}
        />
      </label>
      <br />
      <label htmlFor="perGorjeta">
        Qual a porcentagem de gorjeta? <br />
        <Input
          id="perGorjeta"
          type="number"
          value={perGorjeta}
          onChange={e => setPerGorjeta(Number(e.target.value))}
        />
      </label>
      <hr />
      {conta > 0 && perGorjeta > 0 && (
        <>
          <p>
            Sub-total:
            {conta.toLocaleString("pt-Br", {
              style: "currency",
              currency: "BRL"
            })}
          </p>
          <p>
            Gorjeta ({perGorjeta}%):
            {((conta * perGorjeta) / 100).toLocaleString("pt-Br", {
              style: "currency",
              currency: "BRL"
            })}
          </p>
          <p>
            <b>
              Total:
              {Number((conta * perGorjeta) / 100 + conta).toLocaleString(
                "pt-Br",
                {
                  style: "currency",
                  currency: "BRL"
                }
              )}
            </b>
          </p>
        </>
      )}
    </>
  );
}

export default App;
