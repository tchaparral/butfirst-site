"use client";

import Image from "next/image";
import { useState } from "react";

export default function CtaContato() {
  const [email, setEmail] = useState("");
  const [routine, setRoutine] = useState("");
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const sessionId = ""; // opcional, se quiser passar info extra

  const isValidEmail = (v: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg(null);

    if (!isValidEmail(email)) {
      setErrorMsg("Informe um e-mail válido.");
      return;
    }
    if (!consent) {
      setErrorMsg("Você precisa aceitar os termos.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, routine, consent, sessionId }),
      });
      const data = await res.json();

      if (!res.ok || !data?.ok) {
        throw new Error(data?.message || "Falha ao cadastrar.");
      }

      setSuccessOpen(true);
      setEmail("");
      setRoutine("");
      setConsent(false);
    } catch (err: any) {
      setErrorMsg(err?.message || "Erro ao cadastrar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contato" className="relative py-20 px-6 text-white overflow-hidden">
      {/* Background Image */}
      <Image
        src="/cta-contato.png"
        alt="Fundo contato"
        className="absolute inset-0 w-full h-full object-cover z-0"
        width={1200}
        height={600}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10"></div>

      <div className="relative z-20 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#F7F3EA]">
            Onde sua operação está perdendo tempo?
          </h2>
          <p className="text-lg text-[#B8B0A3] max-w-3xl mx-auto">
            Conte onde existe retrabalho, tarefa manual ou ferramenta desconectada. A gente ajuda a encontrar um primeiro caminho simples para organizar e automatizar.
          </p>
        </div>

        {/* Formulário */}
        <div className="max-w-md mx-auto bg-[#111315]/90 backdrop-blur-sm rounded-xl p-8 border border-[#F59A23]/20">
          <form className="space-y-4" onSubmit={onSubmit} noValidate>
            <input
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg text-black bg-white border-0 focus:ring-2 focus:ring-[#F59A23]"
              required
            />

            <input
              type="text"
              placeholder="Qual rotina mais toma tempo hoje? (opcional)"
              value={routine}
              onChange={(e) => setRoutine(e.target.value)}
              className="w-full px-4 py-3 rounded-lg text-black bg-white border-0 focus:ring-2 focus:ring-[#F59A23]"
            />

            <label className="text-sm flex items-start gap-2 text-[#B8B0A3]">
              <input
                type="checkbox"
                className="mt-1 accent-[#F59A23]"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                required
              />
              Eu aceito receber comunicações da B1st de acordo com meus interesses
            </label>

            {errorMsg && (
              <div className="text-sm text-red-400">{errorMsg}</div>
            )}

            <button
              type="submit"
              disabled={loading || !isValidEmail(email) || !consent}
              className="bg-[#F59A23] hover:bg-[#E0851D] disabled:opacity-60 disabled:cursor-not-allowed text-black font-bold py-3 px-6 rounded-lg w-full transition-colors"
            >
              {loading ? "Enviando..." : "Quero diagnosticar minha operação"}
            </button>
          </form>
        </div>
      </div>

      {/* Pop-up de sucesso */}
      {successOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
          <div className="bg-[#111315] text-[#F7F3EA] rounded-2xl p-6 max-w-md w-full shadow-xl border border-[#F59A23]/20">
            <h4 className="text-lg font-bold mb-2">Mensagem enviada! 🎉</h4>
            <p className="text-sm text-[#B8B0A3]">
              Recebemos seu contato. Em breve retornamos com uma proposta personalizada.
            </p>
            <button
              onClick={() => setSuccessOpen(false)}
              className="mt-4 bg-[#F59A23] hover:bg-[#E0851D] text-black font-semibold py-2 px-4 rounded-lg w-full transition-colors"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
