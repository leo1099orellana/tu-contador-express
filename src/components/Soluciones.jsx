const planes = [
  {
    title: "Profesionales y Autónomos",
    desc: "Soluciones integrales para profesionales independientes que buscan optimizar su gestión fiscal y contable.",
  },
  {
    title: "PyMEs, Negocios y Cooperativas",
    desc: "Un servicio completo para pequeñas y medianas empresas, cubriendo desde la contabilidad diaria hasta la planificación estratégica.",
  },
  {
    title: "Organizaciones y Fundaciones",
    desc: "Asesoramiento especializado para cooperativas, asociaciones y fundaciones, adaptado a sus normativas específicas.",
  },
];

const Soluciones = () => {
  return (
    <section id="soluciones" className="bg-[#002B49]">
      <div className="container mx-auto px-4 py-20 md:py-28">

        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-white text-3xl md:text-4xl">Lo que necesitas</h2>
          <p className="mt-4 text-lg text-white/80">Planes claros y flexibles, diseñados para adaptarse al tamaño y la naturaleza de tu actividad.</p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {planes.map((plan, index) => (
            <div key={index} className="flex flex-col rounded-lg bg-white p-8 shadow-lg">
              <h3 className="font-bold text-[#002B49] text-2xl">{plan.title}</h3>
              <p className="mt-4 flex-grow text-orange-800">{plan.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-6 rounded-lg bg-white p-8 md:flex-row">
          <div className="text-center md:text-left">
            <h3 className="font-bold text-[#002B49] text-2xl">Solución Específica</h3>
            <p className="mt-2 text-orange-800">Si tienes una necesidad puntual o un problema específico que resolver, te ofrecemos una solución a medida.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Soluciones;