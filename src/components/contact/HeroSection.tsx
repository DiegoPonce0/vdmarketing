export default function HeroSection() {
  return (
    <section className="relative py-24 bg-gray-900 flex items-center min-h-[400px]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/contact-us.webp)" }}
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Hablemos de tu proyecto
        </h2>
        <p className="text-lg text-gray-200 max-w-xl mx-auto">
          Cuéntanos sobre tu proyecto y cómo podemos ayudarte a crecer en línea.
        </p>
      </div>
    </section>
  );
}
