import { useState, useMemo } from "react";
import { BookOpen, Search } from "lucide-react";
import {
  glossaryTerms,
  glossaryCategoryLabels,
} from "@/data/glossary";
import type { GlossaryTerm } from "@/data/glossary";
import { modules } from "@/data/curriculum";

type CategoryFilter = "all" | GlossaryTerm["category"];

const categoryColors: Record<GlossaryTerm["category"], string> = {
  fundamentals: "text-blue-400 border-blue-400/30",
  architecture: "text-purple-400 border-purple-400/30",
  training: "text-green-400 border-green-400/30",
  deployment: "text-orange-400 border-orange-400/30",
  research: "text-red-400 border-red-400/30",
};

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
      <div className="flex items-center gap-3 mb-4">
        <div className="h-px bg-border flex-1" />
        <span className="text-[10px] uppercase tracking-widest text-text-dim flex items-center gap-1.5">
          <BookOpen size={10} />
          Glossary
        </span>
        <div className="h-px bg-border flex-1" />
      </div>

      {/* Hero card */}
      <div className="grid-card p-5 relative corner-tl corner-tr mb-4">
        <h2 className="text-sm font-semibold text-accent mb-1">
          AI / ML Glossary
        </h2>
        <p className="text-xs text-text-muted leading-relaxed">
          {glossaryTerms.length} essential terms — the vocabulary you need to
          read papers, understand architectures, and talk shop with researchers.
        </p>
      </div>

      {/* Search box */}
      <div className="relative mb-4">
        <Search
          size={12}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-text-dim pointer-events-none"
        />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-bg-hover border border-border text-xs text-text px-3 py-2 pl-8 focus:outline-none focus:border-border-hover placeholder-text-dim"
          placeholder="Search terms..."
        />
      </div>

      {/* Category filter tabs */}
      <div className="flex items-center gap-1 mb-4 overflow-x-auto pb-2">
        <button
          onClick={() => setCategoryFilter("all")}
          className={`text-xs px-3 py-2 transition-all border whitespace-nowrap ${
            categoryFilter === "all"
              ? "border-border-hover bg-bg-hover text-accent"
              : "border-transparent text-text-muted hover:text-text hover:bg-bg-hover"
          }`}
        >
          All
        </button>
        {Object.entries(glossaryCategoryLabels).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setCategoryFilter(key as CategoryFilter)}
            className={`text-xs px-3 py-2 transition-all border whitespace-nowrap ${
              categoryFilter === key
                ? "border-border-hover bg-bg-hover text-accent"
                : "border-transparent text-text-muted hover:text-text hover:bg-bg-hover"
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
              className={`w-6 h-6 flex items-center justify-center text-[10px] transition-colors ${
                isActive
                  ? "text-accent hover:bg-bg-hover cursor-pointer"
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
            <span className="text-xs font-semibold text-accent w-5">{letter}</span>
            <div className="h-px bg-border flex-1" />
          </div>

          {/* Term cards */}
          {terms.map((t) => (
            <div key={t.term} className="grid-card p-3 mb-1">
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-xs font-medium text-accent">
                      {t.term}
                    </span>
                  </div>
                  <p className="text-[10px] text-text-muted leading-relaxed">
                    {t.definition}
                  </p>
                  {t.relatedModule && (
                    <span className="text-[10px] text-text-dim hover:text-accent transition-colors inline-block mt-1">
                      &rarr; See: {getModuleTitle(t.relatedModule)}
                    </span>
                  )}
                </div>
                <span
                  className={`text-[8px] uppercase tracking-wider px-1 py-0.5 border shrink-0 mt-0.5 ${categoryColors[t.category]}`}
                >
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
