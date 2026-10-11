import type { Metadata } from "next";

import { LegalPage } from "@/components/shared/legal-page";

export const metadata: Metadata = {
  title: "Regulamin",
  description: "Regulamin korzystania ze strony internetowej NEXITO i formularza kontaktowego.",
  alternates: { canonical: "/regulamin" },
};

export default function RegulaminPage() {
  return (
    <LegalPage
      title="Regulamin serwisu"
      intro="Regulamin określa zasady korzystania ze strony internetowej NEXITO, w tym z formularza kontaktowego."
      sections={[
        {
          title: "Postanowienia ogólne",
          content: [
            "Serwis prowadzi NEXITO. Korzystanie ze strony jest bezpłatne i nie wymaga zakładania konta.",
            "Korzystając ze strony, akceptujesz niniejszy regulamin.",
          ],
        },
        {
          title: "Wymagania techniczne",
          content: [
            "Do korzystania ze strony potrzebne jest urządzenie z dostępem do internetu i aktualną przeglądarką internetową z włączoną obsługą JavaScript.",
          ],
        },
        {
          title: "Formularz kontaktowy",
          content: [
            "Formularz służy do przesłania zapytania dotyczącego współpracy. Wysłanie formularza nie jest zawarciem umowy i nie zobowiązuje żadnej ze stron.",
            "Zakres, cena i termin realizacji projektu są ustalane indywidualnie, w osobnej umowie lub ofercie.",
            "Zabronione jest przesyłanie treści bezprawnych, obraźliwych lub niezwiązanych z celem formularza, w tym spamu.",
          ],
        },
        {
          title: "Treści w serwisie",
          content: [
            "Treści na stronie, w tym artykuły na blogu, mają charakter informacyjny i nie stanowią oferty w rozumieniu Kodeksu cywilnego.",
            "Teksty, grafiki i elementy wizualne serwisu są chronione prawem autorskim. Ich kopiowanie i wykorzystywanie bez zgody jest zabronione, z wyjątkiem dozwolonego użytku.",
            "Przykładowe koncepty prezentowane na stronie są ilustracjami możliwych rozwiązań, a nie opisami zrealizowanych projektów.",
          ],
        },
        {
          title: "Dane osobowe",
          content: [
            "Zasady przetwarzania danych osobowych opisuje polityka prywatności, a informacje o plikach cookies polityka cookies.",
          ],
        },
        {
          title: "Reklamacje i zmiany regulaminu",
          content: [
            "Uwagi i zgłoszenia dotyczące działania strony możesz przesłać przez formularz kontaktowy. Odpowiadamy na nie możliwie szybko.",
            "Regulamin może zostać zmieniony, na przykład w związku z rozwojem serwisu lub zmianą przepisów. Aktualna wersja jest zawsze dostępna na tej stronie.",
          ],
        },
      ]}
    />
  );
}
