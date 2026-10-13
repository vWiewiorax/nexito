"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

type TurnstileApi = {
  render: (element: HTMLElement, options: Record<string, unknown>) => string;
  remove: (widgetId: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

type TurnstileProps = {
  siteKey: string;
  onToken: (token: string) => void;
  resetKey?: number;
};

export function Turnstile({ siteKey, onToken, resetKey = 0 }: TurnstileProps) {
  const container = useRef<HTMLDivElement>(null);
  const callback = useRef(onToken);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    callback.current = onToken;
  }, [onToken]);

  useEffect(() => {
    const api = window.turnstile;
    if (!ready || !api || !container.current) return;
    const widgetId = api.render(container.current, {
      sitekey: siteKey,
      theme: "dark",
      language: "pl",
      callback: (token: string) => callback.current(token),
      "expired-callback": () => callback.current(""),
      "error-callback": () => callback.current(""),
    });
    return () => {
      api.remove(widgetId);
      callback.current("");
    };
  }, [ready, siteKey, resetKey]);

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onReady={() => setReady(true)}
      />
      <div ref={container} className="min-h-[65px]" />
    </>
  );
}
