import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SearchBox from "./components/SearchBox";

function App() {
  const [searchText, setSearchText] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    setList([
      { id: 123, title: "Comprar o bolo", done: false },
      { id: 124, title: "pegar o cachorro no PetShop", done: true },
      { id: 125, title: "Gravar a aula", done: false }
    ]);
  }, []);

  function addAction(newItem) {
    setList([
      ...list,
      {
        title: newItem,
        done: false
      }
    ]);
  }

  return (
    <>
      <h1>Lista de Tarefas</h1>
      <SearchBox frasePadrao="Adicione um item" onEnter={addAction} />
      <hr />
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item.done ? <del>{item.title}</del> : item.title}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
