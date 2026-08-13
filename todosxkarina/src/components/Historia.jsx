export default function Historia({ historia, timeline }) {
  return (
    <section className="block" id="historia">
      <div className="block__grid">
        <div>
          <span className="eyebrow">La historia</span>
          <h2 className="section-title">{historia.titulo}</h2>
          <div className="block__body">
            {historia.parrafos.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
        <ul className="timeline">
          {timeline.map((t, i) => (
            <li key={i}>
              <span className="t-fecha">{t.fecha}</span>
              <span className="t-texto">{t.texto}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
