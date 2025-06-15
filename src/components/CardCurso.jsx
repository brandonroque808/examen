import './CardCurso.css';

export default function CardCurso({ curso, onVerPrecio }) {
  return (
    <div className="card">
      <img src={curso.imagen} alt={curso.nombre} />
      <div className="info">
        <h3>{curso.nombre}</h3>
        <p>{curso.descripcion}</p>
        <button onClick={() => onVerPrecio(curso.precio)}>Ver Precio</button>
      </div>
    </div>
  );
}
