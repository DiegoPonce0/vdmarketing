export default function HowWeWorkSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Como trabajamos
        </h2>
        <div className="grid gap-8 md:grid-cols-5">
          {/* Service Card 1 */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Landing Page
            </h3>
            <p className="text-gray-600 mb-4">
              Páginas de campaña diseñadas para convertir visitantes en clientes.
            </p>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Ver detalles
            </a>
          </div>

          {/* Service Card 2 */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Website
            </h3>
            <p className="text-gray-600 mb-4">
              Sitios corporativos e institucionales que reflejan tu marca.
            </p>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Ver detalles
            </a>
          </div>

          {/* Service Card 3 */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <div className="text-4xl mb-4">🛒</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Ecommerce
            </h3>
            <p className="text-gray-600 mb-4">
              Tiendas online con carrito de compras y procesamiento de pagos.
            </p>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Ver detalles
            </a>
          </div>

          {/* Service Card 4 */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              SEO Mensual
            </h3>
            <p className="text-gray-600 mb-4">
              Optimización continua para mejorar tu posicionamiento en buscadores.
            </p>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Ver detalles
            </a>
          </div>
          {/* Service Card 5 */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              SEO Mensual
            </h3>
            <p className="text-gray-600 mb-4">
              Optimización continua para mejorar tu posicionamiento en buscadores.
            </p>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Ver detalles
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}