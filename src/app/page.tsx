// src/app/page.tsx

import Hero from "@/components/Hero";
import QuemSomos from "@/components/QuemSomos";
import OqueOferecemos from "@/components/OqueOferecemos";
import IAPratica from "@/components/IAPratica";
import ParceriaKommo from "@/components/ParceriaKommo";
import CtaContato from "@/components/CtaContato";

export default function Home() {
  return (
    <>
      <Hero />
      <QuemSomos />
      <OqueOferecemos />
      <IAPratica />
      <ParceriaKommo />
      <CtaContato />
    </>
  );
}

