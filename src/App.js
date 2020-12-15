import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SearchBox from "./components/SearchBox";

function App() {
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <h1>Lista de Tarefas</h1>
      <SearchBox
        frasePadrao="Faça sua busca.."
        onChangeText={t => setSearchText(t)}
      />
      <SearchBox frasePadrao={searchText} />
      <hr />
      Texto procurado:{searchText}
    </>
  );
}

export default App;
