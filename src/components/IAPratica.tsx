// src/components/IAPratica.tsx

"use client";

import Image from "next/image";
import Link from "next/link";

export default function IAPratica() {
  return (
    <section className="py-20 px-6 bg-[#050605]">
      <div className="max-w-6xl mx-auto">
        {/* Título e descrição */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#F7F3EA]">
            IA aplicada com contexto, não como promessa vazia
          </h2>
          <p className="text-[#B8B0A3] text-lg max-w-3xl mx-auto">
            A IA entra quando existe processo, dado e objetivo claro. O foco é reduzir atrito operacional, apoiar decisões e liberar tempo sem substituir o olhar humano.
          </p>
        </div>

        {/* Grid imagem + cards */}
        <div className="mb-8 grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Imagem */}
          <div className="relative min-h-[22rem] overflow-hidden rounded-xl border border-[#F59A23]/20 bg-[#111315] sm:min-h-[28rem] lg:min-h-0">
            <Image
              src="/ia-contexto-operacional.png"
              alt="Fluxo operacional com IA contextual, dados e automação"
              className="object-cover"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
          </div>

          {/* Cards */}
          <div className="grid gap-6">
            <div className="flex min-h-[9.5rem] flex-col justify-center rounded-xl border border-[#F59A23]/20 bg-[#111315] p-8 transition-all hover:border-[#F59A23]/40">
              <h3 className="font-semibold text-[#F7F3EA] mb-2">Atendimento automático</h3>
              <p className="text-sm text-[#B8B0A3]">
                Bots que entendem o que o cliente quer, respondem com contexto e liberam sua equipe para o que importa.
              </p>
            </div>
            <div className="flex min-h-[9.5rem] flex-col justify-center rounded-xl border border-[#F59A23]/20 bg-[#111315] p-8 transition-all hover:border-[#F59A23]/40">
              <h3 className="font-semibold text-[#F7F3EA] mb-2">Geração de conteúdo</h3>
              <p className="text-sm text-[#B8B0A3]">
                Automatize respostas, propostas, mensagens e textos com linguagem natural e personalizada.
              </p>
            </div>
            <div className="flex min-h-[9.5rem] flex-col justify-center rounded-xl border border-[#F59A23]/20 bg-[#111315] p-8 transition-all hover:border-[#F59A23]/40">
              <h3 className="font-semibold text-[#F7F3EA] mb-2">Tomada de decisão</h3>
              <p className="text-sm text-[#B8B0A3]">
                Análise de dados, classificação de leads, priorização de tarefas — tudo orientado por IA.
              </p>
            </div>
          </div>
        </div>

        {/* Botão centralizado chamando o blog */}
        <div className="text-center py-3">
          <Link
            href="/blog"
            className="inline-block bg-[#F59A23] text-black font-semibold py-3 px-8 rounded-lg hover:bg-[#E0851D] transition-colors"
          >
            Ver insights práticos
          </Link>
        </div>
      </div>
    </section>
  );
}
