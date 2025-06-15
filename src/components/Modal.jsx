import '../styles/Modal.css';

function Modal({ onCerrar }) {
  return (
    <div className="modal-overlay" onClick={onCerrar}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>Precio del Curso</h3>
        <p>Bs. 400</p>
        <button onClick={onCerrar} className="btn-cerrar">
          Cerrar
        </button>
      </div>
    </div>
  );
}

export default Modal;
