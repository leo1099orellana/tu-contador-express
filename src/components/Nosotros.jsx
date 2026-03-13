import aboutImg from "../assets/images/about.webp";

const Nosotros = () => {
  return (
    <section id="Nosotros" className="bg-gray-50 py-8 md:mt-0">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="overflow-hidden">
            <img
              src={aboutImg}
              alt="Tu socio estratégico en crecimiento"
              width={500}
              height={500}
              className="h-full w-full objects-contain"
            />
          </div>
          <div>
            <p className="font-bold text-orange-600">SOBRE NOSOTROS</p>
            <h2 className="mt-2 text-3xl text-green-800 md:text-4xl">
              Tu socio estratégico en crecimiento
            </h2>
            <p className="mt-6 font-normal text-[#002B49]">
              Entendemos los desafíos de las PYMES y emprendedores. Combinamos
              conocimiento profundo con un enfoque práctico y centrado en el
              cliente para ofrecer resultados en los que puedes confiar. No solo
              somos tus contadores, somos parte de tu equipo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Nosotros;