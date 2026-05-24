export default function Newsletter() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Mantente informado con las últimas novedades.
          </h2>
          <p className="text-gray-600 mb-6">
            Regístrate para recibir nuestras últimas novedades y actualizaciones en marketing digital directo a tu email cada mes.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="tu@email.com"
              className="flex-1 border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-700 transition whitespace-nowrap"
            >
              Suscríbete ahora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
