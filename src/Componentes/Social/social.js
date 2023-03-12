import React from "react";
import { FacebookProvider, Page } from "react-facebook";
import InstagramEmbed from "react-instagram-embed";
import logotw from "./assets/twitter.svg"

import "./social.css";

function Social() {
  return (
    <section id="social" className="redes container">
      <h2 className="subtitle">Compartenos y siguenos en redes:</h2>
      <div className="botones_compartir">
        <a
          href="https://www.facebook.com/UniremingtonOficial/?locale=es_LA"
          target="_blank"
          className="facebook"
        >
          <img src="./assets/facebook.svg" className="social" />
        </a>
        <a
          href="https://twitter.com/uni_remington"
          target="_blank"
          className="twitter"
        >
          <img src="./assets/twitter.svg" className="social" alt="Twitter" />
        </a>
        <a
          href="https://www.linkedin.com/in/test"
          target="_blank"
          className="linkedin"
        >
          <img src='./assets'className="social" />
        </a>
        <a
          href="https://wa.me/3042055121"
          target="_blank"
          className="whatsapp"
        >
          <img src="./assets/whatsapp.svg" className="social" />
        </a>
      </div>
      <div className="embeds">
        <FacebookProvider appId="tu_app_id_de_facebook">
          <Page
            href="https://www.facebook.com/UniremingtonOficial/?locale=es_LA"
            tabs="timeline"
            width="500"
            height="500"
          />
        </FacebookProvider>
        <InstagramEmbed
          url="https://www.instagram.com/p/Cj_tEbGuI1t/?hl=es"
          maxWidth={500}
          hideCaption={false}
          containerTagName="div"
          protocol=""
          injectScript
        />
      </div>
    </section>
  );
}

export default Social;