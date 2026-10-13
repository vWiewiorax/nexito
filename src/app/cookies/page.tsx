import type { Metadata } from "next";

import { LegalPage } from "@/components/shared/legal-page";

export const metadata: Metadata = {
  title: "Cookies",
  description: "Informacje o plikach cookies w serwisie NEXIWEB.",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <LegalPage
      title="Polityka cookies"
      intro="Pliki cookies to niewielkie pliki zapisywane w przeglądarce. Poniżej opisujemy, jak korzysta z nich ta strona."
      sections={[
        {
          title: "Jakich cookies używamy",
          content: [
            "Strona nie korzysta z cookies marketingowych ani śledzących. Mogą być używane wyłącznie pliki niezbędne do prawidłowego działania serwisu.",
          ],
        },
        {
          title: "Zarządzanie cookies",
          content: [
            "Możesz w każdej chwili zmienić ustawienia cookies w swojej przeglądarce, w tym je zablokować lub usunąć.",
          ],
        },
        {
          title: "Zmiany",
          content: ["Jeśli zaczniemy korzystać z dodatkowych narzędzi, zaktualizujemy tę stronę przed ich uruchomieniem."],
        },
      ]}
    />
  );
}
