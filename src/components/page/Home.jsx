import { Link } from "react-router-dom";

import ARTICULOS from "../article/articulos";

import "./css/home.css";

export const Home = () => {
  return (
    <>
      <h1>Bienvenidos</h1>
      <div className="mainBoxGrid">
        {ARTICULOS.map((exp) => (
          <div className="mainLitleBox" key={exp.ident}>
            <Link to={`/${exp.description}`}>
              <h2 className="mainTitle">{exp.title}</h2>
              <p className="subText">{exp.subTitle}</p>
              <div className="oneImage">
                <img
                  className="imgInicio"
                  src={exp.image?.[0]}
                  alt={exp.image}
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};
