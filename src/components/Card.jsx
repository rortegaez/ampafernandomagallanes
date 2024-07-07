import ARTICULOS from "./articles/articulo";
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
        <section className="box-border bg-orange-100 flex flex-col justify-center items-center px-10 rounded-2xl my-4">
          <h2 className="m-5 font-bold underline text-blue-700">{exp.title}</h2>
          <section className="flex flex-col">
            <div className="flex flex-col">
              {typeof exp.body === "string" ? (
                <p className="flex flex-col font-normal">{exp.body}</p>
              ) : (
                exp.body.map((item) => (
                  <p className="flex flex-col font-normal">{item}</p>
                ))
              )}
            </div>
            <div className="box-border flex flex-row justify-center items-center overflow-auto">
              {exp.image?.map((item) => (
                <img src={item} alt="imagen" className="w-1/2 h-1/2" />
              ))}
            </div>
          </section>
          <section>
            <p>{exp.link}</p>
            <p className="mb-3">{exp.date}</p>
          </section>
        </section>
      ))}
    </>
  );
};

export default CardNewsR;
