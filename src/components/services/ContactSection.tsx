import Link from "next/link";

export default function ContactSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8 md:p-12 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            ¿Listo para comenzar tu proyecto?
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Únete a más de 200 empresas que han escalado su huella digital con nuestro enfoque de crecimiento impulsado por la ingeniería.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-700 transition"
            >
              Agenda una consulta gratuita
            </Link>
            <Link
              href="/portfolio"
              className="border border-blue-600 text-blue-600 font-semibold px-6 py-3 rounded-md hover:bg-blue-50 transition"
            >
              Ver nuestro portafolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
