import logo from './logo.svg';
import './App.css';
import Footer from './Componentes/Footer/footer';
import Noticias from './Componentes/Noticias/noticias';
import Social from './Componentes/Social/social';
import Products from './Componentes/Productos/productos';
import AboutUs from './Componentes/Acerca/acerca';

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <h1>CONTENT FOR FOOTER</h1>

      </div>
      <AboutUs />
      <Products />
      <Social />
      <Noticias />
      <Footer />
    </div>
  );
}

export default App;
