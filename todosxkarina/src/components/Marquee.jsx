export default function Marquee({ hashtag }) {
  const items = Array.from({ length: 8 }, (_, i) => (
    <span key={i}>{hashtag} · Gracias por ayudar</span>
  ));
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {items}
        {items}
      </div>
    </div>
  );
}
