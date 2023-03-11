import React from "react";
import "./footer.css"

function Footer() {
return (
<footer className="footer">
<section className="footer_container container">
<nav className="nav nav_footer">
<h2 className="footer_title">Desarrollo de Software 2 Uniremington</h2>
<ul className="nav_link nav_link--footer">
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
</ul>
</nav>
<form action="" className="footer_form">
<h2 className="footer_newsletter">
Suscribete a nuestro Newsletter
</h2>
<div className="footer_inputs">
<input type="email" placeholder="Email" className="footer_input" />
<input type="submit" className="footer_submit" />
</div>
</form>
</section>
<section className="footer_copy container">
<h3 className="footer_author">
Elaborado por Juan Jose Ramirez Gutierrez
</h3>
</section>
</footer>
);
}

export default Footer;