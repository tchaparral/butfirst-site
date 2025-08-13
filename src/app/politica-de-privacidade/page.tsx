// src/app/politica-de-privacidade/page.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade - But First Coffee",
  description: "Entenda como a But First Coffee coleta, usa e protege suas informações.",
};

export default function PoliticaDePrivacidade() {
  return (
    <section className="bg-[#EEEEEE] py-16 px-4 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-lg max-w-3xl w-full p-8 md:p-12 text-[#1C1C1C]">
        <h1 className="text-3xl md:text-4xl font-bold text-[#3031A3] mb-6 text-center">
          Política de Privacidade
        </h1>

        <p className="mb-4 text-gray-800">
          A But First Coffee valoriza a privacidade e a segurança dos seus dados. Esta Política de Privacidade tem como objetivo informar como coletamos, usamos e protegemos suas informações.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2 text-[#3031A3]">1. Coleta de informações</h2>
        <p className="mb-4 text-gray-800">
          Podemos coletar dados pessoais como nome, e-mail, telefone, empresa, cargo e outras informações fornecidas voluntariamente por você em formulários, chatbots e interações com nossos serviços.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2 text-[#3031A3]">2. Uso das informações</h2>
        <p className="mb-4 text-gray-800">
          Utilizamos os dados coletados para oferecer suporte, melhorar nossos serviços, enviar comunicações e propostas comerciais, e personalizar sua experiência com nossos sistemas automatizados.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2 text-[#3031A3]">3. Compartilhamento de dados</h2>
        <p className="mb-4 text-gray-800">
          Não vendemos nem compartilhamos suas informações com terceiros, exceto quando necessário para prestação de serviços (como plataformas parceiras: Kommo, Manychat, entre outras) e mediante consentimento.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2 text-[#3031A3]">4. Armazenamento e segurança</h2>
        <p className="mb-4 text-gray-800">
          Seus dados são armazenados em ambientes seguros e protegidos por práticas modernas de segurança da informação. Apenas pessoas autorizadas têm acesso a essas informações.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2 text-[#3031A3]">5. Direitos do titular</h2>
        <p className="mb-4 text-gray-800">
          Você pode solicitar a correção, exclusão ou visualização de seus dados a qualquer momento, conforme previsto na Lei Geral de Proteção de Dados (LGPD). Basta enviar um e-mail para <strong>contato@butfirstcoffee.com.br</strong>.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2 text-[#3031A3]">6. Alterações nesta política</h2>
        <p className="mb-4 text-gray-800">
          Esta política pode ser atualizada a qualquer momento para refletir melhorias ou exigências legais. A versão mais recente estará sempre disponível nesta página.
        </p>

        <p className="mt-8 text-sm text-gray-600 text-center">Última atualização: Junho de 2025</p>
      </div>
    </section>
  );
}
