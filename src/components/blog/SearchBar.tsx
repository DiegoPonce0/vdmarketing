export default function SearchBar() {
  return (
    <section className="py-8 bg-gray-50 border-y border-gray-200">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 md:gap-0">
        <div className="w-full md:max-w-md">
          <input
            type="text"
            placeholder="Buscar artículos..."
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-wrap gap-2 justify-start md:justify-end">
          <button type="button" className="text-sm font-medium bg-blue-100 text-blue-700 px-4 py-2 rounded-md cursor-pointer hover:bg-blue-200 transition">
            Marketing
          </button>
          <button type="button" className="text-sm font-medium bg-blue-100 text-blue-700 px-4 py-2 rounded-md cursor-pointer hover:bg-blue-200 transition">
            Diseño
          </button>
          <button type="button" className="text-sm font-medium bg-blue-100 text-blue-700 px-4 py-2 rounded-md cursor-pointer hover:bg-blue-200 transition">
            Todos los posts
          </button>
          <button type="button" className="text-sm font-medium bg-blue-100 text-blue-700 px-4 py-2 rounded-md cursor-pointer hover:bg-blue-200 transition">
            SEO
          </button>
          <button type="button" className="text-sm font-medium bg-blue-100 text-blue-700 px-4 py-2 rounded-md cursor-pointer hover:bg-blue-200 transition">
            Estrategias
          </button>
        </div>
      </div>
    </section>
  );
}
