export default function Newsletter() {
  return (
    <section className="py-16 bg-surface">
      <div className="mx-2 md:mx-4 bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Stay informed with the latest news.
        </h2>
        <p className="text-gray-600 mb-6">
          Sign up to receive our latest updates and digital marketing insights straight to your inbox every month.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md">
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-700 transition whitespace-nowrap"
          >
            Subscribe Now
          </button>
        </div>
      </div>
    </section>
  );
}
