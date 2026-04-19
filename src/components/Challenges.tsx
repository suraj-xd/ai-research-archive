// Refactored to General Agents brand — 2026-04-19
import { useState } from "react";
import { PhIcon, ZigDivider } from "@/components/brand";
import {
  challenges,
  challengeCategoryLabels,
  difficultyLabels,
} from "@/data/challenges";
import type { Challenge } from "@/data/challenges";

type CategoryFilter = "all" | string;
type DifficultyFilter = "all" | number;

function categoryShortLabel(cat: string): string {
  if (cat === "beginner") return "BGN";
  if (cat === "intermediate") return "INT";
  if (cat === "advanced") return "ADV";
  return "RES";
}

function DifficultyDots({ level }: { level: number }) {
  return (
    <span className="inline-flex items-center gap-[2px]">
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className="inline-block w-[5px] h-[5px] rounded-full"
          style={{
            background:
              i < level ? "var(--ga-fg1)" : "var(--ga-divider)",
          }}
        />
      ))}
    </span>
  );
}

function ChallengeCard({ challenge }: { challenge: Challenge }) {
  const [hintsOpen, setHintsOpen] = useState(false);

  return (
    <div className="grid-card group p-4 flex flex-col gap-2">
      {/* Header row */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <span className="text-xs font-medium text-foreground transition-colors">
            {challenge.title}
          </span>
        </div>
        <span className="inline-flex items-center px-2 py-0.5 rounded bg-secondary text-muted-foreground text-[10px] uppercase tracking-wider font-mono shrink-0 mt-0.5">
          {categoryShortLabel(challenge.category)}
        </span>
      </div>

      {/* Difficulty */}
      <div className="flex items-center gap-2">
        <DifficultyDots level={challenge.difficulty} />
        <span className="text-[10px] text-text-dim">
          {difficultyLabels[challenge.difficulty]}
        </span>
      </div>

      {/* Description */}
      <p className="text-[10px] text-muted-foreground leading-relaxed">
        {challenge.description}
      </p>

      {/* Objective */}
      <div>
        <span className="ga-mono-label">Objective</span>
        <p className="text-[10px] text-muted-foreground leading-relaxed mt-0.5">
          {challenge.objective}
        </p>
      </div>

      {/* Prerequisites */}
      <div>
        <span className="ga-mono-label">Prerequisites</span>
        <div className="flex flex-wrap gap-1 mt-1">
          {challenge.prerequisites.map((prereq) => (
            <span
              key={prereq}
              className="inline-flex items-center px-2 py-0.5 rounded bg-secondary text-muted-foreground text-[10px] font-mono"
            >
              {prereq}
            </span>
          ))}
        </div>
      </div>

      {/* Tools */}
      <div>
        <span className="ga-mono-label">Tools</span>
        <div className="flex flex-wrap gap-1 mt-1">
          {challenge.tools.map((tool) => (
            <span
              key={tool}
              className="inline-flex items-center px-2 py-0.5 rounded bg-secondary text-muted-foreground text-[10px] font-mono"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* Hints (expandable) */}
      <button
        onClick={() => setHintsOpen((prev) => !prev)}
        className="flex items-center gap-1 text-[10px] text-text-dim hover:text-muted-foreground transition-colors mt-1"
      >
        <PhIcon
          name={hintsOpen ? "caret-down" : "caret-right"}
          size={10}
          color="currentColor"
        />
        <span>
          {hintsOpen ? "Hide" : "Show"} {challenge.hints.length} hint
          {challenge.hints.length !== 1 ? "s" : ""}
        </span>
      </button>
      {hintsOpen && (
        <div
          className="flex flex-col gap-1 pl-3"
          style={{ borderLeft: "1px solid var(--ga-divider)" }}
        >
          {challenge.hints.map((hint, i) => (
            <p key={i} className="text-[10px] text-muted-foreground leading-relaxed">
              <span className="text-text-dim mr-1">{i + 1}.</span>
              {hint}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export function ChallengesSection() {
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>("all");
  const [difficultyFilter, setDifficultyFilter] =
    useState<DifficultyFilter>("all");

  const filtered = challenges.filter((c) => {
    const matchesCat =
      categoryFilter === "all" || c.category === categoryFilter;
    const matchesDiff =
      difficultyFilter === "all" || c.difficulty === difficultyFilter;
    return matchesCat && matchesDiff;
  });

  return (
    <section id="challenges" className="scroll-mt-20 mb-10">
      {/* Header divider */}
      <div className="my-4">
        <ZigDivider label="Challenges" width={420} />
      </div>

      {/* Hero card */}
      <div className="grid-card p-5 mb-4">
        <h2 className="text-sm font-semibold text-foreground mb-1">
          Research challenges
        </h2>
        <p className="text-xs text-muted-foreground leading-relaxed">
          {challenges.length} hands-on challenges from beginner to research
          level — build real projects, implement papers, and push the
          boundaries of what you know.
        </p>
      </div>

      {/* Category filters */}
      <div className="flex items-center gap-1 mb-2 overflow-x-auto pb-2">
        <button
          onClick={() => setCategoryFilter("all")}
          className={`text-xs px-3 py-2 rounded transition-all whitespace-nowrap ${
            categoryFilter === "all"
              ? "bg-secondary text-foreground"
              : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
          }`}
        >
          All
        </button>
        {Object.entries(challengeCategoryLabels).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setCategoryFilter(key)}
            className={`text-xs px-3 py-2 rounded transition-all whitespace-nowrap ${
              categoryFilter === key
                ? "bg-secondary text-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Difficulty filters */}
      <div className="flex items-center gap-1 mb-4 overflow-x-auto pb-2">
        <button
          onClick={() => setDifficultyFilter("all")}
          className={`text-xs px-3 py-2 rounded transition-all whitespace-nowrap ${
            difficultyFilter === "all"
              ? "bg-secondary text-foreground"
              : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
          }`}
        >
          Any difficulty
        </button>
        {Object.entries(difficultyLabels).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setDifficultyFilter(Number(key))}
            className={`text-xs px-3 py-2 rounded transition-all whitespace-nowrap flex items-center gap-1.5 ${
              difficultyFilter === Number(key)
                ? "bg-secondary text-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            }`}
          >
            <DifficultyDots level={Number(key)} />
            {label}
          </button>
        ))}
      </div>

      {/* Challenge cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {filtered.map((challenge) => (
          <ChallengeCard key={challenge.id} challenge={challenge} />
        ))}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="grid-card p-5 text-center">
          <p className="text-xs text-muted-foreground">
            No challenges match the current filters.
          </p>
        </div>
      )}
    </section>
  );
}
