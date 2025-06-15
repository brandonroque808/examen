import './Inicio.css';

const danzas = [
  { region: "Altiplano", descripcion: "La morenada, tipica del altiplano" },
  { region: "Valles", descripcion: "El cueca, danza romantica y alegre" },
  { region: "Chaco", descripcion: "La chacarera chaquena, de ritmos fuertes" },
  { region: "Amazonía", descripcion: "La danza del toborochi, de la selva boliviana" },
  { region: "Llanos", descripcion: "El taquirari, tipico del oriente" },
];

export default function Inicio() {
  return (
    <div className="inicio">
      <h2>Danzas por Región</h2>
      {danzas.map((danza, index) => (
        <details key={index}>
          <summary>{danza.region}</summary>
          <p>{danza.descripcion}</p>
        </details>
      ))}
    </div>
  );
}
