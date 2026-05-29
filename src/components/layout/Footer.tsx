export default function Footer() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and description */}
        <div className="text-center md:text-left md:pl-8">
          <h2 className="text-xl font-bold text-gray-800">VDMarketing</h2>
          <p className="text-gray-600 mt-1">
            Transformamos tu presencia digital con diseño web, SEO y marketing.
          </p>
        </div>

        {/* Website links */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Servicios
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Blog
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Contacto
          </a>
        </div>

        {/* Social media icons */}
        <div className="flex items-center justify-center md:justify-end md:pr-8 space-x-4">
          <a href="#" className="text-gray-600 hover:text-blue-600 transition" aria-label="Facebook">
            <svg className="w-6 h-6" fill="currentColor">
              <use href="/icons/sprite.svg#facebook" />
            </svg>
          </a>
          <a href="#" className="text-gray-600 hover:text-pink-600 transition" aria-label="Instagram">
            <svg className="w-6 h-6" fill="currentColor">
              <use href="/icons/sprite.svg#instagram" />
            </svg>
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-700 transition" aria-label="LinkedIn">
            <svg className="w-6 h-6" fill="currentColor">
              <use href="/icons/sprite.svg#linkedin" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
}
