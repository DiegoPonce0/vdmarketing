"use client";

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const filters = ["Marketing", "Design", "All", "SEO", "Strategies"];

export default function SearchBar({
  searchTerm,
  onSearchChange,
  activeFilter,
  onFilterChange,
}: SearchBarProps) {
  return (
    <section className="py-8 bg-gray-50 border-y border-gray-200">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 md:gap-0">
        <div className="w-full md:max-w-md">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search articles..."
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-wrap gap-2 justify-start md:justify-end">
          {filters.map((filter) => {
            const filterValue = filter === "All" ? "All" : filter;
            const isActive = activeFilter === filterValue;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => onFilterChange(filterValue)}
                className={`text-sm font-medium px-4 py-2 rounded-md transition ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
