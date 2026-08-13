export default function Transparencia({ data, onOpen }) {
  return (
    <section className="transp" id="transparencia">
      <div className="transp__inner">
        <span className="eyebrow">Confianza</span>
        <h2 className="section-title">{data.titulo}</h2>
        <p className="lead" style={{ margin: "0 auto" }}>
          {data.bajada}
        </p>
        <div className="transp__grid">
          {data.documentos.map((doc, i) => (
            <button
              className="transp__card"
              key={i}
              onClick={() => onOpen(doc.img)}
              title="Ver documento"
            >
              <img src={doc.img} alt={doc.titulo} loading="lazy" />
              <span>{doc.titulo}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
