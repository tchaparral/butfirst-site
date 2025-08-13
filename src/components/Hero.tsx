// src/components/Hero.tsx

import Image from "next/image";

export default function Hero() {
  return (
    <header
      id="top"
      className="relative h-[800px] md:h-[720px] bg-[#3031A3] text-white flex items-center justify-center text-center overflow-hidden"
    >
      {/* Imagem de fundo */}
      <Image
        src="/hero_section.png"
        alt="Mulher negra analisando dashboard no computador"
        className="absolute top-0 left-0 w-full h-full object-cover object-[60%_40%] z-0"
        width={600}
        height={200}
      />

      {/* Camada de escurecimento */}
      <div className="absolute inset-0 bg-[#3031A3]/60 z-10"></div>

      {/* Conteúdo */}
      <div className="relative z-20 px-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          Automatize. Escale. Tome seu café.
        </h1>
        <p className="mt-4 text-lg max-w-xl mx-auto">
          Soluções em automação e atendimento inteligente para sua empresa.
        </p>
      </div>
    </header>
  );
}