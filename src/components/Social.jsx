export default function Social({ redes }) {
  return (
    <section className="social">
      <span className="eyebrow">Difunde</span>
      <h2 className="section-title">Sigue los siguientes Instagram para difundir</h2>
      <p className="lead" style={{ margin: "0 auto" }}>
        Compartir la campaña también ayuda. Cada persona cuenta.
      </p>
      <div className="social__links">
        {redes.map((r, i) => (
          <a key={i} href={r.url} target="_blank" rel="noopener noreferrer">
            {r.nombre}
          </a>
        ))}
      </div>
    </section>
  );
}
