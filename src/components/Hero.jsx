import heroImage from "../assets/images/hero.webp";

const Hero = () => {
  return (
    <section className="container mx-auto px-4 pb-4">
      <div className="flex flex-col-reverse items-center gap-12 lg:grid lg:grid-cols-2">

        {/* Texto */}
        <div>
          <h1 className="text-4xl tracking-tighter text-[#002B49] md:text-5xl lg:text-6xl">
            Hacemos que la contabilidad <br />
            <span className="text-green-700">sea fácil, rápida y sin dolores de cabeza</span>
          </h1>
          <p className="mt-6 text-lg text-orange-700">
            Somos un equipo de profesionales que va un paso más allá del simple asesoramiento, brindando soluciones integrales y personalizadas para tu empresa.
          </p>
          <div className="mt-8 flex gap-4">
            <a href="#contacto" className="rounded-lg bg-[#E6B325] px-8 py-3 font-extrabold text-[#002B49] transition-colors hover:bg-yellow-400">
              CONTÁCTANOS
            </a>
          </div>
        </div>

        {/* Imagen */}
        <div className="aspect-square overflow-hidden">
          <img
            src={heroImage}
            alt="Contabilidad sin complicaciones para tu negocio"
            width={500}
            height={500}
            className="h-full w-full object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;