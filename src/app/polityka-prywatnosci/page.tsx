import type { Metadata } from "next";

import { LegalPage } from "@/components/shared/legal-page";

export const metadata: Metadata = {
  title: "Polityka prywatności",
  description: "Zasady przetwarzania danych osobowych w serwisie NEXITO.",
  alternates: { canonical: "/polityka-prywatnosci" },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Polityka prywatności"
      intro="Szanujemy Twoją prywatność. Poniżej wyjaśniamy, jakie dane zbieramy za pośrednictwem tej strony i w jakim celu."
      sections={[
        {
          title: "Administrator danych",
          content: ["Administratorem danych osobowych przekazanych przez formularz kontaktowy jest NEXITO."],
        },
        {
          title: "Zakres i cel przetwarzania",
          content: [
            "Przetwarzamy dane podane w formularzu kontaktowym: imię, nazwę firmy, adres e-mail, opcjonalnie numer telefonu oraz treść wiadomości.",
            "Dane wykorzystujemy wyłącznie w celu odpowiedzi na zapytanie i przygotowania oferty (art. 6 ust. 1 lit. b i f RODO).",
          ],
        },
        {
          title: "Okres przechowywania",
          content: ["Dane przechowujemy przez czas niezbędny do obsługi zapytania oraz ewentualnej dalszej współpracy."],
        },
        {
          title: "Twoje prawa",
          content: [
            "Masz prawo dostępu do swoich danych, ich sprostowania, usunięcia, ograniczenia przetwarzania, przenoszenia oraz wniesienia sprzeciwu.",
            "Przysługuje Ci również prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych.",
          ],
        },
        {
          title: "Kontakt",
          content: ["W sprawach dotyczących danych osobowych skontaktuj się z nami przez formularz kontaktowy na stronie głównej."],
        },
      ]}
    />
  );
}
