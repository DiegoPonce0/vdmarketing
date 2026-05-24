import Link from "next/link";

export default function ContactSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          ¿Listo para hacer crecer tu negocio en línea?
        </h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Únete a docenas de empresas exitosas que han transformado su presencia digital con nuestra ayuda. Construyamos algo extraordinario juntos.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-700 transition"
        >
          Agenda una consulta gratuita
        </Link>
      </div>
    </section>
  );
}
