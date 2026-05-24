import Link from "next/link";

export default function DetailServiceSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Nuestros Servicios
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {/* Service Card 1 - Landing Page */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Landing Page
            </h3>
            <p className="text-gray-600 mb-4">
              Creamos landing pages de alto impacto diseñadas para convertir visitantes en clientes. Cada página está optimizada para campañas de marketing digital con enfoque en resultados medibles.
            </p>
            <ul className="text-left text-gray-600 text-sm space-y-1 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                Diseño orientado a conversión
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                Optimizadas para campañas PPC y redes sociales
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                Integración con analytics y CRM
              </li>
            </ul>
            <Link
              href="/contact"
              className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Ir a contacto
            </Link>
          </div>

          {/* Service Card 2 - Website */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Website
            </h3>
            <p className="text-gray-600 mb-4">
              Desarrollamos aplicaciones web ultrarrápidas y de alta disponibilidad utilizando Next.js y stacks modernos. El rendimiento no es un complemento; es nuestra base.
            </p>
            <ul className="text-left text-gray-600 text-sm space-y-1 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                Especialistas en Next.js y React
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                Tiempos de carga inferiores a 1 segundo
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                Accesibilidad ante todo (WCAG)
              </li>
            </ul>
            <Link
              href="/contact"
              className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Ir a contacto
            </Link>
          </div>

          {/* Service Card 3 - Ecommerce */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <div className="text-4xl mb-4">🛒</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Ecommerce
            </h3>
            <p className="text-gray-600 mb-4">
              Maximiza tus ingresos con builds personalizados de Shopify Plus y soluciones headless commerce diseñadas para conversiones de alto volumen.
            </p>
            <ul className="text-left text-gray-600 text-sm space-y-1 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                Migración a Shopify Plus
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                Optimización de tasa de conversión
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                Integración de pagos sin fricción
              </li>
            </ul>
            <Link
              href="/contact"
              className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Ir a contacto
            </Link>
          </div>

          {/* Service Card 4 - SEO */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              SEO
            </h3>
            <p className="text-gray-600 mb-4">
              Posiciona más alto y mantente ahí. Nuestro SEO técnico basado en datos y estrategias de contenido garantizan un crecimiento orgánico sostenible y escalable.
            </p>
            <ul className="text-left text-gray-600 text-sm space-y-1 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                Auditoría de Core Web Vitals
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                Estrategia de contenido semántico
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                Seguimiento de ranking local y global
              </li>
            </ul>
            <Link
              href="/contact"
              className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Ir a contacto
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
