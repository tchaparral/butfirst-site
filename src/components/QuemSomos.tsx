// src/components/QuemSomos.tsx

"use client";

export default function QuemSomos() {
  return (
    <section id="sobre" className="py-20 px-6 bg-[#080A09]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#F7F3EA]">
          Tecnologia que organiza. Pessoas que fazem acontecer.
        </h2>
        <p className="text-lg text-[#B8B0A3] leading-relaxed max-w-3xl mx-auto">
          Somos uma iniciativa voltada à estruturação operacional, automação e uso acessível de tecnologia para pequenos negócios.
          Acreditamos que automação sem processo só acelera confusão, e inteligência artificial sem contexto dificilmente gera valor real.
          Nosso foco é reduzir atrito operacional para que pessoas possam trabalhar melhor.
        </p>
        <p className="text-lg text-[#B8B0A3] leading-relaxed max-w-3xl mx-auto mt-4">
          Menos buzzword. Mais operação.
        </p>
      </div>
    </section>
  );
}
