import "./general.css";

export const Nav = () => {
  return (
    <div className="mainNav">
      <a href="/">
        <p className="textHeader">Inicio</p>
      </a>
      <a href="/news">
        <p className="textHeader">Noticias</p>
      </a>
      <a href="/activities">
        <p className="textHeader">Actividades</p>
      </a>
      <a
        href="https://blogsaverroes.juntadeandalucia.es/colegiosantateresa/"
        target="_blank"
        rel="noopener"
      >
        <p className="textHeader">Nuestro Cole</p>
      </a>
      <a href="/team">
        <p className="textHeader">Equipo</p>
      </a>
      <a href="/contact">
        <p className="textHeader">Contacto con nosotros</p>
      </a>
    </div>
  );
};
