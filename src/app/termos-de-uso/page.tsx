// src/app/termos-de-uso/page.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso - But First Coffee",
  description: "Entenda os termos e condições para uso dos serviços da But First Coffee.",
};

export default function TermosDeUso() {
  return (
    <section className="min-h-screen bg-[#080A09] px-4 py-24 pt-32 flex items-center justify-center">
      <div className="w-full max-w-3xl rounded-2xl border border-[#F59A23]/20 bg-[#111315] p-8 text-[#F7F3EA] shadow-2xl shadow-black/30 md:p-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#F59A23] mb-6 text-center">
          Termos de Uso
        </h1>

        <p className="mb-4 text-[#D0C7B8]">
          Ao acessar e utilizar os serviços oferecidos pela But First Coffee, você concorda com os termos e condições descritos abaixo. Recomendamos a leitura atenta deste documento.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2 text-[#F59A23]">1. Uso permitido</h2>
        <p className="mb-4 text-[#D0C7B8]">
          Nossos serviços são destinados a empresas e profissionais que desejam implementar soluções de automação, atendimento e análise de dados. É proibido utilizar nossas soluções para fins ilegais, abusivos ou que violem direitos de terceiros.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2 text-[#F59A23]">2. Propriedade intelectual</h2>
        <p className="mb-4 text-[#D0C7B8]">
          Todo o conteúdo disponibilizado em nosso site e sistemas (textos, imagens, códigos, marcas e identidade visual) é de propriedade da But First Coffee ou de seus parceiros, e não pode ser reproduzido sem autorização prévia.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2 text-[#F59A23]">3. Responsabilidades</h2>
        <p className="mb-4 text-[#D0C7B8]">
          A But First Coffee se compromete a prestar os serviços contratados com qualidade e segurança, mas não se responsabiliza por falhas decorrentes de serviços de terceiros (como plataformas de CRM, APIs externas, entre outros).
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2 text-[#F59A23]">4. Cancelamento e suporte</h2>
        <p className="mb-4 text-[#D0C7B8]">
          Os termos de cancelamento, reembolsos e níveis de suporte serão definidos em contrato específico ou no momento da contratação de cada serviço.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2 text-[#F59A23]">5. Alterações nos termos</h2>
        <p className="mb-4 text-[#D0C7B8]">
          Reservamo-nos o direito de alterar estes Termos de Uso a qualquer momento. Recomendamos a revisão periódica deste documento. A versão mais recente estará sempre disponível nesta página.
        </p>

        <p className="mt-8 text-sm text-[#B8B0A3] text-center">Última atualização: Junho de 2025</p>
      </div>
    </section>
  );
}
