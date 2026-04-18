import { useState, useEffect, useRef } from "react";
import { ExternalLink, Users } from "lucide-react";
import { studyBuddies, studyTweets, TWEETS_PER_PAGE } from "@/data/studyWithMe";

declare global {
  interface Window {
    twttr?: {
      widgets: {
        createTweet: (
          id: string,
          el: HTMLElement,
          options?: Record<string, unknown>
        ) => Promise<HTMLElement>;
      };
    };
  }
}

function getInitials(name: string): string {
  return name.slice(0, 2).toUpperCase();
}

// Load Twitter widgets.js once
let twttrLoading: Promise<void> | null = null;
function loadTwitterWidgets(): Promise<void> {
  if (window.twttr) return Promise.resolve();
  if (twttrLoading) return twttrLoading;
  twttrLoading = new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    script.onload = () => resolve();
    document.head.appendChild(script);
  });
  return twttrLoading;
}

function TwitterEmbed({ tweetId, isDark }: { tweetId: string; isDark: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!containerRef.current) return;
    const parent = containerRef.current;
    while (parent.firstChild) parent.removeChild(parent.firstChild);

    // Fresh wrapper per effect — cleanup removes it so stale
    // async createTweet injections land in a detached node
    const wrapper = document.createElement("div");
    parent.appendChild(wrapper);
    setLoading(true);
    let cancelled = false;

    loadTwitterWidgets().then(() => {
      if (cancelled || !window.twttr) return;
      window.twttr.widgets
        .createTweet(tweetId, wrapper, {
          theme: isDark ? "dark" : "light",
          dnt: true,
          conversation: "none",
        })
        .then(() => {
          if (!cancelled) setLoading(false);
        });
    });

    return () => {
      cancelled = true;
      wrapper.remove();
    };
  }, [tweetId, isDark]);

  return (
    <div className="min-h-[200px]">
      {loading && (
        <div className="grid-card p-6 animate-pulse flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-bg-hover" />
            <div className="flex-1">
              <div className="h-3 bg-bg-hover w-24 mb-1" />
              <div className="h-2 bg-bg-hover w-16" />
            </div>
          </div>
          <div className="h-3 bg-bg-hover w-full" />
          <div className="h-3 bg-bg-hover w-3/4" />
          <div className="h-24 bg-bg-hover" />
        </div>
      )}
      <div ref={containerRef} />
    </div>
  );
}

export default function StudyWithMePage() {
  const [visibleCount, setVisibleCount] = useState(TWEETS_PER_PAGE);
  const [isDark, setIsDark] = useState(true);
  const displayedTweets = studyTweets.slice(0, visibleCount);
  const hasMore = visibleCount < studyTweets.length;
  const remaining = studyTweets.length - visibleCount;

  useEffect(() => {
    const check = () =>
      setIsDark(document.documentElement.classList.contains("dark"));
    check();
    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="mb-10">
      {/* Section divider */}
      <div className="flex items-center gap-3 mb-6">
        <div className="h-px bg-border flex-1" />
        <span className="text-[10px] uppercase tracking-widest text-text-dim flex items-center gap-1.5">
          <Users size={10} />
          Study With Me
        </span>
        <div className="h-px bg-border flex-1" />
      </div>

      {/* Header card */}
      <div className="grid-card p-5 sm:p-6 relative corner-tl corner-tr mb-6">
        <div className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-text-dim border border-border px-3 py-1.5 mb-4">
          <Users size={10} />
          Study With Me
        </div>

        <h2 className="text-lg sm:text-xl font-bold text-accent mb-2">
          Learn together, grow faster
        </h2>
        <p className="text-xs text-text-muted leading-relaxed max-w-2xl mb-5">
          People from around the world documenting their AI/ML learning journey
          daily. Follow along, share your progress, and stay accountable with the
          community.
        </p>

        {/* Avatar stack */}
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2.5">
            {studyBuddies.slice(0, 6).map((buddy, i) => (
              <a
                key={buddy.handle}
                href={`https://x.com/${buddy.handle}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-9 h-9 rounded-full flex items-center justify-center text-[10px] font-bold text-white border-2 border-bg-card hover:scale-110 transition-transform ${buddy.color}`}
                style={{ zIndex: studyBuddies.length - i }}
                title={`@${buddy.handle}`}
              >
                {getInitials(buddy.name)}
              </a>
            ))}
          </div>
          <span className="text-xs text-text-muted">
            + {studyBuddies.length * 10} studying right now
          </span>
        </div>
      </div>

      {/* Learners list */}
      <div className="grid-card p-4 mb-6">
        <div className="text-[10px] uppercase tracking-widest text-text-dim mb-3">
          Current Batch
        </div>
        <div className="flex flex-wrap gap-2">
          {studyBuddies.map((buddy) => (
            <a
              key={buddy.handle}
              href={`https://x.com/${buddy.handle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-2.5 py-1.5 border border-border hover:border-border-hover hover:bg-bg-hover transition-all group"
            >
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-bold text-white ${buddy.color}`}
              >
                {getInitials(buddy.name)}
              </div>
              <span className="text-[11px] text-text-muted group-hover:text-text transition-colors">
                @{buddy.handle}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Tweet feed */}
      <div className="text-[10px] uppercase tracking-widest text-text-dim mb-3 flex items-center gap-2">
        <svg
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-text-dim"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
        Daily Posts
      </div>

      <div className="columns-1 sm:columns-2 gap-3 space-y-3">
        {displayedTweets.map((tweet) => (
          <div key={tweet.id} className="break-inside-avoid">
            <TwitterEmbed tweetId={tweet.id} isDark={isDark} />
          </div>
        ))}
      </div>

      {hasMore && (
        <button
          onClick={() => setVisibleCount((c) => Math.min(c + TWEETS_PER_PAGE, studyTweets.length))}
          className="mt-4 w-full grid-card p-3 text-center text-xs text-text-muted hover:text-accent hover:border-border-hover transition-all"
        >
          Load {Math.min(remaining, TWEETS_PER_PAGE)} more posts
          <span className="text-text-dim ml-1.5">
            ({visibleCount}/{studyTweets.length})
          </span>
        </button>
      )}

      {/* CTA */}
      <div className="grid-card p-5 mt-6 text-center relative corner-tl corner-tr">
        <p className="text-xs text-text-muted mb-3">
          Documenting your AI/ML learning journey? Share your daily posts and
          join the study group.
        </p>
        <a
          href="https://x.com/notsurajgaud"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[11px] bg-bg-hover border border-border px-4 py-2 hover:border-border-hover transition-colors text-text-muted hover:text-accent"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          DM @notsurajgaud to join
          <ExternalLink size={9} />
        </a>
      </div>
    </section>
  );
}
