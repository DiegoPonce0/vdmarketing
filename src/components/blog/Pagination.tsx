export default function Pagination() {
  return (
    <section className="py-16 bg-gray-50">
        <div className="flex justify-center items-center gap-2 py-12">
            <span className="px-3 py-2 text-sm text-gray-400 border border-gray-200 rounded-md cursor-default">
                Anterior
            </span>
            <span className="px-3 py-2 text-sm font-semibold text-white bg-blue-600 rounded-md cursor-default">
                1
            </span>
            <span className="px-3 py-2 text-sm text-gray-600 border border-gray-200 rounded-md cursor-default">
                2
            </span>
            <span className="px-3 py-2 text-sm text-gray-600 border border-gray-200 rounded-md cursor-default">
                3
            </span>
            <span className="px-3 py-2 text-sm text-gray-400 border border-gray-200 rounded-md cursor-default">
                Siguiente
            </span>
        </div>
    </section>
  );
}
