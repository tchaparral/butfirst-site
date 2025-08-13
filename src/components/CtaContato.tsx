"use client";

import Image from "next/image";
import { useState } from "react";
import brancoLogo from "@/../public/branco_logotipo.svg";

export default function CtaContato() {
  const [email, setEmail] = useState("");
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
        body: JSON.stringify({ email, consent, sessionId }),
      });
      const data = await res.json();

      if (!res.ok || !data?.ok) {
        throw new Error(data?.message || "Falha ao cadastrar.");
      }

      setSuccessOpen(true);
      setEmail("");
      setConsent(false);
    } catch (err: any) {
      setErrorMsg(err?.message || "Erro ao cadastrar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contato" className="bg-[#1C1C1C] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Texto institucional */}
        <div className="grid grid-cols-1">
          <Image
            src={brancoLogo}
            alt="Logo B1st"
            className="mx-auto h-1/2 mb-4 w-30"
            priority
          />
          <p className="text-sm text-gray-300 text-center md:text-left">
            A B1st é especialista em automação, bots e soluções com inteligência artificial.
            Nosso compromisso é transformar tarefas manuais em operações escaláveis e inteligentes.
          </p>
        </div>

        {/* Formulário */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-center md:text-left">
            Fale com a gente
          </h3>
          <p className="text-sm text-gray-300 mb-4 text-center md:text-left">
            Cadastre-se para saber mais sobre nossas soluções, ou contate a gente pelo WhatsApp ou Instagram.
          </p>

          <form className="space-y-4" onSubmit={onSubmit} noValidate>
            <input
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg text-black bg-white"
              required
            />

            <label className="text-sm flex items-start gap-2">
              <input
                type="checkbox"
                className="mt-1"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                required
              />
              Eu aceito receber comunicações da B1st de acordo com meus interesses
            </label>

            {errorMsg && (
              <div className="text-sm text-pink-400">{errorMsg}</div>
            )}

            <button
              type="submit"
              disabled={loading || !isValidEmail(email) || !consent}
              className="bg-[#FF005C] hover:bg-pink-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-2 px-6 rounded-xl w-full md:w-auto transition"
            >
              {loading ? "Cadastrando..." : "CADASTRAR"}
            </button>
          </form>
        </div>
      </div>

      {/* Pop-up de sucesso */}
      {successOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
          <div className="bg-white text-[#1C1C1C] rounded-2xl p-6 max-w-md w-full shadow-xl">
            <h4 className="text-lg font-bold mb-2">Cadastro feito! 🎉</h4>
            <p className="text-sm text-gray-700">
              Seu e-mail foi registrado na nossa lista. Em breve você recebe novidades da B1st.
            </p>
            <button
              onClick={() => setSuccessOpen(false)}
              className="mt-4 bg-[#3031A3] hover:opacity-90 text-white font-semibold py-2 px-4 rounded-xl w-full"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
