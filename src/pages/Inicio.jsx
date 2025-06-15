import { useState } from 'react';
import '../styles/Inicio.css';

const danzas = [
  {
    nombre: "Altiplano",
    descripcion: "La morenada, típica del altiplano",
    imagen: "/images/morenada.jpg"
  },
  {
    nombre: "Valles",
    descripcion: "El cueca, danza romántica y alegre",
    imagen: "/images/cueca.jpg"
  },
  {
    nombre: "Chaco",
    descripcion: "La chacarera chaqueña, de ritmos fuertes",
    imagen: "/images/chacarera.jpg"
  },
  {
    nombre: "Amazonía",
    descripcion: "La danza del toborochi, de la selva boliviana",
    imagen: "/images/taquirari.jpg"
  },
  {
    nombre: "Llanos",
    descripcion: "El taquirari, típico del oriente",
    imagen: "/images/diablada.jpg"
  }
];

function Inicio() {
  const [indiceActual, setIndiceActual] = useState(0);

  const anterior = () => {
    setIndiceActual(indiceActual === 0 ? danzas.length - 1 : indiceActual - 1);
  };

  const siguiente = () => {
    setIndiceActual(indiceActual === danzas.length - 1 ? 0 : indiceActual + 1);
  };

  return (
    <div className="inicio">
      <h2>Danzas por Región</h2>
      
      <div className="carrusel">
        <button onClick={anterior} className="btn-carrusel">‹</button>
        
        <div className="contenido-carrusel">
          <img 
            src={danzas[indiceActual].imagen} 
            alt={danzas[indiceActual].nombre}
            onError={(e) => e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjQ0NDIi8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiM2NjYiPkltYWdlbiBubyBkaXNwb25pYmxlPC90ZXh0Pgo8L3N2Zz4K'}
          />
          <h3>{danzas[indiceActual].nombre}</h3>
          <p>{danzas[indiceActual].descripcion}</p>
        </div>
        
        <button onClick={siguiente} className="btn-carrusel">›</button>
      </div>
      
      <div className="indicadores">
        {danzas.map((_, index) => (
          <button
            key={index}
            className={`indicador ${index === indiceActual ? 'activo' : ''}`}
            onClick={() => setIndiceActual(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Inicio;
