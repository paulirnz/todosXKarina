export default function Navbar({ nombre, rifaActiva, transparenciaActiva }) {
  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <a className="navbar__logo" href="#top">
          Todos x <span>{nombre}</span>
        </a>
        <div className="navbar__links">
          <a href="#historia">Historia</a>
          <a href="#tratamiento">Tratamiento</a>
          {rifaActiva && <a href="#rifa">Rifa</a>}
          {transparenciaActiva && <a href="#transparencia">Transparencia</a>}
          <a className="navbar__cta" href="#aportar">
            Aportar
          </a>
        </div>
      </div>
    </nav>
  );
}
