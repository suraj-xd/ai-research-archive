import { useEffect, useMemo, useRef, useState } from "react";
import { Logo, PhIcon } from "@/components/brand";
import { books } from "@/data/resources";
import { papers } from "@/data/papers";
import { blogs } from "@/data/blogs";
import { articles } from "@/data/articles";
import { tools } from "@/data/tools";
import { xProfiles } from "@/data/community";

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
}

type SearchHit = {
  title: string;
  meta?: string;
  url: string;
  source: string; // human label
  sourceIcon: string; // phosphor icon
};

const HITS: SearchHit[] = [
  ...books.map((b) => ({
    title: b.title,
    meta: b.author,
    url: b.url,
    source: "Books",
    sourceIcon: "stack",
  })),
  ...papers.map((p) => ({
    title: p.title,
    meta: p.authors,
    url: p.url,
    source: "Papers",
    sourceIcon: "files",
  })),
  ...blogs.map((b) => ({
    title: b.name,
    meta: b.type,
    url: b.url,
    source: "Blogs",
    sourceIcon: "article",
  })),
  ...articles.map((a) => ({
    title: a.title,
    meta: a.author,
    url: a.url,
    source: "Notes",
    sourceIcon: "newspaper",
  })),
  ...tools.map((t) => ({
    title: t.name,
    meta: t.category,
    url: t.url,
    source: "Tools",
    sourceIcon: "wrench",
  })),
  ...xProfiles.map((p) => ({
    title: p.name,
    meta: `@${p.handle}`,
    url: `https://x.com/${p.handle}`,
    source: "People",
    sourceIcon: "users-three",
  })),
];

const RESULT_LIMIT = 8;

export function CommandPalette({ open, onClose }: CommandPaletteProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 30);
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        clearTimeout(t);
        document.body.style.overflow = prev;
      };
    } else {
      setQuery("");
    }
  }, [open]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return HITS.slice(0, RESULT_LIMIT);
    const scored: { hit: SearchHit; score: number }[] = [];
    for (const hit of HITS) {
      const t = hit.title.toLowerCase();
      const m = hit.meta?.toLowerCase() ?? "";
      let score = 0;
      if (t.startsWith(q)) score += 5;
      else if (t.includes(q)) score += 3;
      if (m.includes(q)) score += 1;
      if (score > 0) scored.push({ hit, score });
    }
    scored.sort((a, b) => b.score - a.score);
    return scored.slice(0, RESULT_LIMIT).map((s) => s.hit);
  }, [query]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center fade-in"
      style={{ padding: "12vh 16px 16px" }}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0"
        style={{
          background: "rgba(20, 20, 20, 0.34)",
          backdropFilter: "blur(8px) saturate(140%)",
          WebkitBackdropFilter: "blur(8px) saturate(140%)",
        }}
      />

      {/* Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Search the archive"
        className="relative w-full"
        style={{
          maxWidth: 640,
          background: "rgba(255, 255, 255, 0.94)",
          backdropFilter: "blur(24px) saturate(180%)",
          WebkitBackdropFilter: "blur(24px) saturate(180%)",
          border: "1px solid var(--ga-border-strong)",
          borderRadius: 16,
          boxShadow:
            "0 24px 60px rgba(0, 0, 0, 0.18), 0 4px 12px rgba(0, 0, 0, 0.08)",
          overflow: "hidden",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top input row */}
        <div
          className="flex items-center"
          style={{ gap: 12, padding: "14px 16px" }}
        >
          <span
            className="inline-flex items-center justify-center shrink-0"
            style={{
              width: 32,
              height: 32,
              borderRadius: 9,
              background: "var(--ga-chip)",
            }}
          >
            <Logo size={18} />
          </span>

          <input
            ref={inputRef}
            type="text"
            placeholder="Search books, papers, blogs, people..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent outline-none border-0"
            style={{
              fontFamily: "var(--ga-font-sans)",
              fontSize: 16,
              fontWeight: 400,
              color: "var(--ga-fg1)",
              minWidth: 0,
            }}
          />

          <kbd
            className="hidden sm:inline-flex items-center"
            style={{
              gap: 3,
              padding: "3px 7px",
              borderRadius: 5,
              background: "var(--ga-chip)",
              color: "var(--ga-fg2)",
              fontFamily: "var(--ga-font-mono)",
              fontSize: 10,
              letterSpacing: "0.04em",
            }}
          >
            esc
          </kbd>
        </div>

        <div style={{ borderTop: "1px solid var(--ga-divider)" }} />

        {/* Results */}
        <div style={{ padding: "8px 8px", minHeight: 280, maxHeight: 420, overflowY: "auto" }}>
          {results.length === 0 ? (
            <div
              className="flex items-center justify-center"
              style={{
                padding: "60px 20px",
                color: "var(--ga-fg3)",
                fontSize: 13,
              }}
            >
              No matches.
            </div>
          ) : (
            results.map((hit, i) => (
              <a
                key={`${i}-${hit.url}`}
                href={hit.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="flex items-center"
                style={{
                  gap: 12,
                  padding: "10px 12px",
                  borderRadius: 8,
                  textDecoration: "none",
                  color: "var(--ga-fg1)",
                  transition: "background 120ms ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--ga-hover)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                }}
              >
                <span
                  className="inline-flex items-center justify-center shrink-0"
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 6,
                    background: "var(--ga-chip)",
                  }}
                >
                  <PhIcon name={hit.sourceIcon} size={13} color="var(--ga-fg2)" />
                </span>
                <span className="flex-1 min-w-0">
                  <span
                    className="block truncate"
                    style={{
                      fontSize: 13,
                      fontWeight: 500,
                      color: "var(--ga-fg1)",
                    }}
                  >
                    {hit.title}
                  </span>
                  {hit.meta && (
                    <span
                      className="block truncate"
                      style={{
                        fontSize: 11,
                        color: "var(--ga-fg3)",
                        marginTop: 1,
                      }}
                    >
                      {hit.meta}
                    </span>
                  )}
                </span>
                <span
                  className="shrink-0"
                  style={{
                    fontFamily: "var(--ga-font-mono)",
                    fontSize: 9,
                    color: "var(--ga-fg3)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  {hit.source}
                </span>
                <PhIcon
                  name="arrow-square-out"
                  size={11}
                  color="var(--ga-fg3)"
                />
              </a>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
