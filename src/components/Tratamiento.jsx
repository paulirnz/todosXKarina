import { conNegritas } from "../utils/texto";

export default function Tratamiento({ tratamiento }) {
  return (
    <section className="block block--tint" id="tratamiento">
      <div className="historia">
        <span className="eyebrow" style={{ textAlign: "center", display: "block" }}>
          El tratamiento
        </span>
        <h2 className="section-title" style={{ textAlign: "center" }}>
          {tratamiento.titulo}
        </h2>
        <div className="historia__body">
          {tratamiento.parrafos.map((p, i) => (
            <p key={i}>{conNegritas(p)}</p>
          ))}
          {tratamiento.lista?.length > 0 && (
            <ul className="trat-lista">
              {tratamiento.lista.map((item, i) => (
                <li key={i}>{conNegritas(item)}</li>
              ))}
            </ul>
          )}
          {tratamiento.cierre?.map((p, i) => (
            <p key={"c" + i}>{conNegritas(p)}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
