// src/components/IAPratica.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import iaCoffeeRobot from "@/../public/ia-coffee-robot.png";

export default function IAPratica() {
  return (
    <section className="py-20 px-6 bg-white text-[#1C1C1C]">
      <div className="max-w-6xl mx-auto">

        {/* Título e descrição */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#3031A3]">
            Inteligência Artificial na prática
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            IA não é o futuro. É o presente. E a B1st coloca ela para trabalhar por você — agora.
          </p>
        </div>

        {/* Grid imagem + cards */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-8">

          {/* Imagem */}
          <div className="flex justify-center">
            <Image
              src={iaCoffeeRobot}
              alt="Automação e Machine Learning"
              className="max-h-[460px] object-contain rounded-xl"
              placeholder="blur"
              priority
            />
          </div>

          {/* Cards */}
          <div className="grid gap-6">
            <div className="bg-[#EEEEEE] p-8 rounded-xl shadow hover:shadow-xl transition-shadow">
              <h3 className="font-semibold text-[#3031A3] mb-2">Atendimento automático</h3>
              <p className="text-sm text-gray-700">
                Bots que entendem o que o cliente quer, respondem com contexto e liberam sua equipe para o que importa.
              </p>
            </div>
            <div className="bg-[#EEEEEE] p-8 rounded-xl shadow hover:shadow-xl transition-shadow">
              <h3 className="font-semibold text-[#3031A3] mb-2">Geração de conteúdo</h3>
              <p className="text-sm text-gray-700">
                Automatize respostas, propostas, mensagens e textos com linguagem natural e personalizada.
              </p>
            </div>
            <div className="bg-[#EEEEEE] p-8 rounded-xl shadow hover:shadow-xl transition-shadow">
              <h3 className="font-semibold text-[#3031A3] mb-2">Tomada de decisão</h3>
              <p className="text-sm text-gray-700">
                Análise de dados, classificação de leads, priorização de tarefas — tudo orientado por IA.
              </p>
            </div>
          </div>

        </div>

        {/* Botão centralizado chamando o blog */}
        <div className="text-center py-3">
          <Link
            href="/blog"
            className="inline-block bg-[#3031A3] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#e60051] transition-colors"
          >
            Quer ver na prática? Acesse nosso blog
          </Link>
        </div>
      </div>
    </section>
  );
}
