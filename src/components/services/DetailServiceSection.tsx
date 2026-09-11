import Link from "next/link";

const services = [
  {
    title: "Ecommerce",
    icon: (
      <svg className="w-10 h-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    desc: "Maximize your revenue with custom Shopify Plus builds and headless commerce solutions designed for high-volume conversions.",
    features: [
      "Shopify Plus migration",
      "Conversion rate optimization",
      "Seamless payment integration",
    ],
    price: 899,
  },
  {
    title: "Website",
    icon: (
      <svg className="w-10 h-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    desc: "We build lightning-fast, highly available web applications using Next.js and modern stacks. Performance isn't an afterthought; it's our baseline.",
    features: [
      "Next.js and React specialists",
      "Sub-second load times",
      "Accessibility first (WCAG)",
    ],
    price: 599,
  },
  {
    title: "Landing Page",
    icon: (
      <svg className="w-10 h-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    desc: "We create high-impact landing pages designed to turn visitors into customers. Every page is optimized for digital marketing campaigns focused on measurable results.",
    features: [
      "Conversion-focused design",
      "Optimized for PPC and social media campaigns",
      "Analytics and CRM integration",
    ],
    price: 399,
  },
  {
    title: "SEO",
    icon: (
      <svg className="w-10 h-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    desc: "Rank higher and stay there. Our data-driven technical SEO and content strategies ensure your organic growth is sustainable and scalable.",
    features: [
      "Core Web Vitals audit",
      "Semantic content strategy",
      "Local and global rank tracking",
    ],
    price: 99,
  },
];

export default function DetailServiceSection() {
  return (
    <section className="py-16 bg-surface">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto">
          {services.map((service, idx) => (
            <div key={idx} className="bg-[#F8FAFC] border border-gray-100 rounded-lg shadow-md p-8 flex flex-col items-start hover:shadow-lg transition">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-lg mb-4">{service.desc}</p>
              <ul className="text-left text-gray-600 text-base space-y-1 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="text-gray-800 text-lg mb-6">
                From <span className="text-blue-600 font-bold">${service.price}</span>
              </p>
              <Link
                href="/contact"
                className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-700 transition"
              >
                Get in Touch
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
