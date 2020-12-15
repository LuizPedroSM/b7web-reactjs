import React from "react";

function formatarNome(usuario) {
  return usuario.nome + " " + usuario.sobreNome;
}
function App() {
  let usuario = {
    nome: "Bonieky",
    sobreNome: "Lacerda"
  };

  let imagem = "https://www.google.com/logos/google.jpg";

  return (
    <>
      <div>Meu nome é {formatarNome(usuario)}</div>
      <img src={imagem} alt="Logo do Google" style={{ width: 200 }} />
    </>
  );
}

export default App;
