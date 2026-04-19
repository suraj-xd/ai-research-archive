// Refactored to General Agents brand — 2026-04-19
import { useState } from "react";
import { modules, totalLessons, totalModules } from "@/data/curriculum";
import { books, playlists, platforms, channels } from "@/data/resources";
import { PhIcon, ZigDivider } from "@/components/brand";

type ResourceTab = "all" | "books" | "videos" | "channels" | "resources";

/** Best-effort favicon URL for a given resource URL. Returns null for
 *  relative paths (e.g. /books/foo.pdf) where there's no domain. */
function faviconFor(url: string, size = 64): string | null {
  try {
    const u = new URL(url, window.location.origin);
    if (u.origin === window.location.origin) return null;
    return `https://www.google.com/s2/favicons?domain=${u.hostname}&sz=${size}`;
  } catch {
    return null;
  }
}

/* ─── Hero ────────────────────────────────────────────────────── */

export function HeroSection() {
  return (
    <section id="landing" className="scroll-mt-20 mb-10">
      <div className="grid-card relative" style={{ padding: "32px 36px" }}>
        <div className="ga-mono-eyebrow" style={{ marginBottom: 14 }}>
          <PhIcon
            name="arrow-clockwise"
            size={11}
            color="var(--ga-fg2)"
            style={{ marginRight: 6, verticalAlign: "-1px" }}
          />
          Updated regularly
        </div>

        <h1
          style={{
            fontFamily: "var(--ga-font-sans)",
            fontWeight: 600,
            fontSize: 32,
            color: "var(--ga-fg1)",
            letterSpacing: "-0.01em",
            lineHeight: 1.1,
            margin: "0 0 12px",
          }}
        >
          Become an AI researcher
        </h1>

        <p
          style={{
            fontFamily: "var(--ga-font-sans)",
            fontSize: 15,
            color: "var(--ga-fg2)",
            lineHeight: 1.55,
            maxWidth: 580,
            margin: "0 0 24px",
          }}
        >
          A structured path from math fundamentals to building LLMs from
          scratch. {totalModules} modules, {totalLessons} lessons — covering
          everything from derivatives to transformers to reinforcement
          learning.
        </p>

        <a
          href="https://www.notion.so/Math-Foundations-for-Machine-Learning-32174da94966803eb7e3c314e9e8d90b"
          target="_blank"
          rel="noopener noreferrer"
          className="ga-btn ga-btn-secondary"
        >
          <svg
            width="14"
            height="14"
            preserveAspectRatio="xMidYMid"
            viewBox="0 0 256 268"
          >
            <path
              fill="#FFF"
              d="M16.092 11.538 164.09.608c18.179-1.56 22.85-.508 34.28 7.801l47.243 33.282C253.406 47.414 256 48.975 256 55.207v182.527c0 11.439-4.155 18.205-18.696 19.24L65.44 267.378c-10.913.517-16.11-1.043-21.825-8.327L8.826 213.814C2.586 205.487 0 199.254 0 191.97V29.726c0-9.352 4.155-17.153 16.092-18.188Z"
            />
            <path d="M164.09.608 16.092 11.538C4.155 12.573 0 20.374 0 29.726v162.245c0 7.284 2.585 13.516 8.826 21.843l34.789 45.237c5.715 7.284 10.912 8.844 21.825 8.327l171.864-10.404c14.532-1.035 18.696-7.801 18.696-19.24V55.207c0-5.911-2.336-7.614-9.21-12.66l-1.185-.856L198.37 8.409C186.94.1 182.27-.952 164.09.608ZM69.327 52.22c-14.033.945-17.216 1.159-25.186-5.323L23.876 30.778c-2.06-2.086-1.026-4.69 4.163-5.207l142.274-10.395c11.947-1.043 18.17 3.12 22.842 6.758l24.401 17.68c1.043.525 3.638 3.637.517 3.637L71.146 52.095l-1.819.125Zm-16.36 183.954V81.222c0-6.767 2.077-9.887 8.3-10.413L230.02 60.93c5.724-.517 8.31 3.12 8.31 9.879v153.917c0 6.767-1.044 12.49-10.387 13.008l-161.487 9.361c-9.343.517-13.489-2.594-13.489-10.921ZM212.377 89.53c1.034 4.681 0 9.362-4.681 9.897l-7.783 1.542v114.404c-6.758 3.637-12.981 5.715-18.18 5.715-8.308 0-10.386-2.604-16.609-10.396l-50.898-80.079v77.476l16.1 3.646s0 9.362-12.989 9.362l-35.814 2.077c-1.043-2.086 0-7.284 3.63-8.318l9.351-2.595V109.823l-12.98-1.052c-1.044-4.68 1.55-11.439 8.826-11.965l38.426-2.585 52.958 81.113v-71.76l-13.498-1.552c-1.043-5.733 3.111-9.896 8.3-10.404l35.84-2.087Z" />
          </svg>
          Study progress
          <PhIcon name="arrow-square-out" size={13} />
        </a>
      </div>

      {/* Curriculum tile preview */}
      <div className="grid-card mt-4" style={{ padding: 24 }}>
        <div className="ga-mono-label" style={{ marginBottom: 14 }}>
          Curriculum structure
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {modules.map((module, i) => (
            <a
              key={module.id}
              href={`#${module.id}`}
              className="group flex items-start gap-3 transition-colors"
              style={{
                padding: "10px 12px",
                borderRadius: 8,
                background: "var(--ga-sidebar)",
                color: "var(--ga-fg1)",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--ga-hover)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--ga-sidebar)";
              }}
            >
              <span
                style={{
                  fontFamily: "var(--ga-font-mono)",
                  fontSize: 11,
                  color: "var(--ga-fg3)",
                  marginTop: 1,
                  width: 18,
                  flexShrink: 0,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1 min-w-0">
                <div
                  style={{
                    fontFamily: "var(--ga-font-sans)",
                    fontSize: 13,
                    fontWeight: 500,
                    color: "var(--ga-fg1)",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {module.title}
                </div>
                <div
                  style={{
                    fontFamily: "var(--ga-font-mono)",
                    fontSize: 10,
                    color: "var(--ga-fg3)",
                    marginTop: 2,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                  }}
                >
                  {module.lessons.length} lessons
                </div>
              </div>
              <PhIcon
                name="arrow-right"
                size={12}
                color="var(--ga-fg3)"
                style={{ marginTop: 4 }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Resources ───────────────────────────────────────────────── */

export function ResourcesSection() {
  const [activeTab, setActiveTab] = useState<ResourceTab>("all");

  const tabs: { id: ResourceTab; label: string; icon: string }[] = [
    { id: "all", label: "All", icon: "sparkle" },
    { id: "books", label: "Books", icon: "book-open" },
    { id: "videos", label: "Playlists", icon: "play-circle" },
    { id: "channels", label: "Channels", icon: "television" },
    { id: "resources", label: "Platforms", icon: "globe" },
  ];

  return (
    <section id="resources" className="scroll-mt-20 mb-12">
      <div className="my-6">
        <ZigDivider label="Resources" width={420} />
      </div>

      {/* Tabs */}
      <div className="ga-tabs" style={{ marginBottom: 24 }}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className="ga-tab"
            data-active={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
          >
            <PhIcon
              name={tab.icon}
              size={13}
              color={activeTab === tab.id ? "var(--ga-fg1)" : "var(--ga-fg2)"}
            />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Books */}
      {(activeTab === "all" || activeTab === "books") && (
        <div className="mb-8 fade-in">
          {activeTab === "all" && (
            <div className="ga-mono-label" style={{ marginBottom: 12 }}>
              Recommended books
            </div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {books.map((book) => (
              <a
                key={book.title}
                href={book.url}
                target="_blank"
                rel="noopener noreferrer"
                className="grid-card group flex flex-col"
                style={{ padding: 16 }}
              >
                <div className="flex items-center justify-between" style={{ marginBottom: 12 }}>
                  <span
                    className="inline-flex items-center"
                    style={{
                      padding: "2px 8px",
                      borderRadius: 6,
                      background: "var(--ga-chip)",
                      color: "var(--ga-fg2)",
                      fontFamily: "var(--ga-font-mono)",
                      fontSize: 10,
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                    }}
                  >
                    {book.tag}
                  </span>
                  <PhIcon name="arrow-square-out" size={12} color="var(--ga-fg3)" />
                </div>
                {book.coverUrl && (
                  <div
                    className="overflow-hidden"
                    style={{
                      borderRadius: 6,
                      background: "var(--ga-chip)",
                      aspectRatio: "3 / 2",
                      marginBottom: 12,
                    }}
                  >
                    <img
                      src={book.coverUrl}
                      alt={book.title}
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                )}
                <h3
                  style={{
                    fontFamily: "var(--ga-font-sans)",
                    fontSize: 14,
                    fontWeight: 500,
                    color: "var(--ga-fg1)",
                    margin: "0 0 4px",
                    letterSpacing: "0.01em",
                  }}
                >
                  {book.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--ga-font-sans)",
                    fontSize: 12,
                    color: "var(--ga-fg2)",
                    margin: "0 0 8px",
                  }}
                >
                  {book.author}
                </p>
                <p
                  style={{
                    fontFamily: "var(--ga-font-sans)",
                    fontSize: 12,
                    color: "var(--ga-fg3)",
                    lineHeight: 1.5,
                    margin: 0,
                    marginTop: "auto",
                  }}
                >
                  {book.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Playlists */}
      {(activeTab === "all" || activeTab === "videos") && (
        <div className="mb-8 fade-in">
          {activeTab === "all" && (
            <div className="ga-mono-label" style={{ marginBottom: 12 }}>
              YouTube playlists
            </div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {playlists.map((pl) => (
              <a
                key={pl.title}
                href={pl.url}
                target="_blank"
                rel="noopener noreferrer"
                className="grid-card group flex flex-col"
                style={{ padding: 16 }}
              >
                <div className="flex items-center justify-between" style={{ marginBottom: 12 }}>
                  <span
                    className="inline-flex items-center"
                    style={{
                      padding: "2px 8px",
                      borderRadius: 6,
                      background: "var(--ga-chip)",
                      color: "var(--ga-fg2)",
                      fontFamily: "var(--ga-font-mono)",
                      fontSize: 10,
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                    }}
                  >
                    {pl.tag}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--ga-font-mono)",
                      fontSize: 10,
                      color: "var(--ga-fg3)",
                    }}
                  >
                    {pl.videoCount}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: "var(--ga-font-sans)",
                    fontSize: 14,
                    fontWeight: 500,
                    color: "var(--ga-fg1)",
                    margin: "0 0 4px",
                  }}
                >
                  {pl.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--ga-font-sans)",
                    fontSize: 12,
                    color: "var(--ga-fg2)",
                    margin: "0 0 8px",
                  }}
                >
                  {pl.channel}
                </p>
                <p
                  style={{
                    fontFamily: "var(--ga-font-sans)",
                    fontSize: 12,
                    color: "var(--ga-fg3)",
                    lineHeight: 1.5,
                    margin: 0,
                    marginTop: "auto",
                  }}
                >
                  {pl.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Channels */}
      {(activeTab === "all" || activeTab === "channels") && (
        <div className="mb-8 fade-in">
          {activeTab === "all" && (
            <div className="ga-mono-label" style={{ marginBottom: 12 }}>
              YouTube channels
            </div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {channels.map((ch) => (
              <a
                key={ch.name}
                href={ch.url}
                target="_blank"
                rel="noopener noreferrer"
                className="grid-card group flex flex-col"
                style={{ padding: 16 }}
              >
                <div className="flex items-start" style={{ gap: 12, marginBottom: 12 }}>
                  <div
                    className="rounded-full overflow-hidden relative shrink-0"
                    style={{ width: 40, height: 40, background: "var(--ga-chip)" }}
                  >
                    <div
                      className="w-full h-full flex items-center justify-center"
                      style={{
                        fontFamily: "var(--ga-font-sans)",
                        fontSize: 12,
                        fontWeight: 600,
                        color: "var(--ga-fg2)",
                      }}
                    >
                      {ch.name
                        .split(" ")
                        .map((w) => w[0])
                        .join("")
                        .slice(0, 2)
                        .toUpperCase()}
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
                    <h3
                      style={{
                        fontFamily: "var(--ga-font-sans)",
                        fontSize: 14,
                        fontWeight: 500,
                        color: "var(--ga-fg1)",
                        margin: 0,
                      }}
                    >
                      {ch.name}
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--ga-font-mono)",
                        fontSize: 10,
                        color: "var(--ga-fg3)",
                        margin: "2px 0 0",
                        letterSpacing: "0.02em",
                      }}
                    >
                      {ch.handle} · {ch.subscribers}
                    </p>
                  </div>
                  <span
                    className="inline-flex items-center shrink-0"
                    style={{
                      padding: "2px 8px",
                      borderRadius: 6,
                      background: "var(--ga-chip)",
                      color: "var(--ga-fg2)",
                      fontFamily: "var(--ga-font-mono)",
                      fontSize: 10,
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                    }}
                  >
                    {ch.tag}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "var(--ga-font-sans)",
                    fontSize: 12,
                    color: "var(--ga-fg3)",
                    lineHeight: 1.5,
                    margin: 0,
                    marginTop: "auto",
                  }}
                >
                  {ch.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Platforms */}
      {(activeTab === "all" || activeTab === "resources") && (
        <div className="mb-8 fade-in">
          {activeTab === "all" && (
            <div className="ga-mono-label" style={{ marginBottom: 12 }}>
              Platforms & tools
            </div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {platforms.map((p) => {
              const favicon = faviconFor(p.url);
              return (
                <a
                  key={p.title}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid-card group flex flex-col"
                  style={{ padding: 16 }}
                >
                  <div className="flex items-center justify-between" style={{ marginBottom: 12 }}>
                    <span
                      className="inline-flex items-center"
                      style={{
                        padding: "2px 8px",
                        borderRadius: 6,
                        background: "var(--ga-chip)",
                        color: "var(--ga-fg2)",
                        fontFamily: "var(--ga-font-mono)",
                        fontSize: 10,
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                      }}
                    >
                      {p.tag}
                    </span>
                    <PhIcon name="arrow-square-out" size={12} color="var(--ga-fg3)" />
                  </div>
                  <div
                    className="flex items-start"
                    style={{ gap: 10, marginBottom: 8 }}
                  >
                    {favicon ? (
                      <img
                        src={favicon}
                        alt=""
                        loading="lazy"
                        width={24}
                        height={24}
                        style={{
                          width: 24,
                          height: 24,
                          borderRadius: 5,
                          flexShrink: 0,
                          background: "var(--ga-chip)",
                        }}
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    ) : (
                      <div
                        style={{
                          width: 24,
                          height: 24,
                          borderRadius: 5,
                          flexShrink: 0,
                          background: "var(--ga-chip)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "var(--ga-fg2)",
                        }}
                      >
                        <PhIcon name="globe" size={12} color="var(--ga-fg2)" />
                      </div>
                    )}
                    <h3
                      style={{
                        fontFamily: "var(--ga-font-sans)",
                        fontSize: 14,
                        fontWeight: 500,
                        color: "var(--ga-fg1)",
                        margin: 0,
                        lineHeight: 1.3,
                      }}
                    >
                      {p.title}
                    </h3>
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--ga-font-sans)",
                      fontSize: 12,
                      color: "var(--ga-fg3)",
                      lineHeight: 1.5,
                      margin: 0,
                      marginTop: "auto",
                    }}
                  >
                    {p.description}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
