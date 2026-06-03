import Link from "next/link";

export default function ContactSection() {
  return (
    <section className="py-16 bg-surface">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Ready to grow your business online?
        </h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Join dozens of successful businesses that have transformed their digital presence with our help. Let&apos;s build something extraordinary together.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-700 transition"
        >
          Schedule a Free Consultation
        </Link>
      </div>
    </section>
  );
}
