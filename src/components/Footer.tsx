// src/components/Footer.tsx

"use client";

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-white py-10 px-6 text-center text-sm border-t border-gray-700 ">
      <p>&copy; 2025 But First Coffee. Todos os direitos reservados.</p>
      <p className="mt-2 text-gray-400">
        Identidade visual por{" "}
        <a href="http://fandmworks.com" target="_blank" rel="noopener noreferrer" className="underline">
          fandmworks
        </a>
      </p>
      <p className="mt-2 text-xs text-gray-500">Desenvolvido por B1st Dev Crew ☕</p>
      <div className="mt-6 pt-6 space-x-4 text-gray-400 text-sm flex flex-wrap justify-center gap-4">
        <a href="#sobre" className="hover:text-white transition-colors">
          Sobre nós
        </a>
        <a href="/politica-de-privacidade" className="hover:text-white transition-colors">
          Política de Privacidade
        </a>
        <a href="/termos-de-uso" className="hover:text-white transition-colors">
          Termos de Uso
        </a>
        <a href="#contato" className="hover:text-white transition-colors">
          Contato
        </a>
      </div>
    </footer>
  );
}
