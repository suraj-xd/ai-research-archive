import { useState } from "react";
import { ExternalLink, Mail } from "lucide-react";
import {
  newsletters,
  newsletterCategoryLabels,
  frequencyLabels,
} from "@/data/newsletters";

type Filter = "all" | string;

function getCategoryColor(cat: string): string {
  const map: Record<string, string> = {
    newsletter: "text-blue-400 border-blue-400/30",
    digest: "text-green-400 border-green-400/30",
    community: "text-purple-400 border-purple-400/30",
    podcast: "text-orange-400 border-orange-400/30",
  };
  return map[cat] || "text-text-dim border-border";
}

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
      <div className="flex items-center gap-3 mb-4">
        <div className="h-px bg-border flex-1" />
        <span className="text-[10px] uppercase tracking-widest text-text-dim flex items-center gap-1.5">
          <Mail size={10} />
          Newsletters & Digests
        </span>
        <div className="h-px bg-border flex-1" />
      </div>

      <div className="grid-card p-5 relative corner-tl corner-tr mb-4">
        <h2 className="text-sm font-semibold text-accent mb-1">
          Newsletters, Digests & Communities
        </h2>
        <p className="text-xs text-text-muted leading-relaxed">
          {newsletters.length} curated sources — the newsletters, digests,
          communities, and podcasts that keep you plugged into ML research and
          engineering.
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
        {Object.entries(newsletterCategoryLabels).map(([key, label]) => (
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
                <span className="text-xs font-medium text-text group-hover:text-accent transition-colors">
                  {item.name}
                </span>
                <span
                  className={`text-[8px] uppercase tracking-wider opacity-60 ${getCategoryColor(item.category).split(" ")[0]}`}
                >
                  {frequencyLabels[item.frequency]}
                </span>
                <ExternalLink
                  size={9}
                  className="text-text-dim group-hover:text-text-muted transition-colors shrink-0"
                />
              </div>
              <div className="text-[10px] text-text-dim mb-1">
                {item.author}
              </div>
              <p className="text-[10px] text-text-muted leading-relaxed line-clamp-2">
                {item.description}
              </p>
            </div>
            <span
              className={`text-[8px] uppercase tracking-wider px-1 py-0.5 border shrink-0 mt-0.5 ${getCategoryColor(item.category)}`}
            >
              {getCategoryShortLabel(item.category)}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
