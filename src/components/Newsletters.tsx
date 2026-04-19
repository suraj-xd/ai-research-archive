// Refactored to General Agents brand — 2026-04-19
import { useState } from "react";
import { PhIcon, ZigDivider } from "@/components/brand";
import {
  newsletters,
  newsletterCategoryLabels,
  frequencyLabels,
} from "@/data/newsletters";

type Filter = "all" | string;

const NEUTRAL_CHIP =
  "inline-flex items-center px-2 py-0.5 rounded bg-secondary text-muted-foreground text-[10px] uppercase tracking-wider font-mono";

function getCategoryShortLabel(cat: string): string {
  const map: Record<string, string> = {
    newsletter: "NEWS",
    digest: "DGST",
    community: "COMM",
    podcast: "POD",
  };
  return map[cat] || cat.toUpperCase();
}

function getFaviconUrl(siteUrl: string): string {
  try {
    const domain = new URL(siteUrl).hostname;
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=32`;
  } catch {
    return "";
  }
}

export function NewslettersSection() {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered =
    filter === "all"
      ? newsletters
      : newsletters.filter((n) => n.category === filter);

  return (
    <section id="newsletters" className="scroll-mt-20 mb-10">
      <div className="my-4">
        <ZigDivider label="Newsletters and digests" width={420} />
      </div>

      <div className="grid-card p-5 relative mb-4">
        <h2 className="text-sm font-semibold text-foreground mb-1">
          Newsletters, digests and communities
        </h2>
        <p className="text-xs text-muted-foreground leading-relaxed">
          {newsletters.length} curated sources — the newsletters, digests,
          communities, and podcasts that keep you plugged into ML research and
          engineering.
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
        {Object.entries(newsletterCategoryLabels).map(([key, label]) => (
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
        {filtered.map((item) => (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="grid-card group p-3 flex items-start gap-3 relative"
          >
            <img
              src={getFaviconUrl(item.url)}
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
                  {item.name}
                </span>
                <span className="text-[8px] uppercase tracking-wider text-text-dim font-mono">
                  {frequencyLabels[item.frequency]}
                </span>
                <PhIcon
                  name="arrow-square-out"
                  size={9}
                  color="var(--ga-fg3)"
                  className="shrink-0"
                />
              </div>
              <div className="text-[10px] text-text-dim mb-1">
                {item.author}
              </div>
              <p className="text-[10px] text-muted-foreground leading-relaxed line-clamp-2">
                {item.description}
              </p>
            </div>
            <span className={`${NEUTRAL_CHIP} shrink-0 mt-0.5`}>
              {getCategoryShortLabel(item.category)}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
