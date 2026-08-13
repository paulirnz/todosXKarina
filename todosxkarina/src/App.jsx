import { useState } from "react";
import CONFIG from "./config";

import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeartMeter from "./components/HeartMeter";
import QuoteBand from "./components/QuoteBand";
import Historia from "./components/Historia";
import Tratamiento from "./components/Tratamiento";
import Aportar from "./components/Aportar";
import Rifa from "./components/Rifa";
import Transparencia from "./components/Transparencia";
import Social from "./components/Social";
import Footer from "./components/Footer";
import Lightbox from "./components/Lightbox";

export default function App() {
  const [lightbox, setLightbox] = useState(null);

  // Cuando conectes el backend, reemplaza CONFIG por los datos de la API.
  const config = CONFIG;

  return (
    <>
      <Marquee hashtag={config.hashtag} />
      <Navbar nombre={config.nombre} rifaActiva={config.rifa?.activa} />
      <Hero config={config} />
      <HeartMeter
        meta={config.metaMonto}
        recaudado={config.recaudado}
        fecha={config.fechaActualizacion}
      />
      <QuoteBand texto={config.quote} />
      <Historia historia={config.historia} timeline={config.timeline} />
      <Tratamiento tratamiento={config.tratamiento} />
      <Aportar cuenta={config.cuenta} nombre={config.nombre} />
      <Rifa rifa={config.rifa} nombre={config.nombre} />
      <Transparencia data={config.transparencia} onOpen={setLightbox} />
      <Social redes={config.redes} nombre={config.nombre} />
      <Footer hashtag={config.hashtag} nombreCompleto={config.nombreCompleto} />
      <Lightbox src={lightbox} onClose={() => setLightbox(null)} />
    </>
  );
}
