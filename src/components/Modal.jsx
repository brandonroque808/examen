import './Modal.css';

export default function Modal({ precio, onClose }) {
  return (
    <div className="modal-background">
      <div className="modal-content">
        <h3>Precio del Curso</h3>
        <p>{precio}</p>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}
