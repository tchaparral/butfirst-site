// src/components/Header.tsx

"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      id="main-nav"
      className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-sm text-white shadow transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/branco_logotipo.svg"
            alt="Logo"
            width={128}
            height={32}
            priority
            className="h-8 w-auto transition-all duration-300"
          />
        </Link>

        {/* Menu Desktop */}
        <ul className="hidden md:flex space-x-6 text-base font-semibold">
          <li>
            <Link href="/#sobre" className="hover:text-[#F59A23] transition-colors">
              Sobre
            </Link>
          </li>
          <li>
            <Link href="/#solucoes" className="hover:text-[#F59A23] transition-colors">
              Soluções
            </Link>
          </li>
          <li>
            <Link href="/#como-funciona" className="hover:text-[#F59A23] transition-colors">
              Como funciona
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-[#F59A23] transition-colors">
              Insights
            </Link>
          </li>
          <li>
            <Link href="/#contato" className="hover:text-[#F59A23] transition-colors">
              Contato
            </Link>
          </li>
        </ul>

        {/* CTA Header */}
        <div className="hidden md:block">
          <Link
            href="/#contato"
            className="px-4 py-2 bg-[#F59A23] text-black font-semibold rounded hover:bg-[#E0851D] transition-colors"
          >
            Vamos conversar
          </Link>
        </div>

        {/* Menu Mobile Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm border-t border-gray-800">
          <ul className="px-6 py-4 space-y-4 text-base font-semibold">
            <li>
              <Link href="/#sobre" className="block hover:text-[#F59A23] transition-colors" onClick={() => setIsMenuOpen(false)}>
                Sobre
              </Link>
            </li>
            <li>
              <Link href="/#solucoes" className="block hover:text-[#F59A23] transition-colors" onClick={() => setIsMenuOpen(false)}>
                Soluções
              </Link>
            </li>
            <li>
              <Link href="/#como-funciona" className="block hover:text-[#F59A23] transition-colors" onClick={() => setIsMenuOpen(false)}>
                Como funciona
              </Link>
            </li>
            <li>
              <Link href="/blog" className="block hover:text-[#F59A23] transition-colors" onClick={() => setIsMenuOpen(false)}>
                Insights
              </Link>
            </li>
            <li>
              <Link href="/#contato" className="block hover:text-[#F59A23] transition-colors" onClick={() => setIsMenuOpen(false)}>
                Contato
              </Link>
            </li>
            <li className="pt-4">
              <Link
                href="/#contato"
                className="block px-4 py-2 bg-[#F59A23] text-black font-semibold rounded text-center hover:bg-[#E0851D] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Vamos conversar
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
