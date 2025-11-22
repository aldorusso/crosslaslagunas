'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-verde-oscuro text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <Image
              src="/images/logo.png"
              alt="Logo Santibáñez el Bajo"
              width={50}
              height={50}
              className="object-contain"
            />
            <span className="text-xl md:text-2xl font-bold">CROSS LAS LAGUNAS</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-verde-claro transition-colors">
              Inicio
            </Link>
            <Link href="/categorias" className="hover:text-verde-claro transition-colors">
              Categorías
            </Link>
            <Link href="/inscripcion" className="hover:text-verde-claro transition-colors">
              Inscripción
            </Link>
            <Link href="/informacion" className="hover:text-verde-claro transition-colors">
              Información
            </Link>
            <Link href="/contacto" className="hover:text-verde-claro transition-colors">
              Contacto
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-verde-claro transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link
              href="/"
              className="block py-2 hover:text-verde-claro transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="/categorias"
              className="block py-2 hover:text-verde-claro transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Categorías
            </Link>
            <Link
              href="/inscripcion"
              className="block py-2 hover:text-verde-claro transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Inscripción
            </Link>
            <Link
              href="/informacion"
              className="block py-2 hover:text-verde-claro transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Información
            </Link>
            <Link
              href="/contacto"
              className="block py-2 hover:text-verde-claro transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
