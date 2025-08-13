// src/components/Header.tsx

"use client";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <nav
      id="main-nav"
      className="fixed top-0 left-0 w-full z-50 bg-[#3031A3] text-white shadow transition-colors duration-300"
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

        {/* Menu */}
        <ul className="hidden md:flex space-x-6 text-base font-semibold">
          <li>
            <Link href="/#sobre" className="hover:text-[#FF005C]">
              Quem somos
            </Link>
          </li>
          <li>
            <Link href="/#servicos" className="hover:text-[#FF005C]">
              Serviços
            </Link>
          </li>
            <li>
            <Link href="/blog" className="hover:text-[#FF005C]">
              IA na Prática
            </Link>
          </li>
          <li>
            <Link href="/#contato" className="hover:text-[#FF005C]">
              Contato
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
