// src/components/OqueOferecemos.tsx

"use client";

import Image from "next/image";
import iconBot from "@/../public/azu_icon.svg";
import iconEsteira from "@/../public/ia-esteira.png";
import iconApi from "@/../public/azu_icon_api.png";
import iconFunil from "@/../public/azu_icon_funil.png";
import iconDashboard from "@/../public/azu_icon_dashboard.png";

export default function OqueOferecemos() {
  return (
    <section id="servicos" className="py-20 px-6 bg-[#EEEEEE]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#3031A3]">
          O que oferecemos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Card 1 */}
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all">
            <Image src={iconBot} alt="Bots" className="h-8 mb-4 mx-auto w-auto" />
            <h3 className="text-lg font-bold mb-2 text-black">Bots e Assistentes Virtuais</h3>
            <p className="text-sm text-gray-600">
              Criamos bots para WhatsApp, Instagram e sites que atendem seus clientes automaticamente e com personalidade.
            </p>
          </div>

          {/* Card 2 (alto) */}
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all sm:row-span-2 flex flex-col justify-center">
            <Image src={iconEsteira} alt="Automação" className="h-16 mb-4 mx-auto w-auto" />
            <h3 className="text-lg font-bold mb-2 text-black">Automação de Processos</h3>
            <p className="text-sm text-gray-600">
              Automatize tarefas repetitivas e melhore sua produtividade com fluxos integrados e inteligentes.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all">
            <Image src={iconApi} alt="Integrações" className="h-20 mb-4 mx-auto w-auto" />
            <h3 className="text-lg font-bold mb-2 text-black">Integrações com APIs</h3>
            <p className="text-sm text-gray-600">
              Conectamos ferramentas e sistemas usando APIs, webhooks e inteligência para fluxo de dados em tempo real.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all">
            <Image src={iconFunil} alt="Landing Pages" className="h-16 mb-4 mx-auto w-auto" />
            <h3 className="text-lg font-bold mb-2 text-black">Landing Pages & Funnels</h3>
            <p className="text-sm text-gray-600">
              Páginas otimizadas para conversão com integração total aos seus sistemas de marketing e vendas.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all">
            <Image src={iconDashboard} alt="Painéis e Dashboards" className="h-14 mb-4 mx-auto w-auto" />
            <h3 className="text-lg font-bold mb-2 text-black">Painéis e Dashboards</h3>
            <p className="text-sm text-gray-600">
              Visualize os dados do seu negócio de forma clara, com métricas automatizadas em tempo real.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
