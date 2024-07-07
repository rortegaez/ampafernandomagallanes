import { useState } from "react";
import ARTICULOS from "./articles/articulo";
import Modal from "./modal/Modal";
import "../css/card.css";

const CardNewsR = ({ location }) => {
  let recopilacion = [];

  if (location === "main") {
    ARTICULOS.map((exp) => {
      recopilacion.push({ ...exp });
    });
  }

  ARTICULOS.map((exp) => {
    if (exp.description === location) {
      recopilacion.push({ ...exp });
    }
  });

  return (
    <>
      {recopilacion.map((exp) => (
        <section className="mainbox">
          <h2 className="maintitle">{exp.title}</h2>
          <section className="oneSection">
            <div className="mainDiv">
              {typeof exp.body === "string" ? (
                <p className="textPg">{exp.body}</p>
              ) : (
                exp.body.map((item) => <p className="textPg">{item}</p>)
              )}
            </div>
            <div className="imagesBox">
              {exp.image?.map((item) => (
                <img src={item} alt="imagen" className="images" />
              ))}
            </div>
          </section>
          <section>
            <p>{exp.link}</p>
            <p className="textPg">{exp.date}</p>
          </section>
        </section>
      ))}
    </>
  );
};

export default CardNewsR;
