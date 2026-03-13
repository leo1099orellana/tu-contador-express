import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import icon0018 from "../assets/icons/Icon_0018.webp";
import icon0017 from "../assets/icons/Icon_0017.webp";
import icon0016 from "../assets/icons/Icon_0016.webp";
const tabs = [
  "Crea tu Negocio",
  "Asesoramiento Impositivo",
  "Contabilidad",
  "Liquidación de Sueldos",
  "Certificaciones",
];

const cards = {
  "Crea tu Negocio": [
    {
      icon: icon0018,
      title: "Constitución y Encuadre",
      desc: "Definimos el tipo societario más conveniente y redactamos el contrato social. Realizamos el trámite normal o urgente en IGJ.",
    },
    {
      icon: icon0017,
      title: "Inscripciones y Altas",
      desc: "Gestionamos el CUIT, la vinculación de clave fiscal, el alta en impuestos (AFIP, Rentas) y la rúbrica de libros societarios.",
    },
    {
      icon: icon0016,
      title: "Asistencia Operativa",
      desc: "Te asistimos en los primeros pasos operativos: contratos, gestión de empleados, proveedores y consultoría personalizada.",
    },
  ],
};

const Servicios = () => {
    const [activeTab, setActiveTab] = useState("Crea tu Negocio");
    const currentCards = cards[activeTab] || [];
    
     return (
    <section id="servicios" className="bg-[#002B49] overflow-hidden">
      <div className="container mx-auto px-4 py-20 md:py-28">

        {/* Título */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-white text-3xl md:text-5xl">NUESTROS SERVICIOS</h2>
          <p className="mt-4 text-white/80">
            Ofrecemos una gama completa de soluciones diseñadas para cubrir cada aspecto de la salud financiera de tu negocio.
          </p>
        </div>

        {/* Tabs */}
        <div className="relative mt-12 border-b border-yellow-400">
          <div className="flex justify-start md:justify-around items-center -mb-px overflow-x-auto" style={{ scrollbarWidth: "none" }}>
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-shrink-0 px-4 py-3 font-bold text-xl transition-colors duration-200 border-b-2 ${
                  activeTab === tab
                    ? "border-yellow-300 text-yellow-300"
                    : "border-transparent text-white/60 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Descripción */}
        <div className="mx-auto mt-12">
          <p className="mx-auto mb-12 max-w-3xl text-white/80 text-center">
            No pierdas la oportunidad. Te ayudamos a establecerte con un servicio completo, adaptado a tus necesidades, desde el momento inicial.
          </p>

          {/* Mobile: Swiper */}
          <div className="block lg:hidden">
            <Swiper modules={[Pagination]} pagination={{ clickable: true }} spaceBetween={16} slidesPerView={1} className="pb-12">
              {currentCards.map((card) => (
                <SwiperSlide key={card.title} className="self-stretch">
                  <div className="flex flex-col items-center bg-white p-8 border border-gray-200 rounded-lg h-[40dvh] text-center">
                    <img src={card.icon} alt={card.title} width={80} height={80} className="w-20 h-20" />
                    <h3 className="mt-6 font-bold text-[#002B49] text-xl">{card.title}</h3>
                    <p className="flex-grow mt-2 text-orange-700">{card.desc}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Desktop: Grid */}
          <div className="hidden lg:flex justify-center gap-8">
            {currentCards.map((card) => (
              <div key={card.title} className="flex flex-col items-center bg-white p-8 border border-gray-200 rounded-lg w-[20dvw] text-center">
                <img src={card.icon} alt={card.title} width={80} height={80} className="w-20 h-20" />
                <h3 className="mt-6 font-bold text-[#002B49] text-xl">{card.title}</h3>
                <p className="flex-grow mt-2 text-orange-700">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Servicios;