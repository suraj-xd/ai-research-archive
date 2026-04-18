import { useState } from "react";
import { ExternalLink, FlaskConical } from "lucide-react";
import { papers, paperCategoryLabels } from "@/data/papers";

type Filter = "all" | string;

function getCategoryColor(cat: string): string {
  const map: Record<string, string> = {
    architecture: "text-purple-400 border-purple-400/30",
    training: "text-blue-400 border-blue-400/30",
    reasoning: "text-orange-400 border-orange-400/30",
    rag: "text-green-400 border-green-400/30",
    agents: "text-cyan-400 border-cyan-400/30",
    efficiency: "text-yellow-400 border-yellow-400/30",
    foundational: "text-amber-400 border-amber-400/30",
    "ilya-30u30": "text-rose-400 border-rose-400/30",
  };
  return map[cat] || "text-text-dim border-border";
}

function getCategoryShortLabel(cat: string): string {
  const map: Record<string, string> = {
    architecture: "ARCH",
    training: "TRAIN",
    reasoning: "REASON",
    rag: "RAG",
    agents: "AGENT",
    efficiency: "OPTIM",
    foundational: "FOUND",
    "ilya-30u30": "ILYA",
  };
  return map[cat] || cat.toUpperCase().slice(0, 5);
}

function getFaviconUrl(siteUrl: string): string {
  try {
    const domain = new URL(siteUrl).hostname;
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=32`;
  } catch {
    return "";
  }
}

export function PapersSection() {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered =
    filter === "all" ? papers : papers.filter((p) => p.category === filter);

  return (
    <section id="papers" className="scroll-mt-20 mb-10">
      <div className="flex items-center gap-3 mb-4">
        <div className="h-px bg-border flex-1" />
        <span className="text-[10px] uppercase tracking-widest text-text-dim flex items-center gap-1.5">
          <FlaskConical size={10} />
          Research Papers
        </span>
        <div className="h-px bg-border flex-1" />
      </div>

      <div className="grid-card p-5 relative corner-tl corner-tr mb-4">
        <h2 className="text-sm font-semibold text-accent mb-1">
          Key Research Papers
        </h2>
        <p className="text-xs text-text-muted leading-relaxed">
          {papers.length} landmark and cutting-edge papers — the research
          that shapes how models are built, trained, and deployed today.
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
        {Object.entries(paperCategoryLabels).map(([key, label]) => (
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {filtered.map((paper) => (
          <a
            key={paper.title}
            href={paper.url}
            target="_blank"
            rel="noopener noreferrer"
            className="grid-card group p-3 flex items-start gap-3 relative"
          >
            <img
              src={getFaviconUrl(paper.url)}
              alt=""
              className="w-5 h-5 mt-0.5 shrink-0"
              loading="lazy"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 mb-0.5">
                <span className="text-xs font-medium text-text group-hover:text-accent transition-colors">
                  {paper.title}
                </span>
                <ExternalLink
                  size={9}
                  className="text-text-dim group-hover:text-text-muted transition-colors shrink-0"
                />
              </div>
              <div className="text-[10px] text-text-dim mb-1">
                {paper.authors}
              </div>
              <p className="text-[10px] text-text-muted leading-relaxed line-clamp-3">
                {paper.description}
              </p>
            </div>
            <span
              className={`text-[8px] uppercase tracking-wider px-1 py-0.5 border shrink-0 mt-0.5 ${getCategoryColor(paper.category)}`}
            >
              {getCategoryShortLabel(paper.category)}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
