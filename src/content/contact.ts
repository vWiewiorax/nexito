import { services } from "@/content/services";

export const needOptions = [
  ...services.map((service) => ({ value: service.slug, label: service.title })),
  { value: "rozwiazania-ai", label: "Rozwiązania AI" },
  { value: "inne", label: "Jeszcze nie wiem" },
];

export const contactLimits = {
  name: 100,
  company: 120,
  email: 200,
  phone: 40,
  message: 4000,
} as const;
