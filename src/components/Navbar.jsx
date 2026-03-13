import { useState, useEffect } from "react";
import { Instagram, Facebook } from "lucide-react";

const logo = "/icons/contador_express_general.webp";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full border-b border-gray-200 bg-white overflow-hidden transition-all duration-300 ${scrolled ? "h-12 md:h-14" : "h-16 md:h-20"}`}>
      <div className="container mx-auto flex h-full items-center justify-between px-4">

        <a href="/" className="flex items-center">
          <img src={logo} alt="Tu Contador Express" className={`w-auto object-contain transition-all duration-300 ${scrolled ? "h-8 md:h-10" : "h-10 md:h-14"}`} />
        </a>

        <div className="flex gap-1.5 md:gap-2">
          <a href="https://www.instagram.com/tucontador.express/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center rounded-lg bg-yellow-400 p-2 md:p-2.5 transition-colors hover:bg-yellow-500">
            <Instagram size={18} className="md:w-[30px] md:h-[30px]" color="#002B49" />
          </a>
          <a href="https://www.facebook.com/tucontadorexpress" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center rounded-lg bg-yellow-400 p-2 md:p-2.5 transition-colors hover:bg-yellow-500">
            <Facebook size={18} className="md:w-[30px] md:h-[30px]" color="#002B49" />
          </a>
          <a href="#contacto" className="flex items-center justify-center rounded-lg bg-yellow-400 px-2 md:px-8 py-2 md:py-3 text-xs md:text-lg font-extrabold text-[#002B49] transition-colors hover:bg-yellow-500">
            CONTÁCTANOS
          </a>
        </div>

      </div>
    </header>
  );
};

export default Navbar;