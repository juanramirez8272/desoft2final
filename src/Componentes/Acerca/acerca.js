import React from 'react';
import "./acerca.css";
function AboutUs() {
  return (
    <section id='about_us' className="container acerca">
      <h2 className="subtitle">Somos Mi Plataforma</h2>
      <p className="acerca_parrafo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde repellendus accusamus sit dicta, recusandae accusantium incidunt, neque aliquid perferendis atque temporibus eum ab eos ipsum odit doloribus quae earum. Porro?</p>
      <div className="acerca_main">
        <article className="acerca_iconos">
          <img src="./assets/nube.src" className="acerca_icono" alt="nube" />
          <h3 className="acerca_titulo">Infraestructura en la nube</h3>
          <p className="acerca_parrafo">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse similique dolores nostrum dolore aut commodi corrupti dignissimos reiciendis, totam rerum quis, facere minus explicabo praesentium nam velit saepe. Iusto, asperiores.</p>
        </article> 
        <article className="acerca_iconos">
          <img src="./assets/gear.svg" className="acerca_icono" alt="gear" />
          <h3 className="acerca_titulo">Soluciones personalizables</h3>
          <p className="acerca_parrafo">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse similique dolores nostrum dolore aut commodi corrupti dignissimos reiciendis, totam rerum quis, facere minus explicabo praesentium nam velit saepe. Iusto, asperiores.</p>
        </article>
        <article className="acerca_iconos">
          <img src="./assets/banco.svg" className="acerca_icono" alt="banco" />
          <h3 className="acerca_titulo">Reduccion de costos</h3>
          <p className="acerca_parrafo">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse similique dolores nostrum dolore aut commodi corrupti dignissimos reiciendis, totam rerum quis, facere minus explicabo praesentium nam velit saepe. Iusto, asperiores.</p>
        </article>
      </div>
    </section>
  );
}

export default AboutUs;