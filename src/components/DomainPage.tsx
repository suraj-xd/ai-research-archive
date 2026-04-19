// Refactored to General Agents brand — 2026-04-19
import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import { PhIcon, ZigDivider } from "@/components/brand";
import { getFaviconUrl, getYouTubeId, getPreviewUrl } from "@/utils/previews";

export interface DomainResource {
  title: string;
  url: string;
  type: "book" | "course" | "tutorial" | "explainer" | "video" | "tool" | "paper" | "repo";
  author?: string;
}

export interface DomainSubtopic {
  id: string;
  label: string;
  resources: DomainResource[];
}

interface DomainPageProps {
  title: string;
  icon: LucideIcon;
  description: string;
  subtopics: DomainSubtopic[];
  generalResources: DomainResource[];
}

const NEUTRAL_CHIP =
  "inline-flex items-center px-2 py-0.5 rounded bg-secondary text-muted-foreground text-[10px] uppercase tracking-wider font-mono";

const typeLabels: Record<string, string> = {
  book: "BOOK",
  course: "COURSE",
  tutorial: "GUIDE",
  explainer: "EXPLAIN",
  video: "VIDEO",
  tool: "TOOL",
  paper: "PAPER",
  repo: "REPO",
};

function ResourceCard({ resource }: { resource: DomainResource }) {
  const ytId = getYouTubeId(resource.url);
  const preview = getPreviewUrl(resource.url);
  const isYt = !!ytId;

  if (preview) {
    return (
      <a
        href={resource.url}
        target="_blank"
        rel="noopener noreferrer"
        className="grid-card group relative overflow-hidden flex flex-col"
      >
        <div className={`relative ${isYt ? "aspect-video" : "aspect-[2/1]"} w-full overflow-hidden bg-bg`}>
          <img
            src={preview}
            alt=""
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
            onError={(e) => {
              (e.target as HTMLImageElement).parentElement!.style.display = "none";
            }}
          />
          {isYt && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
              <div className="w-10 h-10 rounded-full bg-red-600/90 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          )}
        </div>
        <div className="p-3 flex items-start gap-2">
          <img
            src={getFaviconUrl(resource.url)}
            alt=""
            className="w-4 h-4 mt-0.5 shrink-0"
            loading="lazy"
            onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
          />
          <div className="flex-1 min-w-0">
            <span className="text-xs font-medium text-foreground transition-colors line-clamp-2">
              {resource.title}
            </span>
            {resource.author && (
              <div className="text-[10px] text-text-dim mt-0.5">{resource.author}</div>
            )}
          </div>
          <span className={`${NEUTRAL_CHIP} shrink-0`}>
            {typeLabels[resource.type]}
          </span>
        </div>
      </a>
    );
  }

  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      className="grid-card group p-3 flex items-start gap-3 relative"
    >
      <img
        src={getFaviconUrl(resource.url)}
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
            {resource.title}
          </span>
          <PhIcon
            name="arrow-square-out"
            size={9}
            color="var(--ga-fg3)"
            className="shrink-0"
          />
        </div>
        {resource.author && (
          <div className="text-[10px] text-text-dim">{resource.author}</div>
        )}
      </div>
      <span className={`${NEUTRAL_CHIP} shrink-0 mt-0.5`}>
        {typeLabels[resource.type]}
      </span>
    </a>
  );
}

export function DomainPage({
  title,
  icon: Icon,
  description,
  subtopics,
  generalResources,
}: DomainPageProps) {
  const allLabel = "All";
  const tabs = [allLabel, ...subtopics.map((s) => s.label)];
  const [activeTab, setActiveTab] = useState(allLabel);

  const totalResources =
    subtopics.reduce((sum, s) => sum + s.resources.length, 0) +
    generalResources.length;

  const typeOrder: Record<string, number> = {
    book: 0,
    course: 1,
    video: 2,
    tutorial: 3,
    explainer: 4,
    tool: 5,
    repo: 6,
    paper: 7,
  };

  const unsorted =
    activeTab === allLabel
      ? [
          ...subtopics.flatMap((s) => s.resources),
          ...generalResources,
        ]
      : subtopics.find((s) => s.label === activeTab)?.resources ?? [];

  const visibleResources = [...unsorted].sort(
    (a, b) => (typeOrder[a.type] ?? 99) - (typeOrder[b.type] ?? 99)
  );

  return (
    <section className="scroll-mt-20 mb-10">
      <div className="my-4">
        <ZigDivider label={title} width={420} />
      </div>

      <div className="grid-card p-5 relative mb-4">
        <h2 className="text-sm font-semibold text-foreground mb-1">{title}</h2>
        <p className="text-xs text-muted-foreground leading-relaxed">
          {totalResources} resources — {description}
        </p>
      </div>

      {/* Subtopic tabs */}
      {subtopics.length > 0 && (
        <div className="flex items-center gap-1 mb-4 overflow-x-auto pb-2">
          {tabs.map((tab) => {
            const count =
              tab === allLabel
                ? totalResources
                : subtopics.find((s) => s.label === tab)?.resources.length ?? 0;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center gap-1.5 text-xs px-3 py-2 rounded transition-colors whitespace-nowrap ${
                  activeTab === tab
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {tab}
                <span className="text-[10px] text-text-dim">{count}</span>
              </button>
            );
          })}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {visibleResources.map((resource, i) => (
          <ResourceCard key={`${resource.url}-${i}`} resource={resource} />
        ))}
      </div>
    </section>
  );
}
