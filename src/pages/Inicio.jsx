import { useState } from 'react';
import './Inicio.css';

const danzas = [
  { region: "Altiplano", descripcion: "La morenada, tipica del altiplano", imagen: "img/morenada.jpeg" },
  { region: "Valles", descripcion: "El cueca, danza romantica y alegre", imagen: "img/cueca.jpeg" },
  { region: "Chaco", descripcion: "La chacarera chaquena, de ritmos fuertes", imagen: "img/chacarera.jpeg" },
  { region: "Amazonía", descripcion: "La danza del toborochi, de la selva boliviana", imagen: "img/toborochi.jpeg" },
  { region: "Llanos", descripcion: "El taquirari, tipico del oriente", imagen: "img/taquirari.jpeg" },
];

export default function Inicio() {
  const [indiceActual, setIndiceActual] = useState(0);

  const siguiente = () => {
    setIndiceActual((prev) => (prev + 1) % danzas.length);
  };

  const anterior = () => {
    setIndiceActual((prev) => (prev - 1 + danzas.length) % danzas.length);
  };

  const danzaActual = danzas[indiceActual];

  return (
    <div className="inicio">
      <h2>Danzas por Región</h2>
      <div className="carrusel">
        <button className="btn-carrusel" onClick={anterior}>‹</button>
        <div className="contenido-carrusel">
          <img src={danzaActual.imagen} alt={danzaActual.region} />
          <div className="info-danza">
            <h3>{danzaActual.region}</h3>
            <p>{danzaActual.descripcion}</p>
          </div>
        </div>
        <button className="btn-carrusel" onClick={siguiente}>›</button>
      </div>
      <div className="indicadores">
        {danzas.map((_, index) => (
          <span 
            key={index}
            className={`indicador ${index === indiceActual ? 'activo' : ''}`}
            onClick={() => setIndiceActual(index)}
          />
        ))}
      </div>
    </div>
  );
}
