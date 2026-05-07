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
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-8">
          {/* Imagem */}
          <div className="flex justify-center">
            <Image
              src="/ia-coffee-robot.png"
              alt="Automação e Machine Learning"
              className="max-h-[460px] object-contain rounded-xl"
              placeholder="blur"
              priority
            />
          </div>

          {/* Cards */}
          <div className="grid gap-6">
            <div className="bg-[#111315] p-8 rounded-xl border border-[#F59A23]/20 hover:border-[#F59A23]/40 transition-all">
              <h3 className="font-semibold text-[#F7F3EA] mb-2">Atendimento automático</h3>
              <p className="text-sm text-[#B8B0A3]">
                Bots que entendem o que o cliente quer, respondem com contexto e liberam sua equipe para o que importa.
              </p>
            </div>
            <div className="bg-[#111315] p-8 rounded-xl border border-[#F59A23]/20 hover:border-[#F59A23]/40 transition-all">
              <h3 className="font-semibold text-[#F7F3EA] mb-2">Geração de conteúdo</h3>
              <p className="text-sm text-[#B8B0A3]">
                Automatize respostas, propostas, mensagens e textos com linguagem natural e personalizada.
              </p>
            </div>
            <div className="bg-[#111315] p-8 rounded-xl border border-[#F59A23]/20 hover:border-[#F59A23]/40 transition-all">
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
