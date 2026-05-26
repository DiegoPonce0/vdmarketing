"use client";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <section className="py-16 bg-gray-50">
      <div className="flex justify-center items-center gap-2">
        <button
          type="button"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-3 py-2 text-sm rounded-md transition ${
            currentPage === 1
              ? "text-gray-400 border border-gray-200 cursor-default"
              : "text-gray-600 border border-gray-200 hover:bg-gray-100"
          }`}
        >
          Anterior
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            className={`px-3 py-2 text-sm rounded-md transition ${
              page === currentPage
                ? "font-semibold text-white bg-blue-600"
                : "text-gray-600 border border-gray-200 hover:bg-gray-100"
            }`}
          >
            {page}
          </button>
        ))}
        <button
          type="button"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-3 py-2 text-sm rounded-md transition ${
            currentPage === totalPages
              ? "text-gray-400 border border-gray-200 cursor-default"
              : "text-gray-600 border border-gray-200 hover:bg-gray-100"
          }`}
        >
          Siguiente
        </button>
      </div>
    </section>
  );
}
