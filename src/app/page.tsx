import { Contact } from "@/components/sections/contact";
import { Cta } from "@/components/sections/cta";
import { Faq } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { Platform } from "@/components/sections/platform";
import { Process } from "@/components/sections/process";
import { Services } from "@/components/sections/services";
import { Showcases } from "@/components/sections/showcases";
import { Trust } from "@/components/sections/trust";
import { Why } from "@/components/sections/why";
import { faqs } from "@/content/home";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Hero />
      <Trust />
      <Services />
      <Platform />
      <Process />
      <Why />
      <Showcases />
      <Cta />
      <Faq />
      <Contact />
    </>
  );
}
