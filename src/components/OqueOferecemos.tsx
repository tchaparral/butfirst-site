// src/components/OqueOferecemos.tsx

"use client";

import Image from "next/image";

const cardClass =
  "group flex min-h-[20rem] flex-col items-center justify-center rounded-xl border border-[#F59A23]/20 bg-[#111315] px-6 py-8 transition-all duration-200 hover:-translate-y-1 hover:border-[#F59A23]/45 hover:bg-[#151719]";

const iconClass =
  "mb-7 h-32 w-auto scale-125 object-contain opacity-95 transition-transform duration-200 group-hover:scale-[1.32] sm:h-36 lg:h-32 xl:h-36";

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

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Card 1 */}
          <div className={cardClass}>
            <Image src="/icon-processos.png" alt="Processos" width={128} height={128} className={iconClass} />
            <h3 className="mb-3 text-lg font-bold leading-snug text-[#F7F3EA]">Processos que funcionam</h3>
            <p className="text-sm leading-relaxed text-[#B8B0A3]">
              Mapeamos rotinas, gargalos e retrabalho para transformar improviso em fluxo claro.
            </p>
          </div>

          {/* Card 2 */}
          <div className={cardClass}>
            <Image src="/icon-automacao.png" alt="Automação" width={128} height={128} className={iconClass} />
            <h3 className="mb-3 text-lg font-bold leading-snug text-[#F7F3EA]">Automação acessível</h3>
            <p className="text-sm leading-relaxed text-[#B8B0A3]">
              Automatizamos tarefas repetitivas em planilhas, CRMs, atendimento e rotinas administrativas.
            </p>
          </div>

          {/* Card 3 */}
          <div className={cardClass}>
            <Image src="/icon-dados.png" alt="Dados" width={128} height={128} className={iconClass} />
            <h3 className="mb-3 text-lg font-bold leading-snug text-[#F7F3EA]">Dados para decidir</h3>
            <p className="text-sm leading-relaxed text-[#B8B0A3]">
              Criamos indicadores simples para acompanhar operação, priorizar ações e reduzir decisões no escuro.
            </p>
          </div>

          {/* Card 4 */}
          <div className={cardClass}>
            <Image src="/icon-atendimento.png" alt="Atendimento" width={128} height={128} className={iconClass} />
            <h3 className="mb-3 text-lg font-bold leading-snug text-[#F7F3EA]">Atendimento e integrações</h3>
            <p className="text-sm leading-relaxed text-[#B8B0A3]">
              Conectamos canais, ferramentas e informações para diminuir trabalho manual e perda de contexto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
