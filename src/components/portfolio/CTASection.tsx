import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-16 bg-surface">
      <div className="mx-2 md:mx-4 bg-white rounded-lg shadow-md p-8 md:p-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Want a Project Like This?
        </h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Tell us about your idea and we&apos;ll build a tailored solution for your business.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-md hover:bg-blue-700 transition"
        >
          Start Your Project
        </Link>
      </div>
    </section>
  );
}
