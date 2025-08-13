// src/components/QuemSomos.tsx

"use client";

import Image from "next/image";
import atendimentoImg from "@/../public/atendimento-inteligente.png";

export default function QuemSomos() {
  return (
    <section id="sobre" className="bg-white py-20 md:py-24 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">

        {/* Bloco de texto */}
        <div className="max-w-2xl md:self-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3031A3] leading-tight mb-6">
            Criamos soluções criativas<br />que economizam tempo de verdade.
          </h2>

          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Somos uma equipe apaixonada por <strong>tecnologia</strong>, <strong>automação inteligente</strong> e <strong>análise de dados</strong>.
            Ajudamos empresas a economizar tempo com soluções digitais que funcionam — enquanto você toma seu café.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Especialistas em <strong>chatbots</strong>, <strong>integrações com APIs</strong> e <strong>fluxos automatizados</strong>, somos parceiros certificados
            <strong> Kommo</strong> (CRM de vendas) e <strong>Manychat</strong> (automação via WhatsApp e Instagram).
          </p>
        </div>

        {/* Imagem */}
        <div className="flex justify-center md:justify-end md:self-center w-full md:w-auto">
          <Image
            src={atendimentoImg}
            alt="Robô atendendo com café e headset"
            className="rounded-2xl w-auto max-w-[290px] object-contain shadow-xl"
            placeholder="blur"
            priority
          />
        </div>

      </div>
    </section>
  );
}
