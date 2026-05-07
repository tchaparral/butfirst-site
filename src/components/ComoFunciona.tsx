"use client";

import Image from "next/image";

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="py-20 px-6 bg-[#11100E]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Texto e Passos */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F7F3EA] mb-6">
            Antes de automatizar, entendemos a rotina.
          </h2>
          <p className="text-lg text-[#B8B0A3] mb-8 leading-relaxed">
            A B1st começa pelo processo: observa o dia a dia, identifica gargalos e só então aplica automação, dados ou IA onde fizer sentido.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-[#F59A23] text-black rounded-full flex items-center justify-center font-bold text-sm">
                1
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#F7F3EA] mb-2">Entender o dia a dia</h3>
                <p className="text-[#B8B0A3]">Observamos como as tarefas são feitas hoje, identificando padrões e pontos de atrito.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-[#F59A23] text-black rounded-full flex items-center justify-center font-bold text-sm">
                2
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#F7F3EA] mb-2">Mapear gargalos</h3>
                <p className="text-[#B8B0A3]">Analisamos onde há retrabalho, tarefas manuais desnecessárias ou desconexões entre ferramentas.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-[#F59A23] text-black rounded-full flex items-center justify-center font-bold text-sm">
                3
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#F7F3EA] mb-2">Organizar o processo</h3>
                <p className="text-[#B8B0A3]">Estruturamos fluxos claros e padronizados, criando base sólida para automação.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-[#F59A23] text-black rounded-full flex items-center justify-center font-bold text-sm">
                4
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#F7F3EA] mb-2">Automatizar o que faz sentido</h3>
                <p className="text-[#B8B0A3]">Aplicamos tecnologia onde reduz atrito real, mantendo controle e simplicidade.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-[#F59A23] text-black rounded-full flex items-center justify-center font-bold text-sm">
                5
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#F7F3EA] mb-2">Acompanhar indicadores</h3>
                <p className="text-[#B8B0A3]">Criamos métricas simples para monitorar resultados e ajustar conforme necessário.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Imagem */}
        <div className="lg:w-1/2">
          <Image
            src="/como-funciona.png"
            alt="Mesa com processo mapeado, post-its e notebook"
            className="w-full h-auto rounded-lg"
            width={600}
            height={400}
          />
        </div>
      </div>
    </section>
  );
}