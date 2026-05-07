// src/app/api/subscribe/route.ts
import { NextResponse } from "next/server";
import { google } from "googleapis";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { email, routine, consent, sessionId } = await req.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json({ ok: false, message: "E-mail inválido." }, { status: 400 });
    }
    if (!consent) {
      return NextResponse.json({ ok: false, message: "É preciso aceitar os termos." }, { status: 400 });
    }

    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: (process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const values = [[
      new Date().toISOString(),   // A: timestamp
      email.trim(),               // B: e-mail
      routine || "",              // C: routine (opcional)
      "yes",                      // D: consent
      sessionId || ""             // E: session id (opcional)
    ]];

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEETS_ID!,
      range: process.env.GOOGLE_SHEETS_RANGE || "emails!A:E",
      valueInputOption: "USER_ENTERED",
      requestBody: { values },
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("Erro ao salvar no Google Sheets:", err?.message || err);
    return NextResponse.json({ ok: false, message: "Erro ao salvar. Tente novamente." }, { status: 500 });
  }
}
