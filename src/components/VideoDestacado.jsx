import { useEffect } from "react";

export default function VideoDestacado({ videos }) {
  useEffect(() => {
    if (!videos?.length) return;

    if (window.instgrm) {
      window.instgrm.Embeds.process();
      return;
    }

    if (document.getElementById("instagram-embed-script")) return;

    const script = document.createElement("script");
    script.id = "instagram-embed-script";
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, [videos]);

  if (!videos?.length) return null;

  return (
    <section className="block" id="video">
      <div className="video-destacado">
        <span className="eyebrow" style={{ textAlign: "center", display: "block" }}>
          Su historia en video
        </span>
        <h2 className="section-title" style={{ textAlign: "center" }}>
          Su historia en sus propias palabras
        </h2>
        <div className="video-destacado__grid">
          {videos.map((video) => (
            <div className="video-destacado__item" key={video.url}>
              <div className="video-destacado__texto">
                {video.titulo && <h3 className="video-destacado__titulo">{video.titulo}</h3>}
              </div>
              <div className="video-destacado__frame">
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink={video.url}
                  data-instgrm-version="14"
                />
              </div>
              {video.descripcion && (
                <p className="video-destacado__descripcion">{video.descripcion}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
