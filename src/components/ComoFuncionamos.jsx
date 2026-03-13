import icon0002 from "../assets/icons/Icon_0002.webp";
import icon0001 from "../assets/icons/Icon_0001.webp";
import icon0000 from "../assets/icons/Icon_0000.webp";

const pasos = [
  {
    icon: icon0002,
    title: "Consulta Inicial",
    desc: "En un primer encuentro conocemos tu negocio o empresa para ofrecerte el servicio adecuado para vos.",
  },
  {
    icon: icon0001,
    title: "Gestión Integral",
    desc: "Nos ocupamos de todas las obligaciones legales, impositivas y contables para que no tengas que preocuparte por nada.",
  },
  {
    icon: icon0000,
    title: "Informes Continuos",
    desc: "Recibís informes claros y asesoramiento continuo para la toma de decisiones estratégicas.",
  },
];

const ComoFuncionamos = () => {
  return (
    <section id="como-funcionamos" className="bg-gray-50">
      <div className="container mx-auto px-4 py-20 md:py-28">

        <div className="mb-20 text-center">
          <h2 className="text-3xl text-gray-800 md:text-4xl">¿Cómo Funcionamos?</h2>
          <p className="mx-auto mt-4 text-lg text-gray-500">
            Un proceso simple y transparente en tres pasos, diseñado para tu tranquilidad.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {pasos.map((paso, index) => (
            <div key={index} className="relative text-center">
              <div className="mx-auto mb-6 flex items-center justify-center rounded-full">
                <img src={paso.icon} alt={paso.title} width={80} height={80} className="w-20 h-20" />
              </div>
              <h3 className="font-bold text-2xl text-gray-800">{paso.title}</h3>
              <p className="mt-4 text-gray-500">{paso.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ComoFuncionamos;