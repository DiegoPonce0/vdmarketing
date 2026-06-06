export default function HeroSection() {
  return (
    <section className="pt-40 pb-24 bg-[#1E3A8A] text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-400/10 to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
        <h4 className="text-[10px] font-black tracking-[0.4em] uppercase text-blue-300 mb-6">Our Work</h4>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
          Crafting Digital Excellence
        </h1>
        <p className="text-xl md:text-2xl text-blue-100 font-light leading-relaxed">
          Explore how we combine strategic marketing with cutting-edge development to deliver measurable impact for global brands and local leaders.
        </p>
      </div>
    </section>
  );
}
