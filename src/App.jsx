import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Nosotros from "./components/Nosotros";
import Servicios from "./components/Servicios";
import ComoFuncionamos from "./components/ComoFuncionamos";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import Soluciones from "./components/Soluciones";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Nosotros />
      <Servicios />
      <ComoFuncionamos />
      <Soluciones />
      <Contacto />

      <Footer />
    </>
  );
}

export default App;
