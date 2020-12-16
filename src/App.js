import React from "react";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Login from "./pages/Login";

const isLogged = false;

const PrivateRoute = ({ children, ...rest }) => {
  return (
    <Route {...rest}>{isLogged ? children : <Redirect to="/login" />}</Route>
  );
};

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
          </ul>
        </nav>
      </header>
      <hr />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        {/* <Route path="/sobre">
          {isLogged ? <Sobre /> : <Redirect to="/login" />}
        </Route> */}

        <PrivateRoute path="/sobre">
          <Sobre />
        </PrivateRoute>

        <Route path="*">
          <h2>Página Não Encontrada</h2>
        </Route>
      </Switch>
      <hr />
      <footer>Todos os Direitos reservados</footer>
    </BrowserRouter>
  );
}

export default App;
