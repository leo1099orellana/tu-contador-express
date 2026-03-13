import { Instagram, Facebook } from "lucide-react";

// Componente del Logo en formato SVG con el ViewBox ampliado
const LogoSVG = () => (
  <svg
    className="w-[220px] h-auto" // Lo hice un poco más grande visualmente también
    viewBox="0 0 300 80" // <--- ¡AQUÍ ESTÁ EL CAMBIO CLAVE! Aumentamos el ancho a 300
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Icono de Velocidad / Reloj */}
    <path
      d="M40 20C28.9543 20 20 28.9543 20 40C20 51.0457 28.9543 60 40 60C51.0457 60 60 51.0457 60 40"
      stroke="white"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      d="M10 30H30M5 40H25M10 50H30"
      stroke="white"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      d="M40 28V40L48 44"
      stroke="#F3D066"
      strokeWidth="4"
      strokeLinecap="round"
    />
    
    {/* Texto "tu" */}
    <text x="75" y="30" fill="#F3D066" fontSize="18" fontWeight="bold" fontFamily="Helvetica, sans-serif">tu</text>
    
    {/* Texto "CONTADOR" */}
    <text x="70" y="55" fill="white" fontSize="30" fontWeight="900" fontFamily="Times New Roman, serif" style={{ letterSpacing: '0px' }}>CONTADOR</text>
    
    {/* Texto "EXPRESS" */}
    <text x="70" y="75" fill="white" fontSize="24" fontWeight="900" fontFamily="Times New Roman, serif" style={{ letterSpacing: '4px' }}>EXPRESS</text>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-[#092327] text-white relative">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 items-start">
          
          {/* Logo y Eslogan */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left md:col-span-4">
            <a href="/" className="mb-4">
              <LogoSVG />
            </a>
            <p className="text-sm font-medium text-gray-300 max-w-[250px]">
              Tu socio estratégico en contabilidad y finanzas.
            </p>
          </div>

          {/* Navegación - Columna 1 */}
          <div className="flex flex-col items-center md:items-start md:col-span-2">
            <h4 className="font-bold text-lg mb-4">Navegación</h4>
            <ul className="space-y-2 text-center md:text-left">
              <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#Nosotros" className="text-gray-400 hover:text-white transition-colors">Sobre Nosotros</a></li>
              <li><a href="#servicios" className="text-gray-400 hover:text-white transition-colors">Nuestros Servicios</a></li>
            </ul>
          </div>

          {/* Navegación - Columna 2 (Sin Título visible) */}
          <div className="flex flex-col items-center md:items-start md:col-span-3">
            <h4 className="invisible mb-4">Más</h4>
            <ul className="space-y-2 text-center md:text-left">
              <li><a href="#como-funcionamos" className="text-gray-400 hover:text-white transition-colors">¿Cómo Funcionamos?</a></li>
              <li><a href="#soluciones" className="text-gray-400 hover:text-white transition-colors">Lo que necesitas</a></li>
              <li><a href="#contacto" className="text-gray-400 hover:text-white transition-colors">Contactanos</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="flex flex-col items-center md:items-end md:col-span-3">
            <h4 className="font-bold text-lg mb-4">Contacto</h4>
            <a href="https://api.whatsapp.com/send/?phone=5491171332855" className="text-gray-400 mb-4 hover:text-white">
              +54 9 11 7133 2855
            </a>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/tucontador.express/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F3D066] p-2 rounded-lg hover:bg-[#e4c055] transition-colors"
              >
                <Instagram size={24} className="text-[#092327]" />
              </a>
              <a
                href="https://www.facebook.com/tucontadorexpress"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F3D066] p-2 rounded-lg hover:bg-[#e4c055] transition-colors"
              >
                <Facebook size={24} className="text-[#092327]" />
              </a>
            </div>
          </div>
        </div>

        {/* Línea Divisoria y Copyright */}
        <div className="mt-16 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © 2025 Tu Contador Express. Todos los derechos reservados.
          </p>
        </div>
      </div>

      {/* Botón Flotante WhatsApp */}
      <a 
        href="https://api.whatsapp.com/send/?phone=5491171332855"
        className="fixed bottom-6 right-6 bg-[#25D366] flex items-center gap-2 px-4 py-2 rounded-md shadow-lg hover:scale-105 transition-transform z-50"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="text-white font-bold text-sm">Hablemos por WhatsApp</span>
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WA" className="w-6 h-6 invert" />
      </a>
    </footer>
  );
};

export default Footer;