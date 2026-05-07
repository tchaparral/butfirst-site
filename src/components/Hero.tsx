// src/components/Hero.tsx

import Image from "next/image";

export default function Hero() {
  return (
    <header
      id="top"
      className="relative h-[800px] md:h-[720px] bg-[#050605] text-white flex items-center overflow-hidden"
    >
      {/* Imagem de fundo */}
      <Image
        src="/hero-b1st-dark.png"
        alt="Notebook com dashboards, café e fluxos de automação"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        width={1200}
        height={800}
        priority
      />

      {/* Gradiente para legibilidade */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent z-10"></div>

      {/* Conteúdo */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 flex items-center min-h-full">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <p className="text-[#F59A23] text-sm md:text-base font-semibold uppercase tracking-wide mb-4">
            TECNOLOGIA QUE ORGANIZA. PESSOAS QUE FAZEM ACONTECER.
          </p>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-[#F7F3EA] leading-tight">
            Automação e IA acessível para <span className="text-[#F59A23]">pequenos negócios</span>
          </h1>

          {/* Descrição */}
          <p className="mt-6 text-lg md:text-xl text-[#B8B0A3] leading-relaxed">
            Soluções simples e práticas para organizar processos, integrar dados e tomar melhores decisões. Menos retrabalho. Mais clareza. Mais tempo para o que importa.
          </p>

          {/* CTAs */}
          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 md:gap-6">
            {/* CTA Primário */}
            <a
              href="/#contato"
              className="px-8 py-4 bg-[#F59A23] text-black font-semibold rounded-lg hover:bg-[#E0851D] transition-colors duration-200 text-center"
            >
              Diagnosticar minha operação
            </a>

            {/* CTA Secundário */}
            <a
              href="/#como-funciona"
              className="px-8 py-4 border-2 border-[#F59A23] text-[#F59A23] font-semibold rounded-lg hover:bg-[#F59A23]/10 transition-colors duration-200 text-center"
            >
              Ver como funciona
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}