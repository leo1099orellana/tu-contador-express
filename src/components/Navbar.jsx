import { Instagram, Facebook } from "lucide-react";

const LogoSVGNavbar = () => (
  <svg
    className="w-[170px] h-auto"
    viewBox="0 0 300 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M40 20C28.9543 20 20 28.9543 20 40C20 51.0457 28.9543 60 40 60C51.0457 60 60 51.0457 60 40"
      stroke="#092327" 
      strokeLinecap="round"
    />
    <path
      d="M10 30H30M5 40H25M10 50H30"
      stroke="#092327" 
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      d="M40 28V40L48 44"
      stroke="#F3D066" 
      strokeWidth="4"
      strokeLinecap="round"
    />
    
    <text x="75" y="30" fill="#F3D066" fontSize="36" fontWeight="bold" fontFamily="sans-serif">tu</text>
    
    <text x="70" y="55" fill="#092327" fontSize="28" fontWeight="900" fontFamily="Times New Roman, serif" style={{ letterSpacing: '1px' }}>CONTADOR</text>
    
    <text x="70" y="75" fill="#092327" fontSize="26" fontWeight="900" fontFamily="Times New Roman, serif" style={{ letterSpacing: '4px' }}>EXPRESS</text>
  </svg>
);

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">

        <a href="/" className="flex items-center gap-2">
           <LogoSVGNavbar />
        </a>

        <div className="flex gap-3 items-center">
          <a 
            href="https://www.instagram.com/tucontador.express/" 
            target="_blank" 
            rel="noopener noreferrer" 
           
            className="flex items-center justify-center rounded-md bg-[#F3D066] p-2 transition-colors hover:bg-[#e4c055]"
          >
            <Instagram size={20} className="text-[#092327]" />
          </a>

          <a 
            href="https://www.facebook.com/tucontadorexpress" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center rounded-md bg-[#F3D066] p-2 transition-colors hover:bg-[#e4c055]"
          >
            <Facebook size={20} className="text-[#092327]" />
          </a>

          <a 
            href="#contacto" 
            className="flex items-center justify-center rounded-md bg-[#F3D066] px-6 py-2 text-sm font-extrabold text-[#092327] transition-colors hover:bg-[#e4c055] ml-2"
          >
            CONTÁCTANOS
          </a>
        </div>

      </div>
    </header>
  );
};

export default Navbar;