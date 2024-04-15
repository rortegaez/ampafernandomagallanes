import ARTICULOS from "./articles/articulo";

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
        <section className="box-border bg-orange-100 flex flex-col justify-center items-center px-10 rounded-2xl m-4 py-10">
          <h2 className="m-5 font-bold underline text-blue-700">{exp.title}</h2>
          <section className="flex flex-row">
            <div className="flex flex-col">
              {typeof exp.body === "string" ? (
                <p className="flex flex-col font-normal">{exp.body}</p>
              ) : (
                exp.body.map((item) => (
                  <p className="flex flex-col font-normal">{item}</p>
                ))
              )}
            </div>
            <div className="w-1/2 h-1/2">
              {exp.image?.map((item) => (
                <img /* className="w-96" */ src={item} alt="imagen" />
              ))}
            </div>
          </section>
          <section>
            <p>{exp.link}</p>
            <p className="my-30">{exp.date}</p>
          </section>
        </section>
      ))}
    </>
  );
};

export default CardNewsR;
