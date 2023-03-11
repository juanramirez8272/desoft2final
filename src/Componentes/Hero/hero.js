import React from 'react';
import "./hero.css"

function Header() {
  return (
    <header className="hero">
      <nav className="nav container">
        <div className="nav_logo">
          <h2 className="nav_titulo">Mi Plataforma</h2>
        </div>
        <ul className="nav_link nav_link--menu">
          <li className="nav_items">
            <a href="#about_us" className="nav_links">
              Acerca de Nosotros
            </a>
          </li>
          <li className="nav_items">
            <a href="#products" className="nav_links">
              Productos y Servicios
            </a>
          </li>
          <li className="nav_items">
            <a href="#contact" className="nav_links">
              Contactenos
            </a>
          </li>
          <li className="nav_items">
            <a href="#social" className="nav_links">
              Redes Sociales
            </a>
          </li>
          <li className="nav_items">
            <a href="#news" className="nav_links">
              Noticias y Eventos
            </a>
          </li>
          <img src="./assets/exit.svg" className="nav_cerrar" />
        </ul>
        <div className="nav__menu">
          <img src="./assets/menu.svg" className="nav_img" />
        </div>
      </nav>
      <section className="hero_container container">
        <h1 className="hero_tittle">Tenemos soluciones a medida</h1>
        <p className="hero_parrafo">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, corrupti
          cupiditate. Perspiciatis quaerat quibusdam cumque sit praesentium minus
          unde? Aliquid cumque voluptatibus ullam, at minus necessitatibus
          repellat consectetur blanditiis repudiandae?
        </p>
        <a href="https://www.uniremington.edu.co/" className="cta">
          Contactanos
        </a>
      </section>
    </header>
  );
}

export default Header;