import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Inicio</Link>
      <Link to="/cursos" className="nav-link">Oferta de Cursos</Link>
    </nav>
  );
}

export default Navbar;
