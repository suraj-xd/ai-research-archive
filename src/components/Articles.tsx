import { useState } from "react";
import { FileText } from "lucide-react";
import { articles, articleCategoryLabels } from "@/data/articles";
import { getFaviconUrl, getPreviewUrl } from "@/utils/previews";

type Filter = "all" | string;

function getCategoryColor(cat: string): string {
  const map: Record<string, string> = {
    tutorial: "text-blue-400 border-blue-400/30",
    insight: "text-orange-400 border-orange-400/30",
    guide: "text-green-400 border-green-400/30",
    research: "text-purple-400 border-purple-400/30",
  };
  return map[cat] || "text-text-dim border-border";
}

export function ArticlesSection() {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered =
    filter === "all" ? articles : articles.filter((a) => a.category === filter);

  return (
    <section id="articles" className="scroll-mt-20 mb-10">
      <div className="flex items-center gap-3 mb-4">
        <div className="h-px bg-border flex-1" />
        <span className="text-[10px] uppercase tracking-widest text-text-dim flex items-center gap-1.5">
          <FileText size={10} />
          Articles
        </span>
        <div className="h-px bg-border flex-1" />
      </div>

      <div className="grid-card p-5 relative corner-tl corner-tr mb-4">
        <h2 className="text-sm font-semibold text-accent mb-1">
          Must-Read Articles & Tips
        </h2>
        <p className="text-xs text-text-muted leading-relaxed">
          {articles.length} essential reads — the blog posts, papers, and
          guides that shaped how the ML community thinks and builds.
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
        {Object.entries(articleCategoryLabels).map(([key, label]) => (
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
                  <span className="text-xs font-medium text-text group-hover:text-accent transition-colors line-clamp-2">
                    {article.title}
                  </span>
                  <div className="text-[10px] text-text-dim mt-0.5">
                    {article.author}
                  </div>
                  <p className="text-[10px] text-text-muted leading-relaxed line-clamp-2 mt-1">
                    {article.description}
                  </p>
                </div>
                <span
                  className={`text-[8px] uppercase tracking-wider px-1 py-0.5 border shrink-0 ${getCategoryColor(article.category)}`}
                >
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
