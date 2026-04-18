import { useState } from "react";
import { Brain } from "lucide-react";
import {
  interviewQuestions,
  interviewCategoryLabels,
  difficultyColors,
} from "@/data/interviews";

type Filter = "all" | string;

function getCategoryColor(cat: string): string {
  const map: Record<string, string> = {
    "core-ml": "text-blue-400 border-blue-400/30",
    llms: "text-purple-400 border-purple-400/30",
    "system-design": "text-orange-400 border-orange-400/30",
    python: "text-green-400 border-green-400/30",
    cv: "text-cyan-400 border-cyan-400/30",
  };
  return map[cat] || "text-text-dim border-border";
}

export function InterviewsSection() {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered =
    filter === "all"
      ? interviewQuestions
      : interviewQuestions.filter((q) => q.category === filter);

  return (
    <section id="interviews" className="scroll-mt-20 mb-10">
      <div className="flex items-center gap-3 mb-4">
        <div className="h-px bg-border flex-1" />
        <span className="text-[10px] uppercase tracking-widest text-text-dim flex items-center gap-1.5">
          <Brain size={10} />
          Interview Prep
        </span>
        <div className="h-px bg-border flex-1" />
      </div>

      <div className="grid-card p-5 relative corner-tl corner-tr mb-4">
        <h2 className="text-sm font-semibold text-accent mb-1">
          Interview Questions
        </h2>
        <p className="text-xs text-text-muted leading-relaxed">
          {interviewQuestions.length} curated questions across ML fundamentals,
          LLMs, system design, and Python — the topics that come up in real AI
          interviews.
        </p>
      </div>

      <div className="flex items-center gap-1 mb-4 overflow-x-auto pb-2">
        <button
          onClick={() => setFilter("all")}
          className={`text-xs px-3 py-2 transition-all border whitespace-nowrap ${
            filter === "all"
              ? "border-border-hover bg-bg-hover text-accent"
              : "border-transparent text-text-muted hover:text-text hover:bg-bg-hover"
          }`}
        >
          All
        </button>
        {Object.entries(interviewCategoryLabels).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={`text-xs px-3 py-2 transition-all border whitespace-nowrap ${
              filter === key
                ? "border-border-hover bg-bg-hover text-accent"
                : "border-transparent text-text-muted hover:text-text hover:bg-bg-hover"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {filtered.map((q) => (
          <div
            key={q.question}
            className="grid-card group p-3 flex flex-col gap-2 relative"
          >
            <div className="flex items-start justify-between gap-2">
              <span className="text-xs font-medium text-text leading-relaxed">
                {q.question}
              </span>
              <span
                className={`text-[8px] uppercase tracking-wider px-1 py-0.5 border shrink-0 mt-0.5 ${difficultyColors[q.difficulty]}`}
              >
                {q.difficulty}
              </span>
            </div>
            <div className="flex items-center gap-1.5 flex-wrap">
              <span
                className={`text-[8px] uppercase tracking-wider px-1 py-0.5 border ${getCategoryColor(q.category)}`}
              >
                {interviewCategoryLabels[q.category]}
              </span>
              {q.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[8px] text-text-dim border border-border px-1 py-0.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
