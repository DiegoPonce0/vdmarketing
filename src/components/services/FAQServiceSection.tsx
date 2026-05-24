"use client";

import { useState } from "react";

const faqs = [
  {
    question: "¿Cuánto tiempo toma un proyecto típico?",
    answer:
      "La mayoría de los proyectos de desarrollo personalizados toman de 8 a 16 semanas dependiendo de la complejidad. Las configuraciones de marketing pueden lanzarse en tan solo 2 semanas, mientras que los proyectos de eCommerce más grandes pueden requerir tiempo adicional para pruebas exhaustivas y migración.",
  },
  {
    question: "¿Cuál es su estructura de precios?",
    answer:
      "Nuestros precios se adaptan al alcance, complejidad y objetivos de cada proyecto. Ofrecemos paquetes de precio fijo para entregables claramente definidos y retainers mensuales flexibles para desarrollo continuo, SEO y servicios de marketing digital. Contáctanos para una propuesta personalizada que se alinee con tus objetivos de negocio.",
  },
  {
    question: "¿Ofrecen soporte post-lanzamiento?",
    answer:
      "Sí. Ofrecemos mantenimiento continuo, monitoreo de rendimiento, actualizaciones de seguridad y mejoras de funcionalidad después del lanzamiento. Ya sea que necesites soporte técnico, actualizaciones de contenido, mejoras SEO u optimización de marketing, nuestro equipo puede proporcionar planes de soporte escalables para asegurar que tu presencia digital siga creciendo.",
  },
];

export default function FAQServiceSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Preguntas Frecuentes
        </h2>
        <div className="flex flex-col gap-4 max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-gray-800 font-semibold hover:bg-gray-50 transition"
              >
                {faq.question}
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600 text-sm">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
