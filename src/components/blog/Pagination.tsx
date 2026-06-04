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
    <section className="py-16 bg-surface">
      <div className="flex justify-center items-center gap-2">
        <button
          type="button"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-3 py-2 text-sm rounded-md transition bg-white ${
            currentPage === 1
              ? "text-gray-400 border border-gray-200 cursor-default"
              : "text-gray-600 border border-gray-200 hover:bg-gray-100"
          }`}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            className={`px-3 py-2 text-sm rounded-md transition bg-white ${
              page === currentPage
                ? "font-semibold text-blue-600 border border-blue-600"
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
          className={`px-3 py-2 text-sm rounded-md transition bg-white ${
            currentPage === totalPages
              ? "text-gray-400 border border-gray-200 cursor-default"
              : "text-gray-600 border border-gray-200 hover:bg-gray-100"
          }`}
        >
          Next
        </button>
      </div>
    </section>
  );
}
