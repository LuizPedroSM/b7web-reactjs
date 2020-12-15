import React from "react";
import "./App.css";
function Avatar(props) {
  return (
    <div className="avatar">
      <img src={props.url} alt={props.name} />
      <br />
      <span
        style={{ color: "#f00", fontSize: 20, textDecoration: "underline" }}
      >
        {props.name}
      </span>
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
      <Avatar url={user.url} name={user.name} />
    </>
  );
}

export default App;
