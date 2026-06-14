export type WaitlistSource = "hero" | "founding_member"

export type WaitlistResult = {
  success: boolean
  duplicate?: boolean
  error?: "invalid_email" | "missing_config" | "network" | "server"
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function isValidEmail(email: string): boolean {
  return EMAIL_REGEX.test(email.trim())
}

export async function submitToWaitlist(
  email: string,
  source: WaitlistSource
): Promise<WaitlistResult> {
  const trimmed = email.trim().toLowerCase()

  if (!isValidEmail(trimmed)) {
    return { success: false, error: "invalid_email" }
  }

  const endpoint = import.meta.env.VITE_WAITLIST_SCRIPT_URL as
    | string
    | undefined

  if (!endpoint) {
    return { success: false, error: "missing_config" }
  }

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ email: trimmed, source }),
      redirect: "follow",
    })

    if (!res.ok) {
      return { success: false, error: "server" }
    }

    const data = (await res.json()) as {
      success: boolean
      duplicate?: boolean
      error?: string
    }

    if (!data.success) {
      if (data.error === "invalid_email") {
        return { success: false, error: "invalid_email" }
      }
      return { success: false, error: "server" }
    }

    return { success: true, duplicate: Boolean(data.duplicate) }
  } catch {
    return { success: false, error: "network" }
  }
}
