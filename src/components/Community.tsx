// Refactored to General Agents brand — 2026-04-19
import { useState } from "react";
import { PhIcon, ZigDivider } from "@/components/brand";
import {
  xProfiles,
  communityServers,
  type XProfile,
  type CommunityServer,
} from "@/data/community";
import {
  organizations,
  type Organization,
} from "@/data/organizations";

type CategoryFilter = "all" | XProfile["category"];
type OrgFilter = "all" | Organization["category"];
type PlatformFilter = "all" | CommunityServer["platform"];

const NEUTRAL_CHIP =
  "inline-flex items-center px-2 py-0.5 rounded bg-secondary text-muted-foreground text-[10px] uppercase tracking-wider font-mono";

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function getDomain(url: string): string {
  try {
    return new URL(url).hostname.replace("www.", "");
  } catch {
    return "";
  }
}

function DiscordIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
    </svg>
  );
}

function RedditIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
    </svg>
  );
}

const NEUTRAL_AVATAR = "bg-secondary text-muted-foreground";

export function Community() {
  const [filter, setFilter] = useState<CategoryFilter>("all");
  const [orgFilter, setOrgFilter] = useState<OrgFilter>("all");
  const [platformFilter, setPlatformFilter] = useState<PlatformFilter>("all");

  const filters: { id: CategoryFilter; label: string }[] = [
    { id: "all", label: "All" },
    { id: "researcher", label: "Researchers" },
    { id: "educator", label: "Educators" },
    { id: "builder", label: "Builders" },
    { id: "creator", label: "Leaders" },
  ];

  const filtered =
    filter === "all"
      ? xProfiles
      : xProfiles.filter((p) => p.category === filter);

  const categoryShortLabel = (cat: XProfile["category"]): string =>
    cat === "researcher"
      ? "RES"
      : cat === "educator"
        ? "EDU"
        : cat === "builder"
          ? "BUILD"
          : "LEAD";

  const orgShortLabel = (cat: Organization["category"]): string =>
    cat === "lab"
      ? "LAB"
      : cat === "bigtech"
        ? "TECH"
        : cat === "startup"
          ? "NEW"
          : cat === "academic"
            ? "ACAD"
            : "GOV";

  return (
    <section id="community" className="scroll-mt-20 mb-10">
      <div className="my-4">
        <ZigDivider label="Community" width={420} />
      </div>

      {/* Header */}
      <div className="grid-card p-5 relative mb-4">
        <h2 className="text-sm font-semibold text-foreground mb-1">
          Who to follow on X
        </h2>
        <p className="text-xs text-muted-foreground leading-relaxed">
          {xProfiles.length} people and accounts in the ML/AI space worth
          following — researchers, educators, builders, and thinkers who share
          resources, papers, and insights.
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex items-center gap-1 mb-4 overflow-x-auto pb-2">
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={`flex items-center gap-1.5 text-xs px-3 py-2 rounded transition-colors whitespace-nowrap ${
              filter === f.id
                ? "bg-secondary text-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            }`}
          >
            {f.label}
            {f.id !== "all" && (
              <span className="text-[10px] text-text-dim">
                {xProfiles.filter((p) =>
                  f.id === "all" ? true : p.category === f.id
                ).length}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Profiles Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {filtered.map((profile) => (
          <a
            key={profile.handle}
            href={`https://x.com/${profile.handle}`}
            target="_blank"
            rel="noopener noreferrer"
            className="grid-card group p-3 flex items-start gap-3 relative"
          >
            {/* Avatar */}
            <div
              className={`w-10 h-10 rounded-full shrink-0 overflow-hidden relative ${NEUTRAL_AVATAR}`}
            >
              <div className="w-full h-full flex items-center justify-center text-[11px] font-semibold">
                {getInitials(profile.name)}
              </div>
              <img
                src={`https://unavatar.io/x/${profile.handle}`}
                alt=""
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 mb-0.5">
                <span className="text-xs font-medium text-foreground transition-colors truncate">
                  {profile.name}
                </span>
                <PhIcon
                  name="arrow-square-out"
                  size={9}
                  color="var(--ga-fg3)"
                  className="shrink-0"
                />
              </div>
              <div className="text-[10px] text-text-dim mb-1">
                @{profile.handle}
              </div>
              <p className="text-[10px] text-muted-foreground leading-relaxed line-clamp-2">
                {profile.description}
              </p>
            </div>

            {/* Category badge */}
            <span className={`${NEUTRAL_CHIP} shrink-0 mt-0.5`}>
              {categoryShortLabel(profile.category)}
            </span>
          </a>
        ))}
      </div>

      {/* Organizations Section */}
      <div className="mt-8">
        <div className="grid-card p-5 relative mb-4">
          <div className="flex items-center gap-2 mb-1">
            <PhIcon name="buildings" size={14} color="var(--ga-fg2)" />
            <h2 className="text-sm font-semibold text-foreground">
              AI research organizations
            </h2>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            {organizations.length} labs, companies, and institutions pushing the
            frontier of AI research — from Silicon Valley to Beijing to Europe.
          </p>
        </div>

        {/* Org Filters */}
        <div className="flex items-center gap-1 mb-4 overflow-x-auto pb-2">
          {(
            [
              { id: "all", label: "All" },
              { id: "lab", label: "Frontier Labs" },
              { id: "bigtech", label: "Big Tech" },
              { id: "startup", label: "Startups" },
              { id: "academic", label: "Academic" },
              { id: "gov", label: "Government" },
            ] as { id: OrgFilter; label: string }[]
          ).map((f) => (
            <button
              key={f.id}
              onClick={() => setOrgFilter(f.id)}
              className={`flex items-center gap-1.5 text-xs px-3 py-2 rounded transition-colors whitespace-nowrap ${
                orgFilter === f.id
                  ? "bg-secondary text-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Org Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {(orgFilter === "all"
            ? organizations
            : organizations.filter((o) => o.category === orgFilter)
          ).map((org) => (
            <a
              key={org.name}
              href={org.url}
              target="_blank"
              rel="noopener noreferrer"
              className="grid-card group p-3 flex items-start gap-3 relative"
            >
              <div
                className={`w-10 h-10 rounded-full shrink-0 overflow-hidden relative ${NEUTRAL_AVATAR}`}
              >
                <div className="w-full h-full flex items-center justify-center text-[11px] font-semibold">
                  {getInitials(org.name)}
                </div>
                <img
                  src={`https://www.google.com/s2/favicons?domain=${getDomain(org.url)}&sz=64`}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-contain p-1.5"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="text-xs font-medium text-foreground transition-colors truncate">
                    {org.name}
                  </span>
                  <PhIcon
                    name="arrow-square-out"
                    size={9}
                    color="var(--ga-fg3)"
                    className="shrink-0"
                  />
                </div>
                <div className="text-[10px] text-text-dim mb-1">
                  {org.country}
                </div>
                <p className="text-[10px] text-muted-foreground leading-relaxed line-clamp-2">
                  {org.description}
                </p>
              </div>
              <span className={`${NEUTRAL_CHIP} shrink-0 mt-0.5`}>
                {orgShortLabel(org.category)}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Twitter, Discord & Reddit Communities */}
      <div className="mt-8">
        <div className="grid-card p-5 relative mb-4">
          <div className="flex items-center gap-2 mb-1">
            <PhIcon name="chat-circle" size={14} color="var(--ga-fg2)" />
            <h2 className="text-sm font-semibold text-foreground">
              Twitter, Discord & Reddit communities
            </h2>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            {communityServers.length} active communities for discussion,
            collaboration, and staying up-to-date with ML/AI developments.
          </p>
        </div>

        {/* Platform Filters */}
        <div className="flex items-center gap-1 mb-4 overflow-x-auto pb-2">
          {(
            [
              { id: "all", label: "All" },
              { id: "twitter", label: "X" },
              { id: "discord", label: "Discord" },
              { id: "reddit", label: "Reddit" },
            ] as { id: PlatformFilter; label: string }[]
          ).map((f) => (
            <button
              key={f.id}
              onClick={() => setPlatformFilter(f.id)}
              className={`flex items-center gap-1.5 text-xs px-3 py-2 rounded transition-colors whitespace-nowrap ${
                platformFilter === f.id
                  ? "bg-secondary text-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {f.id === "twitter" && <PhIcon name="x-logo" size={12} color="currentColor" />}
              {f.id === "discord" && <DiscordIcon size={12} />}
              {f.id === "reddit" && <RedditIcon size={12} />}
              {f.label}
              <span className="text-[10px] text-text-dim">
                {f.id === "all"
                  ? communityServers.length
                  : communityServers.filter((s) => s.platform === f.id).length}
              </span>
            </button>
          ))}
        </div>

        {/* Community Servers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {(platformFilter === "all"
            ? communityServers
            : communityServers.filter((s) => s.platform === platformFilter)
          ).map((server) => (
            <a
              key={server.url}
              href={server.url}
              target="_blank"
              rel="noopener noreferrer"
              className="grid-card group p-3 flex items-start gap-3 relative"
            >
              <div className="w-9 h-9 flex items-center justify-center shrink-0 rounded bg-secondary text-muted-foreground">
                {server.platform === "discord" ? (
                  <DiscordIcon size={18} />
                ) : server.platform === "reddit" ? (
                  <RedditIcon size={18} />
                ) : (
                  <PhIcon name="x-logo" size={16} color="currentColor" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-medium text-foreground transition-colors truncate">
                    {server.name}
                  </span>
                  <PhIcon
                    name="arrow-square-out"
                    size={9}
                    color="var(--ga-fg3)"
                    className="shrink-0"
                  />
                </div>
              </div>
              <span className={`${NEUTRAL_CHIP} shrink-0 mt-0.5`}>
                {server.platform === "discord"
                  ? "DISCORD"
                  : server.platform === "reddit"
                    ? "REDDIT"
                    : "X COMMUNITY"}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
