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

    fetch(`https://api.github.com/repos/${repo}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((data: { stargazers_count?: number } | null) => {
        if (data && typeof data.stargazers_count === "number") {
          setStars(data.stargazers_count);
          localStorage.setItem(
            CACHE_KEY,
            JSON.stringify({ count: data.stargazers_count, fetchedAt: Date.now() }),
          );
        }
      })
      .catch(() => { /* keep cached value */ });
  }, [repo]);

  return stars;
}
