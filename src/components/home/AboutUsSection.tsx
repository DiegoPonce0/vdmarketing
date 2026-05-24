export default function AboutUsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 grid gap-8 md:grid-cols-2 md:items-center">
        <div className="bg-gray-200 rounded-lg h-64 md:h-96 flex items-center justify-center text-gray-500 text-lg">
          Aquí va la imagen
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Sobre nosotros
          </h2>
          <p className="text-gray-600 mb-8">
            Somos un equipo de profesionales dedicados a crear soluciones digitales que impulsen tu negocio.
          </p>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Entrega Rápida</h3>
                <p className="text-gray-600 text-sm">Utilizamos metodologías ágiles para garantizar entregas rápidas sin comprometer la calidad.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Optimización Mobile</h3>
                <p className="text-gray-600 text-sm">Optimizamos cada sitio con mobile-first para asegurar una experiencia fluida en todos los dispositivos.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">SEO Friendly</h3>
                <p className="text-gray-600 text-sm">Optimizamos nuestros sitios para mejorar el posicionamiento en los motores de búsqueda.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Seguras y Escalables</h3>
                <p className="text-gray-600 text-sm">Desarrollamos soluciones que son seguras y pueden escalar con las necesidades de tu negocio.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
