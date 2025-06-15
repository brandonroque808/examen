import { useState } from "react";
import CardCurso from "../components/CardCurso";
import Modal from "../components/Modal";
import './Cursos.css';

const cursos = [
  { nombre: "Morenada", descripcion: "Curso completo sobre la danza Morenada.", imagen: "img/morenada.jpeg", precio: "Bs. 400" },
  { nombre: "Diablada", descripcion: "Aprende la cueca tradicional.", imagen: "img/diablada.jpeg", precio: "Bs. 400" },
  { nombre: "Morenada", descripcion: "Curso de baile oriental Taquirari.", imagen: "morenada.jpeg", precio: "Bs. 400" }
];

export default function Cursos() {
  const [modal, setModal] = useState({ visible: false, precio: "" });

  const abrirModal = (precio) => setModal({ visible: true, precio });
  const cerrarModal = () => setModal({ visible: false, precio: "" });

  return (
    <div className="cursos">
      <h2>Oferta de Cursos</h2>
      {cursos.map((curso, index) => (
        <CardCurso key={index} curso={curso} onVerPrecio={abrirModal} />
      ))}
      {modal.visible && <Modal precio={modal.precio} onClose={cerrarModal} />}
    </div>
  );
}
