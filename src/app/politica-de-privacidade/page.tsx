// src/app/politica-de-privacidade/page.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade - But First Coffee",
  description: "Entenda como a But First Coffee coleta, usa e protege suas informações.",
};

export default function PoliticaDePrivacidade() {
  return (
    <section className="min-h-screen bg-[#080A09] px-4 py-24 pt-32 flex items-center justify-center">
      <div className="w-full max-w-3xl rounded-2xl border border-[#F59A23]/20 bg-[#111315] p-8 text-[#F7F3EA] shadow-2xl shadow-black/30 md:p-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#F59A23] mb-6 text-center">
          Política de Privacidade
        </h1>

        <p className="mb-4 text-[#D0C7B8]">
          A But First Coffee valoriza a privacidade e a segurança dos seus dados. Esta Política de Privacidade tem como objetivo informar como coletamos, usamos e protegemos suas informações.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2 text-[#F59A23]">1. Coleta de informações</h2>
        <p className="mb-4 text-[#D0C7B8]">
          Podemos coletar dados pessoais como nome, e-mail, telefone, empresa, cargo e outras informações fornecidas voluntariamente por você em formulários, chatbots e interações com nossos serviços.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2 text-[#F59A23]">2. Uso das informações</h2>
        <p className="mb-4 text-[#D0C7B8]">
          Utilizamos os dados coletados para oferecer suporte, melhorar nossos serviços, enviar comunicações e propostas comerciais, e personalizar sua experiência com nossos sistemas automatizados.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2 text-[#F59A23]">3. Compartilhamento de dados</h2>
        <p className="mb-4 text-[#D0C7B8]">
          Não vendemos nem compartilhamos suas informações com terceiros, exceto quando necessário para prestação de serviços (como plataformas parceiras: Kommo, Manychat, entre outras) e mediante consentimento.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2 text-[#F59A23]">4. Armazenamento e segurança</h2>
        <p className="mb-4 text-[#D0C7B8]">
          Seus dados são armazenados em ambientes seguros e protegidos por práticas modernas de segurança da informação. Apenas pessoas autorizadas têm acesso a essas informações.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2 text-[#F59A23]">5. Direitos do titular</h2>
        <p className="mb-4 text-[#D0C7B8]">
          Você pode solicitar a correção, exclusão ou visualização de seus dados a qualquer momento, conforme previsto na Lei Geral de Proteção de Dados (LGPD). Basta enviar um e-mail para <strong>contato@butfirstcoffee.com.br</strong>.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2 text-[#F59A23]">6. Alterações nesta política</h2>
        <p className="mb-4 text-[#D0C7B8]">
          Esta política pode ser atualizada a qualquer momento para refletir melhorias ou exigências legais. A versão mais recente estará sempre disponível nesta página.
        </p>

        <p className="mt-8 text-sm text-[#B8B0A3] text-center">Última atualização: Junho de 2025</p>
      </div>
    </section>
  );
}
