// Refactored to General Agents brand — 2026-04-19
import { useState } from "react";
import { PhIcon, ZigDivider } from "@/components/brand";
import { miscResources, miscCategoryLabels } from "@/data/misc";
import { getFaviconUrl, getPreviewUrl } from "@/utils/previews";

type Filter = "all" | string;

const NEUTRAL_CHIP =
  "inline-flex items-center px-2 py-0.5 rounded bg-secondary text-muted-foreground text-[10px] uppercase tracking-wider font-mono";

export default function MiscPage() {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered =
    filter === "all"
      ? miscResources
      : miscResources.filter((r) => r.category === filter);

  const categories = Object.keys(miscCategoryLabels);

  return (
    <section className="scroll-mt-20 mb-10">
      <div className="my-4">
        <ZigDivider label="Misc & Inspiration" width={420} />
      </div>

      <div className="grid-card p-5 relative mb-4">
        <h2 className="text-sm font-semibold text-foreground mb-1">
          Misc & Inspiration
        </h2>
        <p className="text-xs text-muted-foreground leading-relaxed">
          {miscResources.length} interesting reads beyond ML — computer science,
          engineering, physics, philosophy, career advice, and more.
        </p>
      </div>

      <div className="flex items-center gap-1 mb-4 overflow-x-auto pb-2">
        <button
          onClick={() => setFilter("all")}
          className={`flex items-center gap-1.5 text-xs px-3 py-2 rounded transition-colors whitespace-nowrap ${
            filter === "all"
              ? "bg-secondary text-foreground"
              : "text-muted-foreground hover:text-foreground hover:bg-muted"
          }`}
        >
          All
          <span className="text-[10px] text-text-dim">{miscResources.length}</span>
        </button>
        {categories.map((cat) => {
          const count = miscResources.filter((r) => r.category === cat).length;
          if (count === 0) return null;
          return (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`flex items-center gap-1.5 text-xs px-3 py-2 rounded transition-colors whitespace-nowrap ${
                filter === cat
                  ? "bg-secondary text-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {miscCategoryLabels[cat]}
              <span className="text-[10px] text-text-dim">{count}</span>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {filtered.map((resource) => {
          const preview = getPreviewUrl(resource.url);
          return (
            <a
              key={resource.url}
              href={resource.url}
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
              <div className="p-3 flex items-start gap-2">
                <img
                  src={getFaviconUrl(resource.url)}
                  alt=""
                  className="w-4 h-4 mt-0.5 shrink-0"
                  loading="lazy"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                />
                <div className="flex-1 min-w-0">
                  <span className="text-xs font-medium text-foreground transition-colors">
                    {resource.title}
                  </span>
                </div>
                <span className={`${NEUTRAL_CHIP} shrink-0`}>
                  {miscCategoryLabels[resource.category]?.slice(0, 5).toUpperCase() ?? "MISC"}
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
