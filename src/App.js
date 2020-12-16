import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Categoria from "./pages/Categoria";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";

function App() {
  return (
    <BrowserRouter>
      <header>
        <h1>Meu Site</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/sobre">Sobre</Link>
            </li>
            <li>
              <Link to="/categoria?tipo=esportes">Esportes</Link>
            </li>
            <li>
              <Link to="/categoria?tipo=noticias">Noticias</Link>
            </li>
            <li>
              <Link to="/categoria?tipo=viagem">Viagem</Link>
            </li>
          </ul>
        </nav>
      </header>
      <hr />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/sobre">
          <Sobre />
        </Route>
        <Route path="/categoria">
          <Categoria />
        </Route>
      </Switch>
      <hr />
      <footer>Todos os Direitos reservados</footer>
    </BrowserRouter>
  );
}

export default App;
