import {
  BookOpen,
  Play,
  Globe,
  ExternalLink,
  ArrowRight,
  Sparkles,
  RefreshCw,
  Tv,
} from "lucide-react";
import { useState } from "react";
import { modules, totalLessons, totalModules } from "@/data/curriculum";
import { books, playlists, platforms, channels } from "@/data/resources";

type ResourceTab = "all" | "books" | "videos" | "channels" | "resources";

export function HeroSection() {
  return (
    <>
      {/* Hero Section */}
      <section id="landing" className="scroll-mt-20 mb-8">
        <div className="grid-card p-6 sm:p-8 relative corner-tl corner-tr">
          <div className="flex items-center gap-2 mb-5">
            <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-text-dim border border-border px-2 py-1">
              <RefreshCw size={9} />
              Updated regularly
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-accent mb-3 tracking-tight leading-tight">
            Become an AI Researcher
          </h1>
          <p className="text-text-muted text-sm leading-relaxed max-w-2xl mb-6">
            A structured path from math fundamentals to building LLMs from
            scratch. {totalModules} modules, {totalLessons} lessons — covering
            everything from derivatives to transformers to reinforcement
            learning.
          </p>

          <div className="flex flex-wrap gap-2">
            <a
              href="https://www.notion.so/Math-Foundations-for-Machine-Learning-32174da94966803eb7e3c314e9e8d90b"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[11px] bg-bg-hover border border-border px-3 py-1.5 hover:border-border-hover transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 256 268" preserveAspectRatio="xMidYMid">
                <path fill="currentColor" d="M16.092 11.538 164.09.608c18.179-1.56 22.85-.508 34.28 7.801l47.243 33.282C253.406 47.414 256 48.975 256 55.207v182.527c0 11.439-4.155 18.205-18.696 19.24L65.44 267.378c-10.913.517-16.11-1.043-21.825-8.327L8.826 213.814C2.586 205.487 0 199.254 0 191.97V29.726c0-9.352 4.155-17.153 16.092-18.188Z"/>
                <path d="M164.09.608 16.092 11.538C4.155 12.573 0 20.374 0 29.726v162.245c0 7.284 2.585 13.516 8.826 21.843l34.789 45.237c5.715 7.284 10.912 8.844 21.825 8.327l171.864-10.404c14.532-1.035 18.696-7.801 18.696-19.24V55.207c0-5.911-2.336-7.614-9.21-12.66l-1.185-.856L198.37 8.409C186.94.1 182.27-.952 164.09.608ZM69.327 52.22c-14.033.945-17.216 1.159-25.186-5.323L23.876 30.778c-2.06-2.086-1.026-4.69 4.163-5.207l142.274-10.395c11.947-1.043 18.17 3.12 22.842 6.758l24.401 17.68c1.043.525 3.638 3.637.517 3.637L71.146 52.095l-1.819.125Zm-16.36 183.954V81.222c0-6.767 2.077-9.887 8.3-10.413L230.02 60.93c5.724-.517 8.31 3.12 8.31 9.879v153.917c0 6.767-1.044 12.49-10.387 13.008l-161.487 9.361c-9.343.517-13.489-2.594-13.489-10.921ZM212.377 89.53c1.034 4.681 0 9.362-4.681 9.897l-7.783 1.542v114.404c-6.758 3.637-12.981 5.715-18.18 5.715-8.308 0-10.386-2.604-16.609-10.396l-50.898-80.079v77.476l16.1 3.646s0 9.362-12.989 9.362l-35.814 2.077c-1.043-2.086 0-7.284 3.63-8.318l9.351-2.595V109.823l-12.98-1.052c-1.044-4.68 1.55-11.439 8.826-11.965l38.426-2.585 52.958 81.113v-71.76l-13.498-1.552c-1.043-5.733 3.111-9.896 8.3-10.404l35.84-2.087Z"/>
              </svg>
              Study Progress (Notion)
              <ExternalLink size={9} />
            </a>
          </div>
        </div>

        {/* Curriculum Structure Preview */}
        <div className="mt-4 grid-card p-5 relative corner-tl corner-tr">
          <div className="text-[10px] uppercase tracking-widest text-text-dim mb-3">
            Curriculum Structure
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {modules.map((module, i) => (
              <a
                key={module.id}
                href={`#${module.id}`}
                className="group flex items-start gap-2 p-2.5 border border-border hover:border-border-hover hover:bg-bg-hover transition-all"
              >
                <span className="text-[10px] text-text-dim font-mono mt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-text group-hover:text-accent transition-colors truncate">
                    {module.title}
                  </div>
                  <div className="text-[10px] text-text-dim mt-0.5">
                    {module.lessons.length} lessons
                  </div>
                </div>
                <ArrowRight
                  size={10}
                  className="text-text-dim group-hover:text-text-muted transition-colors mt-1 shrink-0"
                />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function ResourcesSection() {
  const [activeTab, setActiveTab] = useState<ResourceTab>("all");

  const tabs: { id: ResourceTab; label: string; icon: typeof BookOpen }[] = [
    { id: "all", label: "All", icon: Sparkles },
    { id: "books", label: "Books", icon: BookOpen },
    { id: "videos", label: "Playlists", icon: Play },
    { id: "channels", label: "Channels", icon: Tv },
    { id: "resources", label: "Resources", icon: Globe },
  ];

  return (
    <>
      <section id="resources" className="scroll-mt-20 mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px bg-border flex-1" />
          <span className="text-[10px] uppercase tracking-widest text-text-dim">
            Resources
          </span>
          <div className="h-px bg-border flex-1" />
        </div>

        {/* Resource Tabs */}
        <div className="flex items-center gap-1 mb-5 border-b border-border pb-3">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 text-xs px-3 py-2 transition-all border ${
                  activeTab === tab.id
                    ? "border-border-hover bg-bg-hover text-accent"
                    : "border-transparent text-text-muted hover:text-text hover:bg-bg-hover"
                }`}
              >
                <Icon size={12} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Books Grid */}
        {(activeTab === "all" || activeTab === "books") && (
          <div className="mb-6 fade-in">
            {activeTab === "all" && (
              <div className="text-[10px] uppercase tracking-widest text-text-dim mb-3 flex items-center gap-2">
                <BookOpen size={10} />
                Recommended Books
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {books.map((book) => (
                <a
                  key={book.title}
                  href={book.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid-card group p-4 relative corner-tl corner-tr flex flex-col"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span
                      className={`text-[9px] uppercase tracking-wider px-1.5 py-0.5 border ${
                        book.tag === "essential"
                          ? "text-green-400 border-green-400/30"
                          : book.tag === "recommended"
                            ? "text-blue-400 border-blue-400/30"
                            : book.tag === "advanced"
                              ? "text-orange-400 border-orange-400/30"
                              : book.tag === "foundation"
                                ? "text-purple-400 border-purple-400/30"
                                : book.tag === "agents"
                                  ? "text-blue-400 border-blue-400/30"
                                  : "text-text-dim border-border"
                      }`}
                    >
                      {book.tag}
                    </span>
                    <ExternalLink
                      size={10}
                      className="text-text-dim group-hover:text-text-muted transition-colors"
                    />
                  </div>
                  {book.coverUrl && (
                    <div className="mb-3 border border-border overflow-hidden aspect-[3/2]">
                      <img
                        src={book.coverUrl}
                        alt={book.title}
                        className="w-full h-full object-contain bg-bg group-hover:scale-[1.02] transition-transform duration-300"
                      />
                    </div>
                  )}
                  <h3 className="text-xs font-medium text-text group-hover:text-accent transition-colors mb-1">
                    {book.title}
                  </h3>
                  <p className="text-[11px] text-text-muted mb-2">
                    {book.author}
                  </p>
                  <p className="text-[11px] text-text-dim leading-relaxed mt-auto">
                    {book.description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* YouTube Playlists Grid */}
        {(activeTab === "all" || activeTab === "videos") && (
          <div className="mb-6 fade-in">
            {activeTab === "all" && (
              <div className="text-[10px] uppercase tracking-widest text-text-dim mb-3 flex items-center gap-2">
                <Play size={10} />
                YouTube Playlists
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {playlists.map((pl) => {
                const isYt = pl.url.includes("youtube.com") || pl.url.includes("youtu.be");
                return (
                  <a
                    key={pl.title}
                    href={pl.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid-card group relative corner-tl corner-tr flex flex-col overflow-hidden"
                  >
                    {isYt && (
                      <div className="h-0.5 bg-gradient-to-r from-red-600 via-red-500 to-red-600/0" />
                    )}
                    <div className="p-4 flex flex-col flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-1.5">
                          {isYt && (
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="#ff0000" className="shrink-0">
                              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                            </svg>
                          )}
                          <span className="text-[9px] uppercase tracking-wider text-youtube/80 border border-youtube/20 px-1.5 py-0.5">
                            {pl.tag}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 text-[10px] text-text-dim">
                          {pl.videoCount}
                        </div>
                      </div>
                      <h3 className="text-xs font-medium text-text group-hover:text-accent transition-colors mb-1">
                        {pl.title}
                      </h3>
                      <p className="text-[11px] text-text-muted mb-2">
                        {pl.channel}
                      </p>
                      <p className="text-[11px] text-text-dim leading-relaxed mt-auto">
                        {pl.description}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        )}

        {/* YouTube Channels Grid */}
        {(activeTab === "all" || activeTab === "channels") && (
          <div className="mb-6 fade-in">
            {activeTab === "all" && (
              <div className="text-[10px] uppercase tracking-widest text-text-dim mb-3 flex items-center gap-2">
                <Tv size={10} />
                YouTube Channels to Subscribe
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {channels.map((ch) => (
                <a
                  key={ch.name}
                  href={ch.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid-card group relative corner-tl corner-tr flex flex-col overflow-hidden"
                >
                  <div className="h-0.5 bg-gradient-to-r from-red-600 via-red-500 to-red-600/0" />
                  <div className="p-4 flex flex-col flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full shrink-0 overflow-hidden relative bg-red-400/10 text-red-400">
                        <div className="w-full h-full flex items-center justify-center text-[11px] font-semibold">
                          {ch.name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase()}
                        </div>
                        <img
                          src={`https://unavatar.io/youtube/${ch.handle.replace("@", "")}`}
                          alt=""
                          loading="lazy"
                          className="absolute inset-0 w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                          }}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xs font-medium text-text group-hover:text-accent transition-colors">
                          {ch.name}
                        </h3>
                        <p className="text-[10px] text-text-dim">
                          {ch.handle} &middot; {ch.subscribers}
                        </p>
                      </div>
                      <span className="text-[9px] uppercase tracking-wider text-youtube/80 border border-youtube/20 px-1.5 py-0.5 shrink-0">
                        {ch.tag}
                      </span>
                    </div>
                    <p className="text-[11px] text-text-dim leading-relaxed mt-auto">
                      {ch.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Platforms Grid */}
        {(activeTab === "all" || activeTab === "resources") && (
          <div className="mb-6 fade-in">
            {activeTab === "all" && (
              <div className="text-[10px] uppercase tracking-widest text-text-dim mb-3 flex items-center gap-2">
                <Globe size={10} />
                Learning Platforms & Tools
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {platforms.map((p) => (
                <a
                  key={p.title}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid-card group p-4 relative corner-tl corner-tr flex flex-col"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span
                      className={`text-[9px] uppercase tracking-wider px-1.5 py-0.5 border ${
                        p.tag === "live"
                          ? "text-green-400 border-green-400/30"
                          : p.tag === "free"
                            ? "text-blue-400 border-blue-400/30"
                            : p.tag === "code"
                              ? "text-orange-400 border-orange-400/30"
                              : "text-text-dim border-border"
                      }`}
                    >
                      {p.tag}
                    </span>
                    <ExternalLink
                      size={10}
                      className="text-text-dim group-hover:text-text-muted transition-colors"
                    />
                  </div>
                  <h3 className="text-xs font-medium text-text group-hover:text-accent transition-colors mb-1">
                    {p.title === "Notion — Study Tracker" ? (
                      <span className="flex items-center gap-1.5">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 100 100"
                          fill="currentColor"
                        >
                          <path d="M6.017 4.313l55.333-4.087c6.797-.583 8.543-.19 12.817 2.917l17.663 12.443c2.913 2.14 3.883 2.723 3.883 5.053v68.243c0 4.277-1.553 6.807-6.99 7.193L24.467 99.967c-4.08.193-6.023-.39-8.16-3.113L3.3 79.94c-2.333-3.113-3.3-5.443-3.3-8.167V11.113c0-3.497 1.553-6.413 6.017-6.8z" />
                        </svg>
                        {p.title}
                      </span>
                    ) : (
                      p.title
                    )}
                  </h3>
                  <p className="text-[11px] text-text-dim leading-relaxed mt-auto">
                    {p.description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
