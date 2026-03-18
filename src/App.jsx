import { useState } from "react";
import "./App.css";
import ignacio from "./assets/images/ignacio.jpg";
import antonella from "./assets/images/antonella.jpeg";
import abril from "./assets/images/abril.png";

function Tarjeta({ name, profesion, descripcion, imagen }) {
  return (
    <div className="tarjeta">
      <h2>{name}</h2>
      <h3>{profesion}</h3>
      <p>{descripcion}</p>
      <div className="img-container">
        <img src={imagen} alt={name} />
      </div>
    </div>
  );
}

function App() {
  const personas = [
    {
      id: 1,
      name: "Ignacio",
      profesion: "Ingeniero Químico",
      imagen: ignacio,
      descripcion: "Apasionado por la industria y desarrollo de procesos.",
    },
    {
      id: 2,
      name: "Antonella",
      profesion: "Arquitecta",
      imagen: antonella,
      descripcion: "Diseño de interiores y armonización de espacios.",
    },
    {
      id: 3,
      name: "Abril",
      profesion: "Psicóloga",
      imagen: abril,
      descripcion:
        "Reflexión y análisis de nuestras personalidades y modos de vivir.",
    },
  ];

  return (
    <>
      <h1>Directorio de la empresa</h1>
      <div className="contenedor-tarjetas">
        {personas.map((persona) => (
          <Tarjeta
            key={persona.id}
            name={persona.name}
            descripcion={persona.descripcion}
            imagen={persona.imagen}
            profesion={persona.profesion}
          />
        ))}
      </div>
    </>
  );
}
export default App;
