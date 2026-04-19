// Refactored to General Agents brand — 2026-04-19
import { useState } from "react";
import { PhIcon, ZigDivider } from "@/components/brand";
import { guides, guideCategoryLabels } from "@/data/guides";

type Filter = "all" | string;

const NEUTRAL_CHIP =
  "inline-flex items-center px-2 py-0.5 rounded bg-secondary text-muted-foreground text-[10px] uppercase tracking-wider font-mono";

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
      <div className="my-4">
        <ZigDivider label="Official guides" width={420} />
      </div>

      <div className="grid-card p-5 relative mb-4">
        <h2 className="text-sm font-semibold text-foreground mb-1">
          Official AI guides and playbooks
        </h2>
        <p className="text-xs text-muted-foreground leading-relaxed">
          {guides.length} curated guides from OpenAI, Google, Anthropic, and
          top practitioners — prompt engineering, building agents, enterprise
          AI, and learning tools.
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
        {Object.entries(guideCategoryLabels).map(([key, label]) => (
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
                <span className="text-xs font-medium text-foreground transition-colors">
                  {guide.title}
                </span>
                <PhIcon
                  name="arrow-square-out"
                  size={9}
                  color="var(--ga-fg3)"
                  className="shrink-0"
                />
              </div>
              <div className="text-[10px] text-text-dim mb-1">
                {guide.author}
              </div>
              <p className="text-[10px] text-muted-foreground leading-relaxed line-clamp-2">
                {guide.description}
              </p>
            </div>
            <span className={`${NEUTRAL_CHIP} shrink-0 mt-0.5`}>
              {getCategoryShortLabel(guide.category)}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
