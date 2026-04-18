import { useState } from "react";
import { Target, ChevronDown, ChevronRight } from "lucide-react";
import {
  challenges,
  challengeCategoryLabels,
  difficultyLabels,
} from "@/data/challenges";
import type { Challenge } from "@/data/challenges";

type CategoryFilter = "all" | string;
type DifficultyFilter = "all" | number;

function getCategoryColor(cat: string): string {
  const map: Record<string, string> = {
    beginner: "text-green-400 border-green-400/30",
    intermediate: "text-blue-400 border-blue-400/30",
    advanced: "text-orange-400 border-orange-400/30",
    research: "text-red-400 border-red-400/30",
  };
  return map[cat] || "text-text-dim border-border";
}

function DifficultyDots({ level }: { level: number }) {
  return (
    <span className="inline-flex items-center gap-[2px]">
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className={`inline-block w-[5px] h-[5px] rounded-full ${
            i < level ? "bg-accent" : "bg-border"
          }`}
        />
      ))}
    </span>
  );
}

function ChallengeCard({ challenge }: { challenge: Challenge }) {
  const [hintsOpen, setHintsOpen] = useState(false);

  return (
    <div className="grid-card group p-4 flex flex-col gap-2 relative">
      {/* Header row */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <span className="text-xs font-medium text-text group-hover:text-accent transition-colors">
            {challenge.title}
          </span>
        </div>
        <span
          className={`text-[8px] uppercase tracking-wider px-1 py-0.5 border shrink-0 mt-0.5 ${getCategoryColor(challenge.category)}`}
        >
          {challenge.category === "beginner"
            ? "BGN"
            : challenge.category === "intermediate"
              ? "INT"
              : challenge.category === "advanced"
                ? "ADV"
                : "RES"}
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
      <p className="text-[10px] text-text-muted leading-relaxed">
        {challenge.description}
      </p>

      {/* Objective */}
      <div>
        <span className="text-[10px] text-text-dim uppercase tracking-wider">
          Objective
        </span>
        <p className="text-[10px] text-text-muted leading-relaxed mt-0.5">
          {challenge.objective}
        </p>
      </div>

      {/* Prerequisites */}
      <div>
        <span className="text-[10px] text-text-dim uppercase tracking-wider">
          Prerequisites
        </span>
        <div className="flex flex-wrap gap-1 mt-1">
          {challenge.prerequisites.map((prereq) => (
            <span
              key={prereq}
              className="text-[9px] px-1.5 py-0.5 border border-border text-text-muted"
            >
              {prereq}
            </span>
          ))}
        </div>
      </div>

      {/* Tools */}
      <div>
        <span className="text-[10px] text-text-dim uppercase tracking-wider">
          Tools
        </span>
        <div className="flex flex-wrap gap-1 mt-1">
          {challenge.tools.map((tool) => (
            <span
              key={tool}
              className="text-[9px] px-1.5 py-0.5 border border-accent/20 text-accent/70"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* Hints (expandable) */}
      <button
        onClick={() => setHintsOpen((prev) => !prev)}
        className="flex items-center gap-1 text-[10px] text-text-dim hover:text-text-muted transition-colors mt-1"
      >
        {hintsOpen ? <ChevronDown size={10} /> : <ChevronRight size={10} />}
        <span>
          {hintsOpen ? "Hide" : "Show"} {challenge.hints.length} hint
          {challenge.hints.length !== 1 ? "s" : ""}
        </span>
      </button>
      {hintsOpen && (
        <div className="flex flex-col gap-1 pl-3 border-l border-border">
          {challenge.hints.map((hint, i) => (
            <p key={i} className="text-[10px] text-text-muted leading-relaxed">
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
      <div className="flex items-center gap-3 mb-4">
        <div className="h-px bg-border flex-1" />
        <span className="text-[10px] uppercase tracking-widest text-text-dim flex items-center gap-1.5">
          <Target size={10} />
          Challenges
        </span>
        <div className="h-px bg-border flex-1" />
      </div>

      {/* Hero card */}
      <div className="grid-card p-5 relative corner-tl corner-tr mb-4">
        <h2 className="text-sm font-semibold text-accent mb-1">
          Research Challenges
        </h2>
        <p className="text-xs text-text-muted leading-relaxed">
          {challenges.length} hands-on challenges from beginner to research
          level — build real projects, implement papers, and push the
          boundaries of what you know.
        </p>
      </div>

      {/* Category filters */}
      <div className="flex items-center gap-1 mb-2 overflow-x-auto pb-2">
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
        {Object.entries(challengeCategoryLabels).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setCategoryFilter(key)}
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

      {/* Difficulty filters */}
      <div className="flex items-center gap-1 mb-4 overflow-x-auto pb-2">
        <button
          onClick={() => setDifficultyFilter("all")}
          className={`text-xs px-3 py-2 transition-all border whitespace-nowrap ${
            difficultyFilter === "all"
              ? "border-border-hover bg-bg-hover text-accent"
              : "border-transparent text-text-muted hover:text-text hover:bg-bg-hover"
          }`}
        >
          Any Difficulty
        </button>
        {Object.entries(difficultyLabels).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setDifficultyFilter(Number(key))}
            className={`text-xs px-3 py-2 transition-all border whitespace-nowrap flex items-center gap-1.5 ${
              difficultyFilter === Number(key)
                ? "border-border-hover bg-bg-hover text-accent"
                : "border-transparent text-text-muted hover:text-text hover:bg-bg-hover"
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
          <p className="text-xs text-text-muted">
            No challenges match the current filters.
          </p>
        </div>
      )}
    </section>
  );
}
