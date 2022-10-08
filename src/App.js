import "./App.css";
import Título from "./components/titulo";
// este import es para usar React.Fragment
import React from "react";

function App() {
  return (
    // Es necesario poner todo en un div porque return espera un sólo elemento. También podemos poner las llaves vacías '<>' o <React.Fragment>
    <React.Fragment>
      <Título nombre="Cristina" apellido="Ruiz" />
      <Título nombre="Axel" apellido="Velasco" />
      <Título nombre="Martha" apellido="Aldama" />
    </React.Fragment>
  );
}

export default App;
