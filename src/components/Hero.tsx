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
        className="absolute top-0 left-0 w-full h-full object-cover object-[64%_center] z-0 sm:object-[58%_center] lg:object-center"
        fill
        priority
      />

      {/* Gradiente para legibilidade */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/10 z-10"></div>
      <div className="absolute inset-y-0 left-0 z-10 w-[62%] bg-black/35 blur-3xl"></div>

      {/* Conteúdo */}
      <div className="relative z-20 flex min-h-full w-full items-center px-5 pt-16 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        <div className="w-full max-w-[42rem] text-left lg:max-w-[46rem] xl:max-w-[48rem]">
          {/* Eyebrow */}
          <p className="mb-4 text-left text-xs font-semibold uppercase tracking-wide text-[#F59A23] sm:text-sm md:text-base">
            TECNOLOGIA QUE ORGANIZA. PESSOAS QUE FAZEM ACONTECER.
          </p>

          {/* Headline */}
          <h1 className="text-left text-[clamp(2.25rem,5.2vw,4.25rem)] font-bold leading-[1.06] text-[#F7F3EA]">
            Automação e IA acessível para <span className="text-[#F59A23]">pequenos negócios</span>
          </h1>

          {/* Descrição */}
          <p className="mt-6 max-w-[38rem] text-left text-base leading-relaxed text-[#D0C7B8] sm:text-lg md:text-xl">
            Soluções simples e práticas para organizar processos, integrar dados e tomar melhores decisões. Menos retrabalho. Mais clareza. Mais tempo para o que importa.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row md:mt-10 md:gap-6">
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
