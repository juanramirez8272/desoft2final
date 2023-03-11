import React from "react";
import "./noticias.css";

function Noticias() {
    return (

<section id='news' className="noticias">
    <div className="noticias_container container">
        <img src="./assets/left.svg"  className="noticias_arrow" id="before" />
        <section className="noticias_body noticias_body--show" data-id="1">
            <div className="noticias_texto">
                <h2 className="subtitle">Tenemos nuevas alternativas a la planta fisica, <span className="noticias_course">Opciones en la nube</span></h2>
                <p className="noticias_texto">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis sint tenetur, voluptatibus possimus labore distinctio illum officiis doloremque laudantium veritatis in, adipisci mollitia porro cupiditate similique nostrum vitae perferendis? Accusantium?</p>
            </div>
            <figure className="noticias_picture">
                <img src="./assets/server.jpg" className="noticias_img" />
            </figure>
        </section>
        <section className="noticias_body" data-id="2">
            <div className="noticias_texto">
                <h2 className="subtitle">Las limitaciones de espacio ya no son un problema, <span className="noticias_course">Cloud Hardware</span></h2>
                <p className="noticias_texto">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis sint tenetur, voluptatibus possimus labore distinctio illum officiis doloremque laudantium veritatis in, adipisci mollitia porro cupiditate similique nostrum vitae perferendis? Accusantium?</p>
            </div>
            <figure className="noticias_picture">
                <img src="./assets/planes.jpg" className="noticias_img" />
            </figure>
        </section>
        <section className="noticias_body" data-id="3">
            <div className="noticias_texto">
                <h2 className="subtitle">Nuevos bundles disponibles, <span className="noticias_course">Empaqueta tu plan</span></h2>
                <p className="noticias_texto">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis sint tenetur, voluptatibus possimus labore distinctio illum officiis doloremque laudantium veritatis in, adipisci mollitia porro cupiditate similique nostrum vitae perferendis? Accusantium?</p>
            </div>
            <figure className="noticias_picture">
                <img src="./assets/clouds.jpg" className="noticias_img" />
            </figure>
        </section>
        <img src="./assets/rigth.svg"  className="noticias_arrow" id="next" />
    </div>
</section>

);
}

export default Noticias;