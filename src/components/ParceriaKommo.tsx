// src/components/ParceriaKommo.tsx

"use client";

import Image from "next/image";
import kommoPartner from "@/../public/kommo-partner.png";

export default function ParceriaKommo() {
  return (
    <section className="py-20 px-6 bg-[#EEEEEE] text-[#1C1C1C]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">

        {/* Imagem Kommo Partner */}
        <div className="flex justify-center md:justify-start w-full md:w-1/3">
          <Image
            src={kommoPartner}
            alt="Kommo Partner"
            className="max-w-[200px] w-full h-auto rounded-xl shadow-md"
            placeholder="blur"
            priority
          />
        </div>

        {/* Texto institucional */}
        <div className="max-w-2xl text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#3031A3]">
            Parceria com a Kommo
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Somos parceiros certificados da <strong>Kommo</strong>, o CRM de vendas líder em automação de atendimento e relacionamento.
            Essa parceria nos permite oferecer fluxos de vendas inteligentes, integração total entre canais e experiências de atendimento que encantam clientes enquanto otimizam sua operação.
          </p>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Combinamos a força da Kommo com a expertise da B1st em automação para entregar soluções que geram resultados reais para o seu negócio.
          </p>
        </div>

      </div>
    </section>
  );
}
