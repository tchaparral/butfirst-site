// src/components/OqueOferecemos.tsx

"use client";

import Image from "next/image";

export default function OqueOferecemos() {
  return (
    <section id="solucoes" className="py-20 px-6 bg-[#080A09]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#F7F3EA]">
          Soluções para reduzir atrito operacional
        </h2>
        <p className="text-lg text-[#B8B0A3] mb-12 max-w-3xl mx-auto">
          Organizamos rotinas, conectamos ferramentas e automatizamos o que realmente trava o dia a dia.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-[#111315] rounded-xl p-6 border border-[#F59A23]/20 hover:border-[#F59A23]/40 transition-all">
            <Image src="/icon-processos.png" alt="Processos" className="h-20 mb-4 mx-auto w-auto" />
            <h3 className="text-lg font-bold mb-2 text-[#F7F3EA]">Processos que funcionam</h3>
            <p className="text-sm text-[#B8B0A3]">
              Mapeamos rotinas, gargalos e retrabalho para transformar improviso em fluxo claro.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#111315] rounded-xl p-6 border border-[#F59A23]/20 hover:border-[#F59A23]/40 transition-all">
            <Image src="/icon-automacao.png" alt="Automação" className="h-20 mb-4 mx-auto w-auto" />
            <h3 className="text-lg font-bold mb-2 text-[#F7F3EA]">Automação acessível</h3>
            <p className="text-sm text-[#B8B0A3]">
              Automatizamos tarefas repetitivas em planilhas, CRMs, atendimento e rotinas administrativas.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#111315] rounded-xl p-6 border border-[#F59A23]/20 hover:border-[#F59A23]/40 transition-all">
            <Image src="/icon-dados.png" alt="Dados" className="h-20 mb-4 mx-auto w-auto" />
            <h3 className="text-lg font-bold mb-2 text-[#F7F3EA]">Dados para decidir</h3>
            <p className="text-sm text-[#B8B0A3]">
              Criamos indicadores simples para acompanhar operação, priorizar ações e reduzir decisões no escuro.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#111315] rounded-xl p-6 border border-[#F59A23]/20 hover:border-[#F59A23]/40 transition-all">
            <Image src="/icon-atendimento.png" alt="Atendimento" className="h-20 mb-4 mx-auto w-auto" />
            <h3 className="text-lg font-bold mb-2 text-[#F7F3EA]">Atendimento e integrações</h3>
            <p className="text-sm text-[#B8B0A3]">
              Conectamos canais, ferramentas e informações para diminuir trabalho manual e perda de contexto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
