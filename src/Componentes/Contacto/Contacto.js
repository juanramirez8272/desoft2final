import React from 'react';
import "./contacto.css";
function Contact() {
  return (
    <section id='contact' className="contactenos container">
      <h2 className="subtitle">Contactanos para mas informacion</h2>
      <div className="contactenos_tabla">
        <div className="contactenos_elemento">
          <p className="contactenos_name">Telefono</p>
          <h3 className="contactenos_desc">(604) 111-11-11</h3>
          <div className="contactenos_items">
            <p className="contactenos_opciones">Cotizaciones</p>
            <p className="contactenos_opciones">Informacion General</p>
            <p className="contactenos_opciones">soporte Tecnico</p>
          </div>
          <a href="#" className="contacto_cta">Te llamamos</a>
        </div>
        <div className="contactenos_elemento contactenos_elemento-best">
          <p className="contactenos_name">Email</p>
          <h3 className="contactenos_desc">ds2@uniremington</h3>
          <div className="contactenos_items">
            <p className="contactenos_opciones">Cotizaciones</p>
            <p className="contactenos_opciones">Certificaciones</p>
            <p className="contactenos_opciones">soporte Tecnico</p>
          </div>
          <a href="#" className="contacto_cta">Escribenos</a>
        </div>
        <div className="contactenos_elemento">
          <p className="contactenos_name">Oficinas</p>
          <h3 className="contactenos_desc">Calle 1 Medellin</h3>
          <div className="contactenos_items">
            <p className="contactenos_opciones">Certificaciones</p>
            <p className="contactenos_opciones">Informacion General</p>
            <p className="contactenos_opciones">Otros tramites</p>
          </div>
          <a href="#" className="contacto_cta">Programa una visita</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;