export default function Footer({ hashtag, nombreCompleto }) {
  return (
    <footer className="footer">
      <p>
        <strong>{hashtag}</strong> — Campaña solidaria por {nombreCompleto}.
      </p>
      <p>Hecho con cariño por quienes la acompañan.</p>
    </footer>
  );
}
