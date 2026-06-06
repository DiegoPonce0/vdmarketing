'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Logo from './Logo';

const navLinks = [
  { href: '/', label: 'HOME' },
  { href: '/services', label: 'SERVICES' },
  { href: '/portfolio', label: 'PORTFOLIO' },
  { href: '/blog', label: 'BLOG' },
  { href: '/contact', label: 'CONTACT' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100'>
      <div className='container mx-auto px-4 py-4 flex items-center justify-between relative'>
        <Link href='/'>
          <Logo />
        </Link>

        <nav className='hidden md:flex items-center space-x-8 absolute left-1/2 -translate-x-1/2'>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs font-bold tracking-widest ${
                pathname === link.href ? 'text-[#0047AB]' : 'text-gray-500 hover:text-gray-900'
              } transition-colors`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className='hidden md:flex items-center'>
          <Link
            href='/contact'
            className='bg-[#0047AB] text-white text-[10px] font-black tracking-[0.2em] px-6 py-3 rounded hover:bg-[#003d96] transition-all flex items-center gap-2'
          >
            BOOK A FREE CONSULTATION
          </Link>
        </div>

        <button className='md:hidden' onClick={() => setMenuOpen(!menuOpen)}>
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='md:hidden bg-white border-t border-gray-100 p-4 space-y-4'>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className='block text-xs font-bold tracking-widest text-gray-900'
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href='/contact'
            className='block bg-[#0047AB] text-white text-[10px] font-bold tracking-[0.2em] px-6 py-3 rounded text-center'
            onClick={() => setMenuOpen(false)}
          >
            BOOK A FREE CONSULTATION
          </Link>
        </div>
      )}
    </header>
  );
}
