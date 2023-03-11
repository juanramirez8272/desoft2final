import React from 'react';
import "./productos.css";
function Products() {
  return (
    <section id="products" className="productos">
      <div className="productos_container container">
        <div className="productos_text">
          <h2 className="subtitle">Nuestras Soluciones</h2>
          <h3 className="subtitle1">Soluciones IaaS</h3>
          <p className="productos_parrafo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur commodi minima assumenda sequi distinctio quisquam quos ipsa sed delectus, sapiente animi officiis? Cumque, at quo provident animi sunt tenetur maiores.</p>
          <a href="#" className="cta">Conoce mas</a>
          <h3 className="subtitle1">Soluciones PaaS</h3>
          <p className="productos_parrafo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur commodi minima assumenda sequi distinctio quisquam quos ipsa sed delectus, sapiente animi officiis? Cumque, at quo provident animi sunt tenetur maiores.</p>
          <a href="#" className="cta">Conoce mas</a>
          <h3 className="subtitle1">Soluciones SaaS</h3>
          <p className="productos_parrafo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur commodi minima assumenda sequi distinctio quisquam quos ipsa sed delectus, sapiente animi officiis? Cumque, at quo provident animi sunt tenetur maiores.</p>
          <a href="#" className="cta">Conoce mas</a>
        </div>
        <figure className="productos_imagen">
          <img src="./assets/products.jpg" alt="" className="productos_img" />
        </figure>
      </div>
    </section>
  );
}

export default Products;