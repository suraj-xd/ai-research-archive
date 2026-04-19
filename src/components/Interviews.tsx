// Refactored to General Agents brand — 2026-04-19
import { useState } from "react";
import { ZigDivider } from "@/components/brand";
import {
  interviewQuestions,
  interviewCategoryLabels,
} from "@/data/interviews";

type Filter = "all" | string;

const NEUTRAL_CHIP =
  "inline-flex items-center px-2 py-0.5 rounded bg-secondary text-muted-foreground text-[10px] uppercase tracking-wider font-mono";

export function InterviewsSection() {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered =
    filter === "all"
      ? interviewQuestions
      : interviewQuestions.filter((q) => q.category === filter);

  return (
    <section id="interviews" className="scroll-mt-20 mb-10">
      <div className="my-4">
        <ZigDivider label="Interview prep" width={420} />
      </div>

      <div className="grid-card p-5 relative mb-4">
        <h2 className="text-sm font-semibold text-foreground mb-1">
          Interview questions
        </h2>
        <p className="text-xs text-muted-foreground leading-relaxed">
          {interviewQuestions.length} curated questions across ML fundamentals,
          LLMs, system design, and Python — the topics that come up in real AI
          interviews.
        </p>
      </div>

      <div className="flex items-center gap-1 mb-4 overflow-x-auto pb-2">
        <button
          onClick={() => setFilter("all")}
          className={`text-xs px-3 py-2 rounded transition-colors whitespace-nowrap ${
            filter === "all"
              ? "bg-secondary text-foreground"
              : "text-muted-foreground hover:text-foreground hover:bg-muted"
          }`}
        >
          All
        </button>
        {Object.entries(interviewCategoryLabels).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={`text-xs px-3 py-2 rounded transition-colors whitespace-nowrap ${
              filter === key
                ? "bg-secondary text-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
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
              <span className="text-xs font-medium text-foreground leading-relaxed">
                {q.question}
              </span>
              <span className={`${NEUTRAL_CHIP} shrink-0 mt-0.5`}>
                {q.difficulty}
              </span>
            </div>
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className={NEUTRAL_CHIP}>
                {interviewCategoryLabels[q.category]}
              </span>
              {q.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] text-muted-foreground bg-muted px-2 py-0.5 rounded font-mono"
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
