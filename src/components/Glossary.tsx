// Refactored to General Agents brand — 2026-04-19
import { useState, useMemo } from "react";
import { PhIcon, ZigDivider } from "@/components/brand";
import {
  glossaryTerms,
  glossaryCategoryLabels,
} from "@/data/glossary";
import type { GlossaryTerm } from "@/data/glossary";
import { modules } from "@/data/curriculum";

type CategoryFilter = "all" | GlossaryTerm["category"];

const NEUTRAL_CHIP =
  "inline-flex items-center px-2 py-0.5 rounded bg-secondary text-muted-foreground text-[10px] uppercase tracking-wider font-mono";

const categoryAbbreviations: Record<GlossaryTerm["category"], string> = {
  fundamentals: "FND",
  architecture: "ARCH",
  training: "TRN",
  deployment: "DEP",
  research: "RSH",
};

function getModuleTitle(moduleId: string): string {
  const mod = modules.find((m) => m.id === moduleId);
  return mod ? mod.shortTitle : moduleId;
}

export function GlossarySection() {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>("all");

  const filtered = useMemo(() => {
    const query = search.toLowerCase().trim();
    return glossaryTerms.filter((t) => {
      if (categoryFilter !== "all" && t.category !== categoryFilter) return false;
      if (query) {
        return (
          t.term.toLowerCase().includes(query) ||
          t.definition.toLowerCase().includes(query)
        );
      }
      return true;
    });
  }, [search, categoryFilter]);

  const grouped = useMemo(() => {
    const map = new Map<string, GlossaryTerm[]>();
    for (const term of filtered) {
      const letter = term.term[0].toUpperCase();
      const list = map.get(letter);
      if (list) {
        list.push(term);
      } else {
        map.set(letter, [term]);
      }
    }
    return Array.from(map.entries()).sort(([a], [b]) => a.localeCompare(b));
  }, [filtered]);

  const activeLetters = useMemo(
    () => new Set(grouped.map(([letter]) => letter)),
    [grouped],
  );

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <section id="glossary" className="scroll-mt-20 mb-10">
      {/* Header divider */}
      <div className="my-4">
        <ZigDivider label="Glossary" width={420} />
      </div>

      {/* Hero card */}
      <div className="grid-card p-5 relative mb-4">
        <h2 className="text-sm font-semibold text-foreground mb-1">
          AI / ML glossary
        </h2>
        <p className="text-xs text-muted-foreground leading-relaxed">
          {glossaryTerms.length} essential terms — the vocabulary you need to
          read papers, understand architectures, and talk shop with researchers.
        </p>
      </div>

      {/* Search box */}
      <div className="relative mb-4">
        <PhIcon
          name="magnifying-glass"
          size={12}
          color="var(--ga-fg3)"
          className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
        />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-secondary text-xs text-foreground px-3 py-2 pl-8 rounded focus:outline-none focus:ring-1 focus:ring-border placeholder-text-dim"
          placeholder="Search terms..."
        />
      </div>

      {/* Category filter tabs */}
      <div className="flex items-center gap-1 mb-4 overflow-x-auto pb-2">
        <button
          onClick={() => setCategoryFilter("all")}
          className={`text-xs px-3 py-2 rounded transition-colors whitespace-nowrap ${
            categoryFilter === "all"
              ? "bg-secondary text-foreground"
              : "text-muted-foreground hover:text-foreground hover:bg-muted"
          }`}
        >
          All
        </button>
        {Object.entries(glossaryCategoryLabels).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setCategoryFilter(key as CategoryFilter)}
            className={`text-xs px-3 py-2 rounded transition-colors whitespace-nowrap ${
              categoryFilter === key
                ? "bg-secondary text-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Alphabet jump bar */}
      <div className="flex flex-wrap items-center gap-0.5 mb-4">
        {alphabet.map((letter) => {
          const isActive = activeLetters.has(letter);
          return (
            <button
              key={letter}
              disabled={!isActive}
              onClick={() => {
                if (isActive) {
                  document
                    .getElementById(`glossary-letter-${letter}`)
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
              className={`w-6 h-6 flex items-center justify-center text-[10px] rounded transition-colors ${
                isActive
                  ? "text-foreground hover:bg-muted cursor-pointer"
                  : "text-text-dim/30 cursor-default"
              }`}
            >
              {letter}
            </button>
          );
        })}
      </div>

      {/* Terms list grouped by letter */}
      {grouped.length === 0 && (
        <div className="grid-card p-5 text-center">
          <p className="text-xs text-text-dim">
            No terms match your search.
          </p>
        </div>
      )}

      {grouped.map(([letter, terms]) => (
        <div key={letter} id={`glossary-letter-${letter}`} className="scroll-mt-20 mb-3">
          {/* Letter header */}
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-semibold text-foreground w-5">{letter}</span>
            <div className="h-px bg-border flex-1" />
          </div>

          {/* Term cards */}
          {terms.map((t) => (
            <div key={t.term} className="grid-card p-3 mb-1">
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-xs font-medium text-foreground">
                      {t.term}
                    </span>
                  </div>
                  <p className="text-[10px] text-muted-foreground leading-relaxed">
                    {t.definition}
                  </p>
                  {t.relatedModule && (
                    <span className="text-[10px] text-text-dim hover:text-foreground transition-colors inline-block mt-1">
                      &rarr; See: {getModuleTitle(t.relatedModule)}
                    </span>
                  )}
                </div>
                <span className={`${NEUTRAL_CHIP} shrink-0 mt-0.5`}>
                  {categoryAbbreviations[t.category]}
                </span>
              </div>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}
