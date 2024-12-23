import COMPANIONS from "../article/companions.js";

import "./css/team.css";

export const Team = () => {
  return (
    <>
      <h1>Equipo</h1>
      <div className="textIdent">
        <p>
          Este es el equipo que formamos la dirección del AMPA, pero solo es el
          principio, ya que, el grupo es mucho mayor, siendo parte de el, todos
          los padres y madres del colegio CEIP Santa Teresa.
        </p>
        <p>
          Recordar que cualquiera de nosotros estamos aquí para resolver vuestra
          dudas y ayudaros en lo que podamos. No dudeis en preguntarnos en la
          puerta del cole o enviarnos un email a través de la web, os
          responderemos en el menor tiempo posible.
        </p>
        <p>Un saludo desde la dirección del AMPA.</p>
      </div>
      <div className="boxAll">
        {COMPANIONS.map((comp) => (
          <div key={comp.name} className="identMainBox">
            <h2 className="identName">{comp.name}</h2>
            <img src={comp.photo} alt={comp.name} className="photoCompa" />
            <h5 className="responsability">{comp.responsability}</h5>
          </div>
        ))}
      </div>
    </>
  );
};
