export default function HeroSection() {
  return (
    <section className="relative py-24 bg-gray-900 flex items-center min-h-[500px]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/hero-home.webp)" }}
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Websites that drive results
        </h2>
        <p className="text-lg text-gray-200 mb-8 max-w-xl mx-auto">
          We build custom websites that grow your online business.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-md hover:bg-blue-700 transition">
            View Services
          </button>
          <button className="bg-white/20 text-white font-semibold px-8 py-3 rounded-md hover:bg-white/30 transition backdrop-blur-sm">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
