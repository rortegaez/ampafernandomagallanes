import ARTICULOS from "./articles/articulo";

const CardNewsR = () => {
  let recopilacion = [];

  ARTICULOS.map((item) => {
    recopilacion.push({ ...item });
  });

  return (
    <>
      {recopilacion.map((exp) => (
        <a href={exp.description}>
          <section className="h-80 box-border bg-orange-100 flex flex-col items-center px-10 rounded-2xl my-4 overflow-auto">
            <h2 className="m-5 font-bold underline text-blue-700">
              {exp.title}
            </h2>
            <section className="flex flex-col justify-center items-center">
              <div className="flex flex-col">
                {typeof exp.body === "string" ? (
                  <p className="flex flex-col font-normal">{exp.body}</p>
                ) : (
                  exp.body.map((item) => (
                    <p className="flex flex-col font-normal">{item}</p>
                  ))
                )}
              </div>
              <div className="border-box mt-5">
                {exp.image?.length > 0 && ( <img src={exp.image[0]} alt="imagen" /> )}
              </div>
            </section>
            <section>
              <p>{exp.link}</p>
              <p className="my-30">{exp.date}</p>
            </section>
          </section>
        </a>
      ))}
    </>
  );
};

export default CardNewsR;
