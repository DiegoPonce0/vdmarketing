export default function HowWeWorkSection() {
  const steps = [
    {
      num: "01",
      title: "Discovery",
      desc: "Deep dive into your business, audience, and technical needs.",
    },
    {
      num: "02",
      title: "Strategy",
      desc: "Mapping out the roadmap, tech stack, and marketing funnel.",
    },
    {
      num: "03",
      title: "Design",
      desc: "High-fidelity interfaces focused on UX and brand identity.",
    },
    {
      num: "04",
      title: "Development",
      desc: "Clean, scalable code developed with agile methodologies.",
    },
    {
      num: "05",
      title: "Launch",
      desc: "Deployment, testing, and scaling your digital presence.",
    },
  ];

  return (
    <section className="py-16 bg-surface">
      <div className="mx-2 md:mx-4 bg-white rounded-lg shadow-md p-6 md:p-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          How We Work
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          A streamlined path from initial idea to market leader.
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
