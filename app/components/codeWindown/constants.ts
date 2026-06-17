import { codeToHtml } from "shiki";

// ─── Types ────────────────────────────────────────────────────────────────────

export type Tab = "request" | "response";

// ─── Constants ────────────────────────────────────────────────────────────────

export const TABS: Tab[] = ["request", "response"];

export const CODE: Record<Tab, { content: string; lang: string }> = {
  request: {
    lang: "typescript",
    content: `const getUser = async (id: number) => {
  const res = await fetch(
    \`/users/\${id}\`,
    {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    }
  )
  return res.json()
}`,
  },
  response: {
    lang: "json",
    content: `// 200 OK
{
  "id": 42,
  "name": "Ada Lovelace",
  "email": "ada@example.com",
  "role": "admin",
  "active": true
}`,
  },
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

export async function highlight(code: string, lang: string): Promise<string> {
  return codeToHtml(code, { lang, theme: "night-owl" });
}

/**
 * Slices the inner text of a Shiki-generated HTML string to `n` visible
 * characters while preserving all HTML tags and their attributes intact.
 */
export function sliceHtml(fullHtml: string, n: number): string {
  const match = fullHtml.match(/<code[^>]*>([\s\S]*)<\/code>/);
  if (!match) return fullHtml;

  let count = 0;
  let result = "";
  let inTag = false;

  for (const ch of match[1]) {
    if (ch === "<") { inTag = true;  result += ch; continue; }
    if (ch === ">") { inTag = false; result += ch; continue; }
    if (inTag)      {                result += ch; continue; }

    if (count >= n) break;
    result += ch;
    count++;
  }

  return fullHtml.replace(match[1], result);
}
