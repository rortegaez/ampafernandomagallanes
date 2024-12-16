import "./general.css";

export const Header = () => {
  return (
    <div className="mainImages">
      <img className="logo" src="/imgGlobal/logoSinFondo.png" alt="logo" />
      <img
        className="colegio"
        src="/imgGlobal/fotoGeneralColeMod.webp"
        alt="foto general del colegio"
      />
      <div className="rrss">
        <a
          href="https://www.intagram.com/ampafernandomagallanes"
          target="_blank"
          rel="noopener"
        >
          <img className="icons" src="/icons/instagram.png" />
        </a>
        <a
          href="https://www.facebook.com/ampafernandomagallanes"
          target="_blank"
          rel="noopener"
        >
          <img className="icons" src="/icons/facebook.png" />
        </a>
      </div>
    </div>
  );
};
