import { useState } from "react";

const Contacto = () => {
  const [nombre, setNombre] = useState("");
  const [opcion, setOpcion] = useState("");

  const whatsappUrl = `https://api.whatsapp.com/send/?phone=5491171332855&text=Hola!%20Quiero%20consultar%20por%20la%20opci%C3%B3n%3A%20*${encodeURIComponent(opcion)}*.%20Mi%20nombre%20es%3A%20*${encodeURIComponent(nombre)}*`;

  return (
    <section id="contacto" className="bg-gray-50">
      <div className="container mx-auto px-4 py-20 md:py-28">
        <div className="mx-auto max-w-3xl rounded-lg bg-[#002B49] p-8 shadow-2xl md:p-12">
          <div className="text-center">
            <h2 className="text-white text-3xl md:text-4xl">Contactanos</h2>
            <p className="mt-4 text-white/80">
              Completa el formulario y te contactaremos a la brevedad por
              WhatsApp.
            </p>
          </div>

          <div className="mt-10 space-y-6">
            <input
              type="text"
              placeholder="Nombre y Apellido"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="w-full rounded-lg border-2 border-transparent bg-white/10 p-4 text-white placeholder-white/50 transition-colors focus:border-yellow-300 focus:outline-none"
            />
            <select
              value={opcion}
              onChange={(e) => setOpcion(e.target.value)}
              className="w-full rounded-lg border-2 border-transparent bg-white/10 p-4 text-white transition-colors focus:border-yellow-300 focus:outline-none"
            >
              <option value="" disabled className="text-gray-500">
                Selecciona una opción...
              </option>
              <option
                value="Profesionales y Autónomos"
                className="bg-white text-black"
              >
                Profesionales y Autónomos
              </option>
              <option
                value="PyMEs, Negocios y Cooperativas"
                className="bg-white text-black"
              >
                PyMEs, Negocios y Cooperativas
              </option>
              <option
                value="Organizaciones y Fundaciones"
                className="bg-white text-black"
              >
                Organizaciones y Fundaciones
              </option>
              <option value="Sociedades" className="bg-white text-black">
                Sociedades
              </option>
              <option
                value="Solución Específica"
                className="bg-white text-black"
              >
                Solución Específica
              </option>
            </select>
       
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full rounded-lg bg-yellow-400 px-6 py-4 text-center text-lg font-bold text-[#002B49] transition-opacity hover:opacity-90"
            >
              Enviar consulta por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
