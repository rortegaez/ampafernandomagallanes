import "./css/contact.css";

export const Contact = () => {
  return (
    <>
      <h1>Contáctanos</h1>
      <section className="mainBoxContact">
        <p className="textContact">
          Para hablar con nosotros, estaremos por la puerta del cole dejando a
          nuestro hijos vuestro a los tuyos, pero si no, puedes escribirnos al
          nuestro email:
        </p>
        <a
          href="mailto:ampafermagallanes23@gmail.com"
          target="_blank"
          rel="noopener"
        >
          <img src="/icons/gmail.png" alt="gmail" className="icons" />
        </a>
      </section>
      <section className="mainBoxContact">
        <h2 className="textContact">
          ¡Afiliate! Estas son los pasos que debes de seguir
        </h2>
        <ul className="orderList">
          <li className="textContact">Primero: Descarga el documento</li>
          <li className="textContactExtended">
            <a href="/docs/inscripcion2425.pdf" target="_blank" rel="noopener">
              <img src="/icons/docs.png" alt="pdf" className="icons" />
            </a>
          </li>
          <li className="textContact">
            Segundo: Realiza la transferencia a la cuenta que aparece en el
            documento
          </li>
          <li className="textContact">
            Tercero: Mandonos el justificante de la transferencia, junto al
            documento relleno
          </li>
          <li className="textContactExtended">
            <a
              href="mailto:ampafermagallanes23@gmail.com"
              target="_blank"
              rel="noopener"
            ></a>
          </li>
          <li>
            <a
              href="mailto:ampafermagallanes23@gmail.com"
              target="_blank"
              rel="noopener"
            >
              <img src="/icons/gmail.png" alt="gmail" className="icons" />
            </a>
          </li>
        </ul>
      </section>
    </>
  );
};
