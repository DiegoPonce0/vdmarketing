"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "Most custom development projects range from 8 to 16 weeks depending on complexity. Marketing setups can be launched in as little as 2 weeks, while larger eCommerce builds may require additional time for thorough testing and migration.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "Our pricing is tailored to the scope, complexity, and goals of each project. We offer fixed-price packages for clearly defined deliverables and flexible monthly retainers for ongoing development, SEO, and digital marketing services. Contact us for a customized proposal that aligns with your business objectives.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Yes. We offer ongoing maintenance, performance monitoring, security updates, and feature enhancements after launch. Whether you need technical support, content updates, SEO improvements, or marketing optimization, our team can provide scalable support plans to ensure your digital presence continues to grow.",
  },
];

export default function FAQServiceSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-surface">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Frequently Asked Questions
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
                className="w-full flex justify-between items-center px-6 py-4 text-left text-gray-800 font-semibold hover:bg-surface transition"
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
