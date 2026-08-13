export default function Historia({ historia }) {
  return (
    <section className="block" id="historia">
      <div className="historia">
        <span className="eyebrow" style={{ textAlign: "center", display: "block" }}>
          La historia
        </span>
        <h2 className="section-title" style={{ textAlign: "center" }}>
          {historia.titulo}
        </h2>
        <div className="historia__body">
          {historia.parrafos.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
