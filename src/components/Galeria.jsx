import { conNegritas } from "../utils/texto";

export default function Galeria({ fotos, familia, onOpen }) {
  if (!fotos?.length) return null;

  return (
    <section className="galeria" id="galeria">
      <div className="galeria__inner">
        {familia && (
          <>
            <span className="eyebrow">{familia.eyebrow}</span>
            <h2 className="section-title">{familia.titulo}</h2>
            <div className="galeria__texto">
              {familia.parrafos.map((p, i) => (
                <p key={i}>{conNegritas(p)}</p>
              ))}
            </div>
          </>
        )}
        <div className="galeria__grid">
          {fotos.map((src, i) => (
            <button
              className="galeria__item"
              key={src}
              onClick={() => onOpen(src)}
              title="Ver foto"
            >
              <img src={src} alt={`Karina y su familia ${i + 1}`} loading="lazy" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
