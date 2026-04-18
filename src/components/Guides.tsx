import { useState } from "react";
import { ExternalLink, BookOpen } from "lucide-react";
import { guides, guideCategoryLabels } from "@/data/guides";

type Filter = "all" | string;

function getCategoryColor(cat: string): string {
  const map: Record<string, string> = {
    prompting: "text-yellow-400 border-yellow-400/30",
    agents: "text-blue-400 border-blue-400/30",
    enterprise: "text-green-400 border-green-400/30",
    learning: "text-purple-400 border-purple-400/30",
  };
  return map[cat] || "text-text-dim border-border";
}

function getCategoryShortLabel(cat: string): string {
  const map: Record<string, string> = {
    prompting: "PROMPT",
    agents: "AGENT",
    enterprise: "BIZ",
    learning: "LEARN",
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

export function GuidesSection() {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered =
    filter === "all" ? guides : guides.filter((g) => g.category === filter);

  return (
    <section id="guides" className="scroll-mt-20 mb-10">
      <div className="flex items-center gap-3 mb-4">
        <div className="h-px bg-border flex-1" />
        <span className="text-[10px] uppercase tracking-widest text-text-dim flex items-center gap-1.5">
          <BookOpen size={10} />
          Official Guides
        </span>
        <div className="h-px bg-border flex-1" />
      </div>

      <div className="grid-card p-5 relative corner-tl corner-tr mb-4">
        <h2 className="text-sm font-semibold text-accent mb-1">
          Official AI Guides & Playbooks
        </h2>
        <p className="text-xs text-text-muted leading-relaxed">
          {guides.length} curated guides from OpenAI, Google, Anthropic, and
          top practitioners — prompt engineering, building agents, enterprise
          AI, and learning tools.
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
        {Object.entries(guideCategoryLabels).map(([key, label]) => (
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
        {filtered.map((guide) => (
          <a
            key={guide.title}
            href={guide.url}
            target="_blank"
            rel="noopener noreferrer"
            className="grid-card group p-3 flex items-start gap-3 relative"
          >
            <img
              src={getFaviconUrl(guide.url)}
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
                  {guide.title}
                </span>
                <ExternalLink
                  size={9}
                  className="text-text-dim group-hover:text-text-muted transition-colors shrink-0"
                />
              </div>
              <div className="text-[10px] text-text-dim mb-1">
                {guide.author}
              </div>
              <p className="text-[10px] text-text-muted leading-relaxed line-clamp-2">
                {guide.description}
              </p>
            </div>
            <span
              className={`text-[8px] uppercase tracking-wider px-1 py-0.5 border shrink-0 mt-0.5 ${getCategoryColor(guide.category)}`}
            >
              {getCategoryShortLabel(guide.category)}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
