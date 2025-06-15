import '../styles/CardCurso.css';

function CardCurso({ curso, onVerPrecio }) {
  return (
    <div className="card-curso">
      <img 
        src={curso.imagen} 
        alt={curso.nombre}
        onError={(e) => e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjQ0NDIi8+Cjx0ZXh0IHg9IjUwIiB5PSI1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEwIiBmaWxsPSIjNjY2Ij5JbWFnZW48L3RleHQ+Cjwvc3ZnPgo='}
      />
      <div className="info-curso">
        <h3>{curso.nombre}</h3>
        <p>{curso.descripcion}</p>
        <button onClick={onVerPrecio} className="btn-precio">
          Ver Precio
        </button>
      </div>
    </div>
  );
}

export default CardCurso;
