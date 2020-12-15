import React from "react";

function BemVindo(props) {
  return (
    <h1>
      Olá, {props.nome}! Você tem {props.idade} anos.
    </h1>
  );
}

function Avatar(props) {
  return (
    <div>
      <img src={props.url} alt={props.name} />
      <br />
      <span>{props.name}</span>
    </div>
  );
}
function App() {
  let user = {
    url: "https://www.google.com/logos/google.jpg",
    name: "Bonieky"
  };

  return (
    <>
      <BemVindo nome="Bonieky" idade="90" />
      <BemVindo nome="Pedro" idade="30" />
      <BemVindo nome="Aline" idade="120" />

      <Avatar url={user.url} name={user.name} />
    </>
  );
}

export default App;
