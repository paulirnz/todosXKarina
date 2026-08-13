import { useState } from "react";
import Donacion from "./Donacion";

const ETIQUETAS = {
  banco: "Banco",
  tipoCuenta: "Tipo de cuenta",
  numeroCuenta: "N° de cuenta",
  rut: "RUT",
  nombre: "Titular",
  email: "Correo",
};

export default function Aportar({ cuenta, nombre, donacionActiva }) {
  const [copiado, setCopiado] = useState(false);

  const textoCompleto = Object.entries(cuenta)
    .map(([k, v]) => `${ETIQUETAS[k] || k}: ${v}`)
    .join("\n");

  const copiarTodo = () => {
    navigator.clipboard?.writeText(textoCompleto).then(() => {
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    });
  };

  const TarjetaTransferencia = (
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
  );

  return (
    <section className="aportar" id="aportar">
      <div className="aportar__inner">
        <span className="eyebrow">Cómo ayudar</span>
        <h2 className="section-title">Haz tu aporte</h2>

        {donacionActiva ? (
          <>
            <p className="lead" style={{ margin: "0 auto" }}>
              Dona de forma segura con tarjeta o Webpay, o transfiere directamente a la cuenta de la campaña.
            </p>
            <Donacion />
            <p className="aportar__o">— o transfiere directamente —</p>
            {TarjetaTransferencia}
          </>
        ) : (
          <>
            <p className="lead" style={{ margin: "0 auto" }}>
              Transfiere a la cuenta de la campaña. Copia todos los datos con un solo toque.
            </p>
            {TarjetaTransferencia}
          </>
        )}
      </div>
    </section>
  );
}
