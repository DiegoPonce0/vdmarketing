export default function AboutUsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 grid gap-8 md:grid-cols-2 md:items-center">
        <img
          src="/images/about-us.webp"
          alt="About us"
          className="rounded-lg h-64 md:h-96 w-full object-cover"
        />

        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            About Us
          </h2>
          <p className="text-gray-600 mb-8">
            We are a team of professionals dedicated to creating digital solutions that drive your business forward.
          </p>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Fast Delivery</h3>
                <p className="text-gray-600 text-sm">We use agile methodologies to ensure fast delivery without compromising quality.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Mobile Optimization</h3>
                <p className="text-gray-600 text-sm">We optimize every site mobile-first to ensure a seamless experience across all devices.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">SEO Friendly</h3>
                <p className="text-gray-600 text-sm">We optimize our sites to improve search engine rankings.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Secure & Scalable</h3>
                <p className="text-gray-600 text-sm">We develop secure solutions that scale with your business needs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
