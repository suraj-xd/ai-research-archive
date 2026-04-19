// Refactored to General Agents brand — 2026-04-19
import { useState } from "react";
import { ZigDivider } from "@/components/brand";
import { articles, articleCategoryLabels } from "@/data/articles";
import { getFaviconUrl, getPreviewUrl } from "@/utils/previews";

type Filter = "all" | string;

const NEUTRAL_CHIP =
  "inline-flex items-center px-2 py-0.5 rounded bg-secondary text-muted-foreground text-[10px] uppercase tracking-wider font-mono";

export function ArticlesSection() {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered =
    filter === "all" ? articles : articles.filter((a) => a.category === filter);

  return (
    <section id="articles" className="scroll-mt-20 mb-10">
      <div className="my-4">
        <ZigDivider label="Articles" width={420} />
      </div>

      <div className="grid-card p-5 relative mb-4">
        <h2 className="text-sm font-semibold text-foreground mb-1">
          Must-read articles and tips
        </h2>
        <p className="text-xs text-muted-foreground leading-relaxed">
          {articles.length} essential reads — the blog posts, papers, and
          guides that shaped how the ML community thinks and builds.
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
        {Object.entries(articleCategoryLabels).map(([key, label]) => (
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
        {filtered.map((article) => {
          const preview = getPreviewUrl(article.url);
          const catLabel = article.category === "tutorial"
            ? "TUT"
            : article.category === "insight"
              ? "READ"
              : article.category === "guide"
                ? "GUIDE"
                : "PAPER";

          return (
            <a
              key={article.title}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="grid-card group flex flex-col overflow-hidden relative"
            >
              {preview && (
                <div className="aspect-[2/1] w-full overflow-hidden bg-bg">
                  <img
                    src={preview}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                    onError={(e) => {
                      (e.target as HTMLImageElement).parentElement!.style.display = "none";
                    }}
                  />
                </div>
              )}
              <div className="p-3 flex items-start gap-2 flex-1">
                <img
                  src={getFaviconUrl(article.url)}
                  alt=""
                  className="w-4 h-4 mt-0.5 shrink-0"
                  loading="lazy"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                />
                <div className="flex-1 min-w-0">
                  <span className="text-xs font-medium text-foreground transition-colors line-clamp-2">
                    {article.title}
                  </span>
                  <div className="text-[10px] text-text-dim mt-0.5">
                    {article.author}
                  </div>
                  <p className="text-[10px] text-muted-foreground leading-relaxed line-clamp-2 mt-1">
                    {article.description}
                  </p>
                </div>
                <span className={`${NEUTRAL_CHIP} shrink-0`}>
                  {catLabel}
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
