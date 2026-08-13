import { useState } from "react";

const ETIQUETAS = {
  banco: "Banco",
  tipoCuenta: "Tipo de cuenta",
  numeroCuenta: "N° de cuenta",
  rut: "RUT",
  nombre: "Titular",
  email: "Correo",
};

export default function Aportar({ cuenta, nombre }) {
  const [copiado, setCopiado] = useState(false);

  // Texto completo con formato, listo para pegar en el banco o por WhatsApp.
  const textoCompleto = Object.entries(cuenta)
    .map(([k, v]) => `${ETIQUETAS[k] || k}: ${v}`)
    .join("\n");

  const copiarTodo = () => {
    navigator.clipboard?.writeText(textoCompleto).then(() => {
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    });
  };

  return (
    <section className="aportar" id="aportar">
      <div className="aportar__inner">
        <span className="eyebrow">Cómo ayudar</span>
        <h2 className="section-title">Haz tu aporte</h2>
        <p className="lead" style={{ margin: "0 auto" }}>
          Transfiere a la cuenta de {nombre}. Copia todos los datos con un solo toque.
        </p>

        <div className="datos-card">
          <ul className="datos-lista">
            {Object.entries(cuenta).map(([k, v]) => (
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
        </div>
      </div>
    </section>
  );
}
