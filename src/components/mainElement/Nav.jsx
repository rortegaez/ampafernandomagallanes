import { Link } from "react-router-dom";
import "./general.css";

export const Nav = () => {
  return (
    <nav className="mainNav">
      <Link to="/" className="textHeader">
        Inicio
      </Link>
      <Link to="/news" className="textHeader">
        Noticias
      </Link>
      <Link to="/activities" className="textHeader">
        Actividades
      </Link>
      <a
        href="https://blogsaverroes.juntadeandalucia.es/colegiosantateresa/"
        target="_blank"
        rel="noopener"
      >
        Nuestro Cole
      </a>
      <Link to="/team" className="textHeader">
        Equipo
      </Link>
      <Link to="/Contact" className="textHeader">
        Contacta con nosotros
      </Link>
    </nav>
  );
};
