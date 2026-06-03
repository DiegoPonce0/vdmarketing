"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          VDMarketing
        </Link>

        <ul className="hidden md:flex items-center space-x-8">
          <li>
            <Link href="/" className="text-gray-600 hover:text-gray-800">
              Home
            </Link>
          </li>
          <li>
            <Link href="/services" className="text-gray-600 hover:text-gray-800">
              Services
            </Link>
          </li>
          <li>
            <Link href="/portfolio" className="text-gray-600 hover:text-gray-800">
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/blog" className="text-gray-600 hover:text-gray-800">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-600 hover:text-gray-800">
              Contact
            </Link>
          </li>
        </ul>

        <div className="md:hidden" />

        <button
          className="md:hidden p-2 text-gray-600 hover:text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-gray-200">
          <ul className="flex flex-col space-y-2 px-4 py-3">
            <li>
              <Link href="/" className="block text-gray-600 hover:text-gray-800" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="block text-gray-600 hover:text-gray-800" onClick={() => setMenuOpen(false)}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="block text-gray-600 hover:text-gray-800" onClick={() => setMenuOpen(false)}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/blog" className="block text-gray-600 hover:text-gray-800" onClick={() => setMenuOpen(false)}>
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block text-gray-600 hover:text-gray-800" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
