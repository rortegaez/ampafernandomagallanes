import ARTICULOS from "./articles/articulo";
import "../css/card.css";

const CardNewsR = () => {
  let recopilacion = [];

  ARTICULOS.map((item) => {
    recopilacion.push({ ...item });
  });

  return (
    <>
      {recopilacion.map((exp) => (
        <a href={exp.description}>
          <section className="mainLitleBox">
            <h2 className="maintitle">{exp.title}</h2>
            <section className="littleMainBox">
              <div className="mainDiv">
                {typeof exp.body === "string" ? (
                  <p className="textPg">{exp.body}</p>
                ) : (
                  exp.body.map((item) => <p className="textPg">{item}</p>)
                )}
              </div>
              <div className="oneImage">
                {exp.image?.length > 0 && (
                  <img src={exp.image[0]} alt="imagen" />
                )}
              </div>
            </section>
            <section>
              <p>{exp.link}</p>
              <p className="date">{exp.date}</p>
            </section>
          </section>
        </a>
      ))}
    </>
  );
};

export default CardNewsR;
