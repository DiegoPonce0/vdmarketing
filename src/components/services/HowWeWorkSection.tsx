export default function HowWeWorkSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Cómo trabajamos
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Un camino optimizado desde la idea inicial hasta el líder del mercado.
        </p>
        <div className="grid gap-8 md:grid-cols-5">
          {/* Step 1 */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <span className="text-sm font-bold text-blue-600 mb-2">01</span>
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Descubrimiento
            </h3>
            <p className="text-gray-600 text-sm">
              Inmersión profunda en tu negocio, audiencia y necesidades técnicas.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <span className="text-sm font-bold text-blue-600 mb-2">02</span>
            <div className="text-4xl mb-4">🗺️</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Estrategia
            </h3>
            <p className="text-gray-600 text-sm">
              Trazando la hoja de ruta, el stack tecnológico y el embudo de marketing.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <span className="text-sm font-bold text-blue-600 mb-2">03</span>
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Diseño
            </h3>
            <p className="text-gray-600 text-sm">
              Interfaces de alta fidelidad enfocadas en UX e identidad de marca.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <span className="text-sm font-bold text-blue-600 mb-2">04</span>
            <div className="text-4xl mb-4">💻</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Desarrollo
            </h3>
            <p className="text-gray-600 text-sm">
              Código limpio y escalable desarrollado con metodologías ágiles.
            </p>
          </div>

          {/* Step 5 */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <span className="text-sm font-bold text-blue-600 mb-2">05</span>
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Lanzamiento
            </h3>
            <p className="text-gray-600 text-sm">
              Despliegue, pruebas y escalamiento de tu presencia digital.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
