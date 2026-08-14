import { useState } from "react";
import CONFIG from "./config";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeartMeter from "./components/HeartMeter";
import QuoteBand from "./components/QuoteBand";
import Historia from "./components/Historia";
import VideoDestacado from "./components/VideoDestacado";
import Galeria from "./components/Galeria";
import Tratamiento from "./components/Tratamiento";
import Aportar from "./components/Aportar";
import Rifa from "./components/Rifa";
import Transparencia from "./components/Transparencia";
import Social from "./components/Social";
import Footer from "./components/Footer";
import Lightbox from "./components/Lightbox";

export default function App() {
  const [lightbox, setLightbox] = useState(null);
  const config = CONFIG;

  return (
    <>
      <Navbar nombre={config.nombre} rifaActiva={config.rifa?.activa} />
      <Hero config={config} />
      {config.mostrarTermometro && (
        <HeartMeter
          meta={config.metaMonto}
          recaudado={config.recaudado}
          fecha={config.fechaActualizacion}
        />
      )}
      <QuoteBand texto={config.quote} />
      <Historia historia={config.historia} />
      <VideoDestacado videos={config.videosDestacados} />
      <Galeria fotos={config.galeria} familia={config.familia} onOpen={setLightbox} />
      <Tratamiento tratamiento={config.tratamiento} />
      <Aportar
        cuenta={config.cuenta}
        nombre={config.nombre}
        donacionActiva={config.donacion?.activa}
      />
      <Rifa rifa={config.rifa} nombre={config.nombre} />
      {config.mostrarTransparencia && (
        <Transparencia data={config.transparencia} onOpen={setLightbox} />
      )}
      <Social redes={config.redes} />
      <Footer hashtag={config.hashtag} nombreCompleto={config.nombreCompleto} />
      <Lightbox src={lightbox} onClose={() => setLightbox(null)} />
    </>
  );
}
