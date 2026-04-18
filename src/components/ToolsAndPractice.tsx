import { useState } from "react";
import { ExternalLink, Wrench, Dumbbell } from "lucide-react";
import { tools, practiceSites, toolCategoryLabels, practiceCategoryLabels } from "@/data/tools";

type ToolFilter = "all" | string;

function getFaviconUrl(siteUrl: string): string {
  try {
    const domain = new URL(siteUrl).hostname;
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=32`;
  } catch {
    return "";
  }
}

function getCategoryColor(cat: string): string {
  const map: Record<string, string> = {
    notebook: "text-blue-400 border-blue-400/30",
    platform: "text-green-400 border-green-400/30",
    framework: "text-purple-400 border-purple-400/30",
    visualization: "text-orange-400 border-orange-400/30",
    data: "text-red-400 border-red-400/30",
    deployment: "text-blue-400 border-blue-400/30",
    competition: "text-red-400 border-red-400/30",
    exercises: "text-green-400 border-green-400/30",
    interactive: "text-purple-400 border-purple-400/30",
    courses: "text-orange-400 border-orange-400/30",
  };
  return map[cat] || "text-text-dim border-border";
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
          <span className="text-xs font-medium text-text group-hover:text-accent transition-colors truncate">
            {name}
          </span>
          <ExternalLink
            size={9}
            className="text-text-dim group-hover:text-text-muted transition-colors shrink-0"
          />
        </div>
        <p className="text-[10px] text-text-muted leading-relaxed line-clamp-2">
          {description}
        </p>
      </div>
      <span
        className={`text-[8px] uppercase tracking-wider px-1 py-0.5 border shrink-0 mt-0.5 ${getCategoryColor(category)}`}
      >
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
      <div className="flex items-center gap-3 mb-4">
        <div className="h-px bg-border flex-1" />
        <span className="text-[10px] uppercase tracking-widest text-text-dim flex items-center gap-1.5">
          <Wrench size={10} />
          Tools
        </span>
        <div className="h-px bg-border flex-1" />
      </div>

      <div className="grid-card p-5 relative corner-tl corner-tr mb-4">
        <h2 className="text-sm font-semibold text-accent mb-1">
          Tools for Machine Learning
        </h2>
        <p className="text-xs text-text-muted leading-relaxed">
          {tools.length} essential tools, frameworks, and platforms for ML research and development.
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
        {allCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`text-xs px-3 py-2 transition-all border whitespace-nowrap ${
              filter === cat
                ? "border-border-hover bg-bg-hover text-accent"
                : "border-transparent text-text-muted hover:text-text hover:bg-bg-hover"
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
      <div className="mt-4 grid-card p-4 relative corner-tl corner-tr">
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
              className="text-xs font-medium text-text hover:text-accent transition-colors inline-flex items-center gap-1.5"
            >
              arXiv ML Term Cloud
              <ExternalLink size={9} className="text-text-dim" />
            </a>
            <p className="text-[10px] text-text-muted leading-relaxed mt-0.5">
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
      <div className="flex items-center gap-3 mb-4">
        <div className="h-px bg-border flex-1" />
        <span className="text-[10px] uppercase tracking-widest text-text-dim flex items-center gap-1.5">
          <Dumbbell size={10} />
          Practice
        </span>
        <div className="h-px bg-border flex-1" />
      </div>

      <div className="grid-card p-5 relative corner-tl corner-tr mb-4">
        <h2 className="text-sm font-semibold text-accent mb-1">
          LeetCode for Machine Learning
        </h2>
        <p className="text-xs text-text-muted leading-relaxed">
          {practiceSites.length} places to practice ML skills — competitions, interactive visualizations, hands-on courses, and coding exercises.
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
        {allCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`text-xs px-3 py-2 transition-all border whitespace-nowrap ${
              filter === cat
                ? "border-border-hover bg-bg-hover text-accent"
                : "border-transparent text-text-muted hover:text-text hover:bg-bg-hover"
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
