export default function Footer() {
  return (
    <nav>
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between">
        {/* Logo and description */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-xl font-bold text-gray-800">VDMarketing</h2>
          <p className="text-gray-600 mt-1">
            Transformamos tu presencia digital con diseño web, SEO y marketing.
          </p>
        </div>

        {/* Website links */}
        <div className="flex space-x-6 mb-4 md:mb-0">
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

        {/* Social media placeholders */}
        <div className="flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Facebook
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Instagram
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            LinkedIn
          </a>
        </div>
      </div>
    </nav>
  );
}