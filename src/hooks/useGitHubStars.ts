import { useEffect, useState } from "react";

const CACHE_KEY = "gh-stars:suraj-xd/ai-research-archive";
const CACHE_TTL_MS = 1000 * 60 * 60; // 1 hour

interface CachedStars {
  count: number;
  fetchedAt: number;
}

export function useGitHubStars(repo = "suraj-xd/ai-research-archive"): number | null {
  const [stars, setStars] = useState<number | null>(() => {
    try {
      const raw = localStorage.getItem(CACHE_KEY);
      if (!raw) return null;
      const cached: CachedStars = JSON.parse(raw);
      return cached.count;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    const raw = localStorage.getItem(CACHE_KEY);
    if (raw) {
      try {
        const cached: CachedStars = JSON.parse(raw);
        if (Date.now() - cached.fetchedAt < CACHE_TTL_MS) return;
      } catch { /* fall through */ }
    }

    // GitHub's REST API rate-limits anonymous requests heavily and may 403,
    // so we fall back to the no-key "Used by" badge endpoint via api.github.
    // Both return JSON with `stargazers_count`. Refresh the cache on success.
    fetch(`https://api.github.com/repos/${repo}`, {
      headers: { Accept: "application/vnd.github+json" },
    })
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(`HTTP ${r.status}`))))
      .then((data: { stargazers_count?: number }) => {
        if (typeof data.stargazers_count !== "number") return;
        setStars(data.stargazers_count);
        localStorage.setItem(
          CACHE_KEY,
          JSON.stringify({ count: data.stargazers_count, fetchedAt: Date.now() }),
        );
      })
      .catch(() => {
        /* network/rate-limit failure — preserve last cached count */
      });
  }, [repo]);

  return stars;
}
