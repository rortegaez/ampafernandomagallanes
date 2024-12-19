import ARTICULOS from "../article/articulos";

import "./css/Home.css";

export const Home = () => {
  return (
    <>
      <h1>Bienvenidos</h1>
      <div className="mainBoxGrid">
        {ARTICULOS.map((exp) => (
          <a key={exp.ident} href={exp.description}>
            <section className="mainLitleBox">
              <h2 className="mainTitle">{exp.title}</h2>
            </section>
            <section className="littleMainBox">
              <div className="mainDiv">
                {typeof exp.body === "string" ? (
                  <p className="textPg">{exp.body}</p>
                ) : (
                  exp.body.map((item) => (
                    <p className="textPg" key={item}>
                      {item}
                    </p>
                  ))
                )}
              </div>
              <div className="oneImage">
                <img src={exp.image?.[0]} alt="imagen" />
              </div>
              <section>
                <p>{exp.link}</p>
                <p className="date">{exp.date}</p>
              </section>
            </section>
          </a>
        ))}
      </div>
    </>
  );
};
