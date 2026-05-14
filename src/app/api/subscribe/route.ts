// src/app/api/subscribe/route.ts
import { existsSync, readFileSync } from "fs";
import { NextResponse } from "next/server";
import { google } from "googleapis";

export const runtime = "nodejs";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ORIGEM = "lp-v2";
const STATUS = "novo";

function jsonError(message: string, status: number) {
  return NextResponse.json({ ok: false, message }, { status });
}

function getServiceAccountCredentials() {
  const configuredEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const configuredPrivateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY;

  if (!configuredPrivateKey) {
    return null;
  }

  if (existsSync(configuredPrivateKey)) {
    const credentials = JSON.parse(readFileSync(configuredPrivateKey, "utf8")) as {
      client_email?: string;
      private_key?: string;
    };

    if (!credentials.client_email || !credentials.private_key) {
      return null;
    }

    return {
      email: configuredEmail || credentials.client_email,
      privateKey: credentials.private_key,
    };
  }

  return {
    email: configuredEmail,
    privateKey: configuredPrivateKey.replace(/\\n/g, "\n"),
  };
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);

    if (!body || typeof body !== "object") {
      return jsonError("Dados invalidos.", 400);
    }

    const { email, routine, consent, sessionId } = body as {
      email?: unknown;
      routine?: unknown;
      consent?: unknown;
      sessionId?: unknown;
    };

    if (typeof email !== "string" || !EMAIL_REGEX.test(email.trim())) {
      return jsonError("E-mail invalido.", 400);
    }

    if (consent !== true) {
      return jsonError("E preciso aceitar os termos.", 400);
    }

    if (routine !== undefined && typeof routine !== "string") {
      return jsonError("Rotina invalida.", 400);
    }

    if (sessionId !== undefined && typeof sessionId !== "string") {
      return jsonError("Sessao invalida.", 400);
    }

    const credentials = getServiceAccountCredentials();
    const spreadsheetId = process.env.GOOGLE_SHEETS_ID;

    if (!credentials?.email || !credentials.privateKey || !spreadsheetId) {
      console.error("Google Sheets integration is missing required environment variables.");
      return jsonError("Erro ao salvar. Tente novamente.", 500);
    }

    const auth = new google.auth.JWT({
      email: credentials.email,
      key: credentials.privateKey,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const values = [[
      new Date().toISOString(),
      email.trim(),
      routine?.trim() || "",
      true,
      sessionId?.trim() || "",
      ORIGEM,
      STATUS,
    ]];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: process.env.GOOGLE_SHEETS_RANGE || "contatos!A:G",
      valueInputOption: "USER_ENTERED",
      requestBody: { values },
    });

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    console.error("Erro ao salvar no Google Sheets:", err);
    return jsonError("Erro ao salvar. Tente novamente.", 500);
  }
}
