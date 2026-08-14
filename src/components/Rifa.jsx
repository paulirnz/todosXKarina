import { useState } from "react";

const ETIQUETAS = {
  banco: "Banco",
  tipoCuenta: "Tipo de cuenta",
  numeroCuenta: "N° de cuenta",
  rut: "RUT",
  nombre: "Titular",
};

export default function Rifa({ rifa, nombre }) {
  const [copiado, setCopiado] = useState(false);
  const [fotoActual, setFotoActual] = useState(0);

  if (!rifa || rifa.activa === false) return null;

  const fotos = rifa.imagenesPremio || [];

  const clp = (n) =>
    typeof n === "number" ? "$" + n.toLocaleString("es-CL") : n;

  const textoTransfer = rifa.transferencia
    ? Object.entries(rifa.transferencia)
        .map(([k, v]) => `${ETIQUETAS[k] || k}: ${v}`)
        .join("\n")
    : "";

  const copiarTodo = () => {
    navigator.clipboard?.writeText(textoTransfer).then(() => {
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    });
  };

  const anterior = () => setFotoActual((i) => (i - 1 + fotos.length) % fotos.length);
  const siguiente = () => setFotoActual((i) => (i + 1) % fotos.length);

  return (
    <section className="rifa" id="rifa">
      <div className="rifa__inner">
        <span className="eyebrow">Rifa solidaria</span>
        <h2 className="section-title">{rifa.titulo}</h2>
        {rifa.bajada && (
          <p className="lead" style={{ margin: "0 auto 2.5rem" }}>
            {rifa.bajada}
          </p>
        )}

        <div className="rifa__grid">
          <div className="rifa__card rifa__card--premio">
            {fotos.length > 0 && (
              <div className="rifa__carrusel">
                <img
                  className="rifa__img"
                  src={fotos[fotoActual]}
                  alt={"Premio: " + rifa.premio}
                  loading="lazy"
                />
                {fotos.length > 1 && (
                  <>
                    <button
                      className="rifa__carrusel-flecha rifa__carrusel-flecha--izq"
                      onClick={anterior}
                      aria-label="Foto anterior"
                    >
                      ‹
                    </button>
                    <button
                      className="rifa__carrusel-flecha rifa__carrusel-flecha--der"
                      onClick={siguiente}
                      aria-label="Foto siguiente"
                    >
                      ›
                    </button>
                    <div className="rifa__carrusel-dots">
                      {fotos.map((_, i) => (
                        <button
                          key={i}
                          className={"rifa__carrusel-dot" + (i === fotoActual ? " is-activo" : "")}
                          onClick={() => setFotoActual(i)}
                          aria-label={"Ver foto " + (i + 1)}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}
            <div className="rifa__premioInfo">
              <span className="rifa__label">Premio</span>
              <h3 className="rifa__premio">{rifa.premio}</h3>
              {rifa.detallePremio && <p className="rifa__detalle">{rifa.detallePremio}</p>}
              {rifa.creditoInstagram && (
                <a
                  className="rifa__credito"
                  href={"https://instagram.com/" + rifa.creditoInstagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Retablo donado por @{rifa.creditoInstagram} →
                </a>
              )}
            </div>
          </div>

          <div className="rifa__card rifa__card--accion">
            <ul className="rifa__datos">
              <li>
                <span>Valor por número</span>
                <strong>{clp(rifa.valorNumero)}</strong>
              </li>
              {rifa.fechaSorteo && (
                <li>
                  <span>Fecha del sorteo</span>
                  <strong>{rifa.fechaSorteo}</strong>
                </li>
              )}
            </ul>

            <p className="rifa__instrucciones">
              La rifa se realiza únicamente mediante transferencia bancaria. Copia los datos de la derecha y envía tu comprobante por correo a <a href="mailto:todosxkarinareyes@gmail.com">todosxkarinareyes@gmail.com</a> indicando tu nombre para solicitar tu número.
            </p>

            {rifa.notaPago && <p className="rifa__nota">{rifa.notaPago}</p>}
          </div>
        </div>

        {rifa.transferencia && (
          <div className="rifa__transfer">
            <span className="rifa__label">¿Prefieres transferir? También puedes participar así:</span>
            <ul className="datos-lista" style={{ marginTop: "14px" }}>
              {Object.entries(rifa.transferencia).map(([k, v]) => (
                <li key={k}>
                  <span className="k">{ETIQUETAS[k] || k}</span>
                  <span className="v">{v}</span>
                </li>
              ))}
            </ul>
            <button
              className={"datos-btn" + (copiado ? " is-copiado" : "")}
              onClick={copiarTodo}
            >
              {copiado ? "✓ Datos copiados" : "Copiar todos los datos"}
            </button>
            <p className="rifa__nota">
              Para solicitar tu número, envía tu comprobante a <a href="mailto:todosxkarinareyes@gmail.com">todosxkarinareyes@gmail.com</a> o al Instagram <strong>@{rifa.instagram || "todosxkarina"}</strong> indicando tu nombre. ¡Gracias por ayudar a {nombre}!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
