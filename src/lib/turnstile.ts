const isDev = process.env.NODE_ENV !== "production";

// Cloudflare test keys (always pass) are used only outside production builds.
export const turnstileSiteKey =
  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || (isDev ? "1x00000000000000000000AA" : "");

const verifyUrl = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

export async function verifyTurnstile(token: string, ip?: string | null) {
  const secret = process.env.TURNSTILE_SECRET_KEY || (isDev ? "1x0000000000000000000000000000000AA" : "");
  if (!secret) {
    console.error("[turnstile] TURNSTILE_SECRET_KEY is not set");
    return false;
  }
  if (!token) return false;

  const body = new URLSearchParams({ secret, response: token });
  if (ip) body.set("remoteip", ip);

  try {
    const response = await fetch(verifyUrl, { method: "POST", body });
    const result = (await response.json()) as { success?: boolean };
    return result.success === true;
  } catch (error) {
    console.error("[turnstile] verification failed", error);
    return false;
  }
}
