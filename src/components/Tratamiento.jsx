export default function Tratamiento({ tratamiento }) {
  return (
    <section className="block block--tint" id="tratamiento">
      <div className="block__grid">
        <div>
          <span className="eyebrow">El tratamiento</span>
          <h2 className="section-title">{tratamiento.titulo}</h2>
          <div className="block__body">
            {tratamiento.parrafos.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
        <div className="trat-items">
          {tratamiento.items.map((it, i) => (
            <div className="trat-item" key={i}>
              <h4>{it.titulo}</h4>
              <p>{it.detalle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
