import logo from './logo.svg';
import './App.css';
import Footer from './Componentes/Footer/footer';
import Noticias from './Componentes/Noticias/noticias';
import Social from './Componentes/Social/social';
import Products from './Componentes/Productos/productos';
import AboutUs from './Componentes/Acerca/acerca';
import Contact from './Componentes/Contacto/Contacto';
import Header from './Componentes/Hero/hero';


function App() {
  return (
    <div className="page-container">
      <Header />
      <AboutUs />
      <Products />
      <Contact />
   
      <Noticias />
      <Footer />
    </div>
  );
}

export default App;
