import ogImages from "@/data/og-images.json";

const ogMap = ogImages as Record<string, string | null>;

export function getFaviconUrl(siteUrl: string): string {
  try {
    const domain = new URL(siteUrl).hostname;
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=32`;
  } catch {
    return "";
  }
}

export function getYouTubeId(url: string): string | null {
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtube.com") || u.hostname.includes("youtu.be")) {
      return u.searchParams.get("v") || u.pathname.split("/").pop() || null;
    }
  } catch { /* ignore */ }
  return null;
}

export function getGitHubPath(url: string): string | null {
  try {
    const u = new URL(url);
    if (u.hostname === "github.com") {
      const parts = u.pathname.split("/").filter(Boolean);
      if (parts.length >= 2) return `${parts[0]}/${parts[1]}`;
    }
  } catch { /* ignore */ }
  return null;
}

export function getPreviewUrl(url: string): string | null {
  const ytId = getYouTubeId(url);
  if (ytId) return `https://img.youtube.com/vi/${ytId}/mqdefault.jpg`;

  const ghPath = getGitHubPath(url);
  if (ghPath) return `https://opengraph.githubassets.com/1/${ghPath}`;

  // Check pre-fetched OG images
  if (ogMap[url]) return ogMap[url];

  return null;
}
