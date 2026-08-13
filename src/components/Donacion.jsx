import { useState } from "react";

// URL del backend Spring Boot. En producción define VITE_API_URL en tu .env
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

const MONTOS = [1000, 5000, 10000, 20000];

export default function Donacion() {
  const [monto, setMonto] = useState(5000);
  const [montoLibre, setMontoLibre] = useState("");
  const [email, setEmail] = useState("");
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);

  const clp = (n) => "$" + Number(n).toLocaleString("es-CL");
  const montoFinal = montoLibre ? parseInt(montoLibre, 10) : monto;

  const donar = async () => {
    setError(null);
    if (!montoFinal || montoFinal < 350) {
      setError("El monto mínimo es $350.");
      return;
    }
    setCargando(true);
    try {
      const resp = await fetch(`${API_URL}/api/donaciones/crear`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ monto: montoFinal, email: email.trim() }),
      });
      if (!resp.ok) throw new Error("No se pudo iniciar el pago. Intenta de nuevo.");
      const data = await resp.json();
      // Redirige al checkout de Flow
      window.location.href = data.url;
    } catch (e) {
      setError(e.message || "Ocurrió un error. Intenta de nuevo.");
      setCargando(false);
    }
  };

  return (
    <div className="donacion">
      <div className="donacion__montos">
        {MONTOS.map((m) => (
          <button
            key={m}
            className={"donacion__chip" + (!montoLibre && monto === m ? " is-activo" : "")}
            onClick={() => {
              setMonto(m);
              setMontoLibre("");
            }}
          >
            {clp(m)}
          </button>
        ))}
      </div>

      <input
        className="donacion__input"
        type="number"
        inputMode="numeric"
        min="350"
        placeholder="Otro monto"
        value={montoLibre}
        onChange={(e) => setMontoLibre(e.target.value)}
      />

      <input
        className="donacion__input"
        type="email"
        placeholder="Tu correo (para el comprobante)"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {error && <p className="donacion__error">{error}</p>}

      <button className="donacion__btn" onClick={donar} disabled={cargando}>
        {cargando ? "Redirigiendo…" : `Donar ${clp(montoFinal || 0)}`}
      </button>

      <p className="donacion__nota">
        Pago seguro procesado por Flow (Webpay, tarjetas y más). Serás redirigido para completar tu aporte.
      </p>
    </div>
  );
}
