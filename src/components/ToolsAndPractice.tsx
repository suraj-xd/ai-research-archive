// Refactored to General Agents brand — 2026-04-19
import { useState } from "react";
import { PhIcon, ZigDivider } from "@/components/brand";
import { tools, practiceSites, toolCategoryLabels, practiceCategoryLabels } from "@/data/tools";

type ToolFilter = "all" | string;

const NEUTRAL_CHIP =
  "inline-flex items-center px-2 py-0.5 rounded bg-secondary text-muted-foreground text-[10px] uppercase tracking-wider font-mono";

function getFaviconUrl(siteUrl: string): string {
  try {
    const domain = new URL(siteUrl).hostname;
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=32`;
  } catch {
    return "";
  }
}

interface CardProps {
  name: string;
  description: string;
  url: string;
  category: string;
  categoryLabels: Record<string, string>;
}

function ResourceCard({ name, description, url, category, categoryLabels }: CardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="grid-card group p-3 flex items-start gap-3 relative"
    >
      <img
        src={getFaviconUrl(url)}
        alt=""
        className="w-5 h-5 mt-0.5 shrink-0"
        loading="lazy"
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5 mb-0.5">
          <span className="text-xs font-medium text-foreground transition-colors truncate">
            {name}
          </span>
          <PhIcon
            name="arrow-square-out"
            size={9}
            color="var(--ga-fg3)"
            className="shrink-0"
          />
        </div>
        <p className="text-[10px] text-muted-foreground leading-relaxed line-clamp-2">
          {description}
        </p>
      </div>
      <span className={`${NEUTRAL_CHIP} shrink-0 mt-0.5`}>
        {(categoryLabels[category] || category).split(" ")[0].slice(0, 5).toUpperCase()}
      </span>
    </a>
  );
}

export function ToolsSection() {
  const [filter, setFilter] = useState<ToolFilter>("all");

  const allCategories = Object.keys(toolCategoryLabels);
  const filtered = filter === "all" ? tools : tools.filter((t) => t.category === filter);

  return (
    <section id="tools" className="scroll-mt-20 mb-10">
      <div className="my-4">
        <ZigDivider label="Tools" width={420} />
      </div>

      <div className="grid-card p-5 relative mb-4">
        <h2 className="text-sm font-semibold text-foreground mb-1">
          Tools for machine learning
        </h2>
        <p className="text-xs text-muted-foreground leading-relaxed">
          {tools.length} essential tools, frameworks, and platforms for ML research and development.
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
        {allCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`text-xs px-3 py-2 rounded transition-colors whitespace-nowrap ${
              filter === cat
                ? "bg-secondary text-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            }`}
          >
            {toolCategoryLabels[cat]}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {filtered.map((tool) => (
          <ResourceCard
            key={tool.name}
            {...tool}
            categoryLabels={toolCategoryLabels}
          />
        ))}
      </div>

      {/* arXiv ML Term Cloud */}
      <div className="mt-4 grid-card p-4 relative">
        <div className="flex items-start gap-3">
          <img
            src={getFaviconUrl("https://ml-digest.ftl.cc")}
            alt=""
            className="w-5 h-5 mt-0.5 shrink-0"
            loading="lazy"
          />
          <div className="flex-1">
            <a
              href="https://ml-digest.ftl.cc/cloud/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-foreground transition-colors inline-flex items-center gap-1.5"
            >
              arXiv ML term cloud
              <PhIcon name="arrow-square-out" size={9} color="var(--ga-fg3)" />
            </a>
            <p className="text-[10px] text-muted-foreground leading-relaxed mt-0.5">
              Click any term to open full-corpus search results. See what the ML research community is talking about right now.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PracticeSection() {
  const [filter, setFilter] = useState<ToolFilter>("all");

  const allCategories = Object.keys(practiceCategoryLabels);
  const filtered = filter === "all" ? practiceSites : practiceSites.filter((p) => p.category === filter);

  return (
    <section id="practice" className="scroll-mt-20 mb-10">
      <div className="my-4">
        <ZigDivider label="Practice" width={420} />
      </div>

      <div className="grid-card p-5 relative mb-4">
        <h2 className="text-sm font-semibold text-foreground mb-1">
          LeetCode for machine learning
        </h2>
        <p className="text-xs text-muted-foreground leading-relaxed">
          {practiceSites.length} places to practice ML skills — competitions, interactive visualizations, hands-on courses, and coding exercises.
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
        {allCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`text-xs px-3 py-2 rounded transition-colors whitespace-nowrap ${
              filter === cat
                ? "bg-secondary text-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            }`}
          >
            {practiceCategoryLabels[cat]}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {filtered.map((site) => (
          <ResourceCard
            key={site.name}
            {...site}
            categoryLabels={practiceCategoryLabels}
          />
        ))}
      </div>
    </section>
  );
}
