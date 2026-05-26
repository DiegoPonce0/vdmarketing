export default function HowWeWorkSection() {
  const steps = [
    {
      num: "01",
      title: "Descubrimiento",
      desc: "Inmersión profunda en tu negocio, audiencia y necesidades técnicas.",
    },
    {
      num: "02",
      title: "Estrategia",
      desc: "Trazando la hoja de ruta, el stack tecnológico y el embudo de marketing.",
    },
    {
      num: "03",
      title: "Diseño",
      desc: "Interfaces de alta fidelidad enfocadas en UX e identidad de marca.",
    },
    {
      num: "04",
      title: "Desarrollo",
      desc: "Código limpio y escalable desarrollado con metodologías ágiles.",
    },
    {
      num: "05",
      title: "Lanzamiento",
      desc: "Despliegue, pruebas y escalamiento de tu presencia digital.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Cómo trabajamos
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Un camino optimizado desde la idea inicial hasta el líder del mercado.
        </p>
        <div className="relative flex flex-col md:flex-row justify-between gap-8 md:gap-4">
          <div className="hidden md:block absolute top-6 left-6 right-6 h-0.5 bg-gray-200" />
          {steps.map((step) => (
            <div
              key={step.num}
              className="flex flex-col items-center text-center relative z-10"
            >
              <div className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center">
                <span className="text-sm font-bold text-blue-600">{step.num}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm max-w-[200px]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
