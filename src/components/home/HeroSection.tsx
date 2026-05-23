{/*
  HeroSection component
  - Main headline: "Transformamos tu presencia digital"
  - Subheadline describing the agency
  - Two CTA buttons: "Ver servicios" + "Contáctanos"
  - Background gradient or image
*/}


export default function HeroSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Websites que generan resultados
        </h2>
        <p className="text-gray-600 text-center mb-12">
          Creamos sitios web personalizados que impulsan tu negocio en línea.
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
            Ver servicios
          </button>
          <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-300 transition">
            Contáctanos
          </button>
        </div>
      </div>
    </section>
  );
}