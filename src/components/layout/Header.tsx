import Link from "next/link";

export default function Header() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-800">
          VDMarketing
        </Link>
      </div>
      <ul className="hidden md:flex space-x-6 container mx-auto px-4">
        <li>
          <Link href="/" className="text-gray-600 hover:text-gray-800">
            Inicio
          </Link>
        </li>
        <li className="relative group">
          <Link href="/services" className="text-gray-600 hover:text-gray-800">
            Servicios
          </Link>
        </li>
        <li>
          <Link href="/blog" className="text-gray-600 hover:text-gray-800">
            Blog
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-gray-600 hover:text-gray-800">
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
}