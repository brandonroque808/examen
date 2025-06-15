import { useState } from 'react';
import CardCurso from '../components/CardCurso';
import Modal from '../components/Modal';
import '../styles/Cursos.css';

const cursos = [
  {
    nombre: "Morenada",
    descripcion: "Curso completo sobre la danza Morenada.",
    imagen: "/images/morenada.jpg"
  },
  {
    nombre: "Diablada",
    descripcion: "Aprende la cueca tradicional.",
    imagen: "/images/diablada.jpg"
  },
  {
    nombre: "Taquirari",
    descripcion: "Curso de baile oriental Taquirari.",
    imagen: "/images/taquirari.jpg"
  }
];

function Cursos() {
  const [mostrarModal, setMostrarModal] = useState(false);

  const abrirModal = () => {
    setMostrarModal(true);
  };

  const cerrarModal = () => {
    setMostrarModal(false);
  };

  return (
    <div className="cursos">
      <h2>Oferta de Cursos</h2>
      
      <div className="lista-cursos">
        {cursos.map((curso, index) => (
          <CardCurso 
            key={index} 
            curso={curso} 
            onVerPrecio={abrirModal}
          />
        ))}
      </div>
      
      {mostrarModal && <Modal onCerrar={cerrarModal} />}
    </div>
  );
}

export default Cursos;
