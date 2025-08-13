// src/app/layout.tsx

// import type { Metadata } from "next";
import { Roboto_Flex, Manrope } from "next/font/google";
import "./globals.css";
// import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const robotoFlex = Roboto_Flex({
  variable: "--font-roboto-flex",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://b1stcoffee.site"),
  title: {
    default: "But First Coffee | Automação, Bots e IA para Empresas",
    template: "%s | But First Coffee"
  },
  description:
    "Automatize processos, escale seu atendimento e economize tempo com a But First Coffee. Criamos bots, fluxos inteligentes e integrações para sua operação.",
  openGraph: {
    title: "But First Coffee | Automação, Bots e IA para Empresas",
    description:
      "Automatize processos, escale seu atendimento e economize tempo com a But First Coffee. Criamos bots, fluxos inteligentes e integrações para sua operação.",
    url: "https://b1stcoffee.site",
    siteName: "But First Coffee",
    images: [
      {
        url: "https://b1stcoffee.site/images/og-image.jpg",
        width: 1200,
        height: 630
      }
    ],
    locale: "pt_BR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "But First Coffee | Automação, Bots e IA para Empresas",
    description:
      "Automatize processos, escale seu atendimento e economize tempo com a But First Coffee. Criamos bots, fluxos inteligentes e integrações para sua operação.",
    images: ["https://b1stcoffee.site/images/og-image.jpg"]
  },
  alternates: {
    canonical: "https://b1stcoffee.site"
  },
  robots: { index: true, follow: true }
};




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${robotoFlex.variable} ${manrope.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />        
        <div className="fixed bottom-6 right-6 flex gap-3 z-50">
          <a
            href="https://wa.me/5511959945371" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-[#25D366] rounded-xl flex items-center justify-center shadow-lg hover:scale-110 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              width="24"
              height="24"
              fill="white"
            >
              <path d="M16.001 3.2C9.374 3.2 3.995 8.578 3.995 15.2c0 2.658.926 5.108 2.48 7.06L4 28l5.908-2.468c1.802.826 3.794 1.27 6.093 1.27 6.628 0 12.007-5.377 12.007-12S22.629 3.2 16.001 3.2zm0 21.2c-1.938 0-3.727-.584-5.215-1.586l-.373-.242-3.5 1.46.746-3.722-.244-.384C6.411 18.092 6 16.678 6 15.2c0-5.523 4.478-10 10.001-10S26 9.677 26 15.2 21.522 24.4 16.001 24.4zm5.687-7.554c-.308-.154-1.816-.898-2.098-.998-.28-.102-.485-.154-.69.154-.203.308-.79.996-.97 1.2-.178.204-.356.23-.664.078-.308-.155-1.298-.478-2.47-1.524-.913-.813-1.53-1.812-1.71-2.12-.178-.308-.02-.474.134-.627.138-.136.308-.356.462-.534.155-.178.205-.306.308-.51.103-.205.05-.384-.025-.537-.077-.154-.69-1.663-.946-2.28-.248-.597-.5-.515-.69-.524-.178-.01-.384-.012-.59-.012-.204 0-.536.077-.818.384-.28.308-1.08 1.05-1.08 2.566 0 1.515 1.104 2.976 1.257 3.18.154.204 2.18 3.328 5.284 4.665.739.318 1.313.509 1.763.65.74.236 1.41.202 1.94.122.59-.088 1.816-.74 2.072-1.454.255-.714.255-1.328.18-1.454-.077-.128-.282-.204-.59-.358z" />
            </svg>
          </a>

          <a
            href="https://instagram.com/b1stcoffee"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-gradient-to-br from-[#feda75] via-[#d62976] to-[#4f5bd5] rounded-xl flex items-center justify-center shadow-lg hover:scale-110 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width="22"
              height="22"
              fill="white"
            >
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9S160.5 370.9 224.1 370.9 339 319.6 339 255.9 287.7 141 224.1 141zm0 186.6c-39.6 0-71.7-32.1-71.7-71.7s32.1-71.7 71.7-71.7 71.7 32.1 71.7 71.7-32.1 71.7-71.7 71.7zm146.4-194.3c0 14.9-12 26.9-26.9 26.9s-26.9-12-26.9-26.9 12-26.9 26.9-26.9 26.9 12 26.9 26.9zm76.1 27.2c-1.7-35.7-9.9-67.2-36.2-93.5C384.3 9.9 352.8 1.7 317.1 0 278.7-1.7 170.3-1.7 131.9 0 96.2 1.7 64.7 9.9 38.4 36.2 12.1 62.5 3.9 94 2.2 129.7.5 168.1.5 276.5 2.2 314.9c1.7 35.7 9.9 67.2 36.2 93.5 26.3 26.3 57.8 34.5 93.5 36.2 38.4 1.7 146.8 1.7 185.2 0 35.7-1.7 67.2-9.9 93.5-36.2 26.3-26.3 34.5-57.8 36.2-93.5 1.7-38.4 1.7-146.8 0-185.2zM398.8 388c-7.8 19.6-22.9 34.7-42.5 42.5-29.4 11.7-99.2 9-132.2 9s-102.7 2.6-132.2-9c-19.6-7.8-34.7-22.9-42.5-42.5-11.7-29.4-9-99.2-9-132.2s-2.6-102.7 9-132.2c7.8-19.6 22.9-34.7 42.5-42.5 29.4-11.7 99.2-9 132.2-9s102.7-2.6 132.2 9c19.6 7.8 34.7 22.9 42.5 42.5 11.7 29.4 9 99.2 9 132.2s2.6 102.7-9 132.2z" />
            </svg>
          </a>
        </div>

      </body>
    </html>
  );
}
