import React from "react";
import "./social.css";;

function Social() {
    return (
      <section id="social" className="redes container">
        <h2 className="subtitle">Compartenos y siguenos en redes:</h2>
        <div className="botones_compartir">
          <a href="#" target="_blank" className="facebook">
            <img src="./assets/facebook.svg" className="social" />
        
          </a>
          <a href="#" target="_blank" className="twitter">
            <img src="./assets/twitter.svg" className="social" />
       
          </a>
          <a href="#" target="_blank" className="linkedin">
            <img src="./assets/linkedin.svg" className="social" />
       
          </a>
          <a href="#" target="_blank" className="whatsapp">
            <img src="./assets/whatsapp.svg" className="social" />
         
          </a>
        </div>
      </section>
    );
  }

  export default Social;