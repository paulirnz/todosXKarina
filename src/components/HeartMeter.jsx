import { useEffect, useState } from "react";

export default function HeartMeter({ meta, recaudado, fecha }) {
  const pctReal = meta > 0 ? Math.min(100, Math.round((recaudado / meta) * 100)) : 0;
  const [pct, setPct] = useState(0);

  // Animación de llenado al montar.
  useEffect(() => {
    const id = setTimeout(() => setPct(pctReal), 150);
    return () => clearTimeout(id);
  }, [pctReal]);

  const clp = (n) => "$" + Number(n).toLocaleString("es-CL");
  const fillY = 100 - pct; // el clip del corazón se llena desde abajo

  return (
    <section className="meter">
      <div className="meter__inner">
        <svg className="meter__heart" viewBox="0 0 32 29" role="img" aria-label={`${pct}% recaudado`}>
          <defs>
            <clipPath id="heartClip">
              <path d="M16 29S2 20 2 10a7 7 0 0 1 14-3 7 7 0 0 1 14 3c0 10-14 19-14 19z" />
            </clipPath>
          </defs>
          <rect x="0" y="0" width="32" height="29" fill="#f4dde3" clipPath="url(#heartClip)" />
          <rect
            x="0"
            y={fillY * 0.29}
            width="32"
            height="29"
            fill="#e8546b"
            clipPath="url(#heartClip)"
            style={{ transition: "y 1s ease" }}
          />
        </svg>
        <div className="meter__pct">{pct}%</div>
        <div className="meter__amounts">
          <strong>{clp(recaudado)}</strong> de {clp(meta)}
        </div>
        <div className="meter__bar">
          <div className="meter__fill" style={{ width: pct + "%" }} />
        </div>
        <div className="meter__date">{fecha}</div>
      </div>
    </section>
  );
}
