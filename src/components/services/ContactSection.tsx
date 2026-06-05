import Link from "next/link";

export default function ContactSection() {
  return (
    <section className="py-16 bg-surface">
      <div className="mx-2 md:mx-4 bg-white rounded-lg shadow-md p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Join over 200 companies that have scaled their digital footprint with our engineering-led approach to growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-700 transition"
            >
              Book a Free Consultation
            </Link>
            <Link
              href="/portfolio"
              className="border border-blue-600 text-blue-600 font-semibold px-6 py-3 rounded-md hover:bg-blue-50 transition"
            >
              View Our Portfolio
            </Link>
          </div>
        </div>
    </section>
  );
}
