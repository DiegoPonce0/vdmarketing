import Link from "next/link";

export default function DetailServiceSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Service Card 1 - Landing Page */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Landing Page
            </h3>
            <p className="text-gray-600 mb-4">
              We create high-impact landing pages designed to turn visitors into customers. Every page is optimized for digital marketing campaigns focused on measurable results.
            </p>
            <ul className="text-left text-gray-600 text-sm space-y-1 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                Conversion-focused design
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                Optimized for PPC and social media campaigns
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                Analytics and CRM integration
              </li>
            </ul>
            <Link
              href="/contact"
              className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Get in Touch
            </Link>
          </div>

          {/* Service Card 2 - Website */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Website
            </h3>
            <p className="text-gray-600 mb-4">
              We build lightning-fast, highly available web applications using Next.js and modern stacks. Performance isn&apos;t an afterthought; it&apos;s our baseline.
            </p>
            <ul className="text-left text-gray-600 text-sm space-y-1 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                Next.js and React specialists
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                Sub-second load times
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                Accessibility first (WCAG)
              </li>
            </ul>
            <Link
              href="/contact"
              className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Get in Touch
            </Link>
          </div>

          {/* Service Card 3 - Ecommerce */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <div className="text-4xl mb-4">🛒</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Ecommerce
            </h3>
            <p className="text-gray-600 mb-4">
              Maximize your revenue with custom Shopify Plus builds and headless commerce solutions designed for high-volume conversions.
            </p>
            <ul className="text-left text-gray-600 text-sm space-y-1 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                Shopify Plus migration
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                Conversion rate optimization
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                Seamless payment integration
              </li>
            </ul>
            <Link
              href="/contact"
              className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Get in Touch
            </Link>
          </div>

          {/* Service Card 4 - SEO */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              SEO
            </h3>
            <p className="text-gray-600 mb-4">
              Rank higher and stay there. Our data-driven technical SEO and content strategies ensure your organic growth is sustainable and scalable.
            </p>
            <ul className="text-left text-gray-600 text-sm space-y-1 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                Core Web Vitals audit
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                Semantic content strategy
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                Local and global rank tracking
              </li>
            </ul>
            <Link
              href="/contact"
              className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
