export default function Hero({ config }) {
  return (
    <header className="hero" id="top">
      <div className="hero__inner">
        <div>
          <span className="eyebrow">{config.hashtag}</span>
          <h1 className="hero__title">{config.tituloHero}</h1>
          <p className="hero__sub">{config.subtituloHero}</p>
          <a className="hero__cta" href="#aportar">
            Quiero ayudar
          </a>
        </div>
        <div className="hero__photo">
          <img src={config.fotoPrincipal} alt={"Foto de " + config.nombreCompleto} />
        </div>
      </div>
    </header>
  );
}
