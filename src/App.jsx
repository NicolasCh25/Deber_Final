
import React, { useState } from "react";
import DatosPersonales from './assets/componentes/DatosPersonales';
import ListaEstudios from './assets/componentes/ListaEstudios';
import ListaHerramientas from './assets/componentes/ListaHerramientas';
import GaleriaDeportes from './assets/componentes/GaleriaDeportes';
import Formulario from "./assets/componentes/Formulario";
import Mensaje from "./assets/componentes/Mensaje";
import "../src/App.css";

function App() {
  const [nombre, setNombre] = useState("");
  const [mensajeEnviado, setMensajeEnviado] = useState(false);

  return (
    <div className="App">
      <header>
        <DatosPersonales />
        <ListaEstudios />
        <ListaHerramientas />
        <GaleriaDeportes />
      </header>

      <div className="app">
        <h1>Formulario de Registro</h1>
        {mensajeEnviado ? (
          <Mensaje nombre={nombre} />
        ) : (
          <Formulario setNombre={setNombre} setMensajeEnviado={setMensajeEnviado} />
        )}
      </div>
    </div>
  );
}

export default App;
