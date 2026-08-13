import { useState } from "react";

const ETIQUETAS = {
  banco: "Banco",
  tipoCuenta: "Tipo de cuenta",
  numeroCuenta: "N° de cuenta",
  rut: "RUT",
  nombre: "Titular",
  email: "Correo",
};

export default function Rifa({ rifa, nombre }) {
  const [copiado, setCopiado] = useState(null);

  if (!rifa || rifa.activa === false) return null;

  const copiar = (valor, campo) => {
    navigator.clipboard?.writeText(String(valor)).then(() => {
      setCopiado(campo);
      setTimeout(() => setCopiado(null), 1800);
    });
  };

  const clp = (n) =>
    typeof n === "number" ? "$" + n.toLocaleString("es-CL") : n;

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
          {/* Premio */}
          <div className="rifa__card rifa__card--premio">
            {rifa.imagenPremio && (
              <img
                className="rifa__img"
                src={rifa.imagenPremio}
                alt={"Premio: " + rifa.premio}
                loading="lazy"
              />
            )}
            <div className="rifa__premioInfo">
              <span className="rifa__label">Premio</span>
              <h3 className="rifa__premio">{rifa.premio}</h3>
              {rifa.detallePremio && (
                <p className="rifa__detalle">{rifa.detallePremio}</p>
              )}
            </div>
          </div>

          {/* Datos + acción */}
          <div className="rifa__card rifa__card--accion">
            <ul className="rifa__datos">
              <li>
                <span>Valor por número</span>
                <strong>{clp(rifa.valorNumero)}</strong>
              </li>
              {rifa.totalNumeros && (
                <li>
                  <span>Números disponibles</span>
                  <strong>{rifa.totalNumeros.toLocaleString("es-CL")}</strong>
                </li>
              )}
              {rifa.fechaSorteo && (
                <li>
                  <span>Fecha del sorteo</span>
                  <strong>{rifa.fechaSorteo}</strong>
                </li>
              )}
            </ul>

            {rifa.linkPago ? (
              <a
                className="rifa__btn"
                href={rifa.linkPago}
                target="_blank"
                rel="noopener noreferrer"
              >
                Comprar mi número
              </a>
            ) : (
              <button className="rifa__btn rifa__btn--off" disabled>
                Pago disponible pronto
              </button>
            )}

            {rifa.notaPago && <p className="rifa__nota">{rifa.notaPago}</p>}
          </div>
        </div>

        {/* Transferencia alternativa */}
        {rifa.transferencia && (
          <div className="rifa__transfer">
            <span className="rifa__label">
              ¿Prefieres transferir? También puedes participar así:
            </span>
            <div className="rifa__transferGrid">
              {Object.entries(rifa.transferencia).map(([k, v]) => (
                <button
                  className="copy-cell"
                  key={k}
                  onClick={() => copiar(v, k)}
                  title="Copiar"
                >
                  <span className="k">{ETIQUETAS[k] || k}</span>
                  <span className="v">{v}</span>
                  <span className="flag">
                    {copiado === k ? "✓ copiado" : "copiar"}
                  </span>
                </button>
              ))}
            </div>
            <p className="rifa__nota">
              Envía tu comprobante al Instagram{" "}
              <strong>@{rifa.instagram || "todosxkarina"}</strong> indicando tu
              nombre para reservar tu número. ¡Gracias por ayudar a {nombre}!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
