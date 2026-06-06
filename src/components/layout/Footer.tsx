import Logo from './Logo';

export default function Footer() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center md:text-left md:pl-8">
          <Logo />
          <p className="text-gray-600 mt-3">
            We transform your online presence with web design, SEO, and marketing.
          </p>
        </div>

        <div className="flex flex-row items-center justify-center space-x-6">
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Services
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Blog
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Contact
          </a>
        </div>

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
