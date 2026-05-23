export default function AboutUsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Sobre nosotros
        </h2>
        <p className="text-gray-600 text-center mb-12">
          Somos un equipo de profesionales dedicados a crear soluciones digitales que impulsen tu negocio.
        </p>
      </div>

        <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Entrega Rapida
                </h3>
                <p className="text-gray-600">
                Utilizamos metodologías ágiles para garantizar entregas rápidas sin comprometer la calidad.
                </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Optimizacion Mobile
                </h3>
                <p className="text-gray-600">
                Optimizamos cada sitio con mobile-first para asegurar una experiencia fluida en todos los dispositivos.
                </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                SEO Friendly
                </h3>
                <p className="text-gray-600">
                Optimizamos nuestros sitios para mejorar el posicionamiento en los motores de búsqueda.
                </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Seguras y Escalables
                </h3>
                <p className="text-gray-600">
                Desarrollamos soluciones que son seguras y pueden escalar con las necesidades de tu negocio.
                </p>
            </div>
        </div>
    </section>
  );
}