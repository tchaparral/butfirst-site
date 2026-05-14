// src/components/Footer.tsx

"use client";

export default function Footer() {
  return (
    <footer className="bg-[#050605] text-[#F7F3EA] py-10 px-6 text-center border-t border-[#F59A23]/20">
      <p>&copy; 2025 But First Coffee. Todos os direitos reservados.</p>
      <p className="mt-2 text-xs text-[#B8B0A3]">Desenvolvido por B1st Dev Crew ☕</p>
      <div className="mt-6 pt-6 space-x-4 text-[#B8B0A3] text-sm flex flex-wrap justify-center gap-4 border-t border-[#F59A23]/20">
        <a href="#sobre" className="hover:text-[#F59A23] transition-colors">
          Sobre nós
        </a>
        <a href="/politica-de-privacidade" className="hover:text-[#F59A23] transition-colors">
          Política de Privacidade
        </a>
        <a href="/termos-de-uso" className="hover:text-[#F59A23] transition-colors">
          Termos de Uso
        </a>
        <a href="#contato" className="hover:text-[#F59A23] transition-colors">
          Contato
        </a>
      </div>
    </footer>
  );
}
