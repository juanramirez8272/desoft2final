import React, { useState } from "react";
import "./noticias.css";

const noticias = [
  {
    id: 1,
    title: "Tenemos nuevas alternativas a la planta fisica, Opciones en la nube",
    content: "Lorem ipsum",
    imgSrc: "./assets/server.jpg"
  },
  {
    id: 2,
    title: "Las limitaciones de espacio ya no son un problema, Cloud Hardware",
    content: "Lorem ipsum",
    imgSrc: "./assets/planes.jpg"
  },
  {
    id: 3,
    title: "Nuevos bundles disponibles, Empaqueta tu plan",
    content: "Lorem ipsum",
    imgSrc: "./assets/clouds.jpg"
  }
];

function Noticias() {
  const [currentNoticia, setCurrentNoticia] = useState(1);

  function changePosition(add) {
    let value = currentNoticia + add;
    if (value > noticias.length) {
      value = 1;
    } else if (value < 1) {
      value = noticias.length;
    }
    setCurrentNoticia(value);
  }

  return (
    <section id="news" className="noticias">
      <div className="noticias_container container">
        <img src="./assets/left.svg" className="noticias_arrow" id="before" onClick={() => changePosition(-1)} />
        {noticias.map((noticia) => (
          <section
            className={`noticias_body ${noticia.id === currentNoticia ? "noticias_body--show" : ""}`}
            data-id={noticia.id}
            key={noticia.id}
          >
            <div className="noticias_texto">
              <h2 className="subtitle">
                {noticia.title}
              </h2>
              <p className="noticias_texto">{noticia.content}</p>
            </div>
            <figure className="noticias_picture">
              <img src={noticia.imgSrc} className="noticias_img" />
            </figure>
          </section>
        ))}
        <img src="./assets/rigth.svg" className="noticias_arrow" id="next" onClick={() => changePosition(1)} />
      </div>
    </section>
  );
}

export default Noticias;