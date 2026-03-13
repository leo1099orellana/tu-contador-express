import { Instagram, Facebook, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/images/contador_express_general.webp";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">

        <a href="/" className="flex items-center gap-2">
          <img src={logo} alt="Tu Contador Express" width={140} height={140} className="h-auto w-[140px]" />
        </a>

        <div className="hidden md:flex gap-2">
          <a href="https://www.instagram.com/tucontador.express/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center rounded-lg bg-yellow-400 p-2.5 transition-colors hover:bg-yellow-500">
            <Instagram size={24} color="#002B49" />
          </a>
          <a href="https://www.facebook.com/tucontadorexpress" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center rounded-lg bg-yellow-400 p-2.5 transition-colors hover:bg-yellow-500">
            <Facebook size={24} color="#002B49" />
          </a>
          <a href="#contacto" className="flex items-center justify-center rounded-lg bg-yellow-400 px-6 py-2 font-extrabold text-[#002B49] transition-colors hover:bg-yellow-500">
            CONTÁCTANOS
          </a>
        </div>

        <button className="flex md:hidden items-center justify-center rounded-lg bg-yellow-400 p-2" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} color="#002B49" /> : <Menu size={24} color="#002B49" />}
        </button>

      </div>

      {menuOpen && (
        <div className="md:hidden flex flex-col gap-3 border-t border-gray-200 bg-white px-4 py-4">
          <a href="#Nosotros" onClick={() => setMenuOpen(false)} className="font-bold text-[#002B49] hover:text-yellow-500">Sobre Nosotros</a>
          <a href="#servicios" onClick={() => setMenuOpen(false)} className="font-bold text-[#002B49] hover:text-yellow-500">Servicios</a>
          <a href="#como-funcionamos" onClick={() => setMenuOpen(false)} className="font-bold text-[#002B49] hover:text-yellow-500">¿Cómo Funcionamos?</a>
          <a href="#soluciones" onClick={() => setMenuOpen(false)} className="font-bold text-[#002B49] hover:text-yellow-500">Lo que necesitas</a>
          <a href="#contacto" onClick={() => setMenuOpen(false)} className="flex justify-center rounded-lg bg-yellow-400 px-6 py-3 font-extrabold text-[#002B49] hover:bg-yellow-500">
            CONTÁCTANOS
          </a>
          <div className="flex gap-2">
            <a href="https://www.instagram.com/tucontador.express/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center rounded-lg bg-yellow-400 p-2.5 hover:bg-yellow-500">
              <Instagram size={24} color="#002B49" />
            </a>
            <a href="https://www.facebook.com/tucontadorexpress" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center rounded-lg bg-yellow-400 p-2.5 hover:bg-yellow-500">
              <Facebook size={24} color="#002B49" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;