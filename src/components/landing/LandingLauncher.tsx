import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Logo, PhIcon } from "@/components/brand";
import playlistThumbs from "@/data/playlistThumbs.json";

/* ─── Curated picks per domain ─────────────────────────────────
 * Niche & awesome resources — every URL resolves to a real visual
 * (YT thumbnail or explicit OG image). Cards render image-only,
 * no titles. If a thumbnail can't load, the card hides itself.
 */

type Pick = { url: string; thumb?: string };

const DL_PICKS: Pick[] = [
  { url: "https://www.youtube.com/watch?v=kCc8FmEb1nY" }, // Karpathy: Let's build GPT
  { url: "https://www.youtube.com/watch?v=l8pRSuU81PU" }, // Karpathy: Let's reproduce GPT-2 (124M)
  { url: "https://www.youtube.com/watch?v=zjkBMFhNj_g" }, // Karpathy: Intro to LLMs
  { url: "https://www.youtube.com/watch?v=7xTGNNLPyMI" }, // Karpathy: Deep Dive into LLMs
  { url: "https://www.youtube.com/watch?v=aircAruvnKk" }, // 3B1B: But what is a Neural Network?
  { url: "https://www.youtube.com/watch?v=tIeHLnjs5U8" }, // 3B1B: Backpropagation calculus
  { url: "https://www.youtube.com/watch?v=wjZofJX0v4M" }, // 3B1B: Visualizing transformers
  { url: "https://www.youtube.com/watch?v=iDulhoQ2pro" }, // Yannic: Attention Is All You Need
  {
    url: "https://sebastianraschka.com/blog/2026/llm-architecture-gallery.html",
    thumb: "https://sebastianraschka.com/llm-architecture-gallery/images/hero/architecture-gallery-hero.webp",
  },
  {
    url: "https://sebastianraschka.com/blog/2023/self-attention-from-scratch.html",
    thumb: "https://sebastianraschka.com/images/blog/2023/self-attention-from-scratch/hero.jpg",
  },
];

const ML_PICKS: Pick[] = [
  { url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab" }, // 3B1B Linear Algebra
  { url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr" }, // 3B1B Calculus
  { url: "https://www.youtube.com/watch?v=KuXjwB4LzSA" }, // 3B1B: But what is a convolution?
  { url: "https://www.youtube.com/watch?v=spUNpyF58BY" }, // 3B1B: But what IS a Fourier series?
  { url: "https://www.youtube.com/playlist?list=PLE7DDD91010BC51F8" }, // MIT 18.06 Strang
  { url: "https://www.youtube.com/playlist?list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU" }, // Stanford CS229
  { url: "https://www.youtube.com/playlist?list=PLblh5JKOoLUICTaGLRoHQDuF_7q2GfuJF" }, // StatQuest ML
  { url: "https://www.youtube.com/watch?v=FgakZw6K1QQ" }, // StatQuest: PCA Step-by-Step
  { url: "https://www.youtube.com/watch?v=McLq1hEq3UY" }, // Boyd: Convex Optimization I
  {
    url: "https://magazine.sebastianraschka.com/p/visual-attention-variants",
    thumb:
      "https://substackcdn.com/image/fetch/$s_!8IKa!,w_1200,h_675,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F51d52b9a-e820-45d6-8135-f94496ec1745_1600x900.png",
  },
];

const RL_PICKS: Pick[] = [
  { url: "https://www.youtube.com/playlist?list=PLqYmG7hTraZDM-OYHWgPebj2MfCFzFObQ" }, // DeepMind/UCL David Silver
  { url: "https://www.youtube.com/watch?v=wf0X3Y287uQ" }, // 4 Months of RL in 4 Hours
  { url: "https://www.youtube.com/watch?v=uPUEq8d73JI" }, // Lex × David Silver
  { url: "https://www.youtube.com/watch?v=WXuK6gekU1Y" }, // AlphaGo - The Movie
  { url: "https://www.youtube.com/watch?v=2GwBez0D20A" }, // Pieter Abbeel L1: MDPs
  { url: "https://www.youtube.com/watch?v=8jVCyAOvz9w" }, // Pieter Abbeel L2: DQN
  { url: "https://www.youtube.com/watch?v=pYXy-A4siMw" }, // Schmidhuber: World Models
  {
    url: "https://github.com/openai/spinningup",
    thumb: "https://opengraph.githubassets.com/1/openai/spinningup",
  },
  {
    url: "https://karpathy.github.io/2016/05/31/rl/",
    thumb: "https://karpathy.github.io/assets/rl/preview.jpeg",
  },
];

const GPU_PICKS: Pick[] = [
  { url: "https://www.youtube.com/watch?v=3l10o0DYJXg" }, // Stephen Jones: How GPU Computing Works
  { url: "https://www.youtube.com/watch?v=QQceTDjA4f4" }, // Stephen Jones: How CUDA Programming Works
  { url: "https://www.youtube.com/watch?v=LuhJEEJQgUM" }, // GPU MODE Lecture 1
  { url: "https://www.youtube.com/watch?v=4sgKnKbR-WE" }, // GPU MODE Tensor Cores
  { url: "https://www.youtube.com/watch?v=Mx14XbhV6PY" }, // tinygrad / George Hotz
  { url: "https://www.youtube.com/watch?v=nOxKexn3iBo" }, // Jeremy Howard CUDA in Python
  {
    url: "https://siboehm.com/articles/22/CUDA-MMM",
    thumb: "https://siboehm.com/assets/img/CUDA-MMM/Improvement.png",
  },
  {
    url: "https://github.com/srush/GPU-Puzzles",
    thumb: "https://opengraph.githubassets.com/1/srush/GPU-Puzzles",
  },
  {
    url: "https://github.com/HMUNACHI/cuda-tutorials",
    thumb: "https://opengraph.githubassets.com/1/HMUNACHI/cuda-tutorials",
  },
];

type Domain = {
  id: string;
  label: string;
  icon: string;
  to: string;
  picks: Pick[];
};

const DOMAINS: Domain[] = [
  { id: "dl", label: "Deep learning", icon: "brain", to: "/deep-learning", picks: DL_PICKS },
  { id: "ml", label: "Machine learning", icon: "function", to: "/machine-learning", picks: ML_PICKS },
  { id: "rl", label: "Reinforcement learning", icon: "robot", to: "/reinforcement-learning", picks: RL_PICKS },
  { id: "gpu", label: "GPU & CUDA", icon: "cpu", to: "/gpu", picks: GPU_PICKS },
];

const TYPEWRITER_QUERIES = [
  "How does backpropagation actually work",
  "Best book on linear algebra for ML",
  "Stanford CS229 lecture notes",
  "How to write your first CUDA kernel",
  "Diffusion models from scratch",
  "Spinning Up in deep RL",
  "Math for machine learning",
  "What is a transformer, really",
  "Top blogs to follow on AI research",
  "PyTorch from the ground up",
];

/* ─── Helpers ─────────────────────────────────────────────────── */

function getHost(url: string): string {
  try { return new URL(url).hostname.replace(/^www\./, ""); } catch { return ""; }
}

function getYtVideoId(url: string): string | null {
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtube.com")) return u.searchParams.get("v");
    if (u.hostname.includes("youtu.be")) return u.pathname.slice(1) || null;
  } catch { /* */ }
  return null;
}

function thumbnailFor(pick: Pick): string | null {
  if (pick.thumb) return pick.thumb;
  try {
    const list = new URL(pick.url).searchParams.get("list");
    if (list) {
      const vid = (playlistThumbs as Record<string, string>)[list];
      if (vid) return `https://i.ytimg.com/vi/${vid}/maxresdefault.jpg`;
    }
  } catch { /* */ }
  const vid = getYtVideoId(pick.url);
  if (vid) return `https://i.ytimg.com/vi/${vid}/maxresdefault.jpg`;
  return null;
}

type Source =
  | { kind: "youtube"; bg: string; icon: string; weight: "fill" }
  | { kind: "github"; bg: string; icon: string; weight: "fill" }
  | { kind: "arxiv"; bg: string; label: string }
  | { kind: "substack"; bg: string; label: string }
  | { kind: "web"; bg: string; icon: string; weight: "regular" };

function sourceFor(url: string): Source {
  const host = getHost(url);
  if (host.endsWith("youtube.com") || host.endsWith("youtu.be"))
    return { kind: "youtube", bg: "#FF0000", icon: "youtube-logo", weight: "fill" };
  if (host.endsWith("github.com") || host.endsWith("github.io"))
    return { kind: "github", bg: "#181717", icon: "github-logo", weight: "fill" };
  if (host.endsWith("arxiv.org"))
    return { kind: "arxiv", bg: "#B31B1B", label: "arXiv" };
  if (host.endsWith("substack.com") || host.includes("magazine."))
    return { kind: "substack", bg: "#FF6719", label: "S" };
  return { kind: "web", bg: "#3A3A3A", icon: "globe", weight: "regular" };
}

function SourceBadge({ source }: { source: Source }) {
  return (
    <span
      className="inline-flex items-center justify-center rounded-md text-white"
      style={{
        width: 24,
        height: 24,
        background: source.bg,
        boxShadow: "0 1px 3px rgba(0,0,0,0.22)",
      }}
      aria-hidden
    >
      {source.kind === "arxiv" || source.kind === "substack" ? (
        <span
          className="font-mono font-bold text-white"
          style={{
            fontFamily: "var(--ga-font-mono)",
            fontSize: source.kind === "arxiv" ? 8 : 11,
            letterSpacing: "0.02em",
          }}
        >
          {source.label}
        </span>
      ) : (
        <i
          className={`${source.weight === "fill" ? "ph-fill" : "ph"} ph-${source.icon}`}
          style={{ fontSize: 12, color: "#FFF", lineHeight: 1 }}
        />
      )}
    </span>
  );
}

/* ─── Cards ───────────────────────────────────────────────────── */

function ResourceCard({ pick }: { pick: Pick }) {
  const thumb = thumbnailFor(pick);
  const source = sourceFor(pick.url);
  if (!thumb) return null;
  return (
    <a
      href={pick.url}
      target="_blank"
      rel="noopener noreferrer"
      className="relative shrink-0 overflow-hidden rounded-xl bg-white transition-transform duration-200 ease-out hover:-translate-y-0.5 group"
      style={{
        width: 200,
        aspectRatio: "16 / 10",
        border: "1px solid var(--ga-divider)",
        boxShadow: "0 1px 2px rgba(20,20,20,0.04)",
      }}
    >
      <img
        src={thumb}
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
        onError={(e) => {
          const img = e.currentTarget;
          if (img.src.includes("/maxresdefault.jpg")) {
            img.src = img.src.replace("/maxresdefault.jpg", "/hqdefault.jpg");
          } else if (img.src.includes("/hqdefault.jpg")) {
            img.src = img.src.replace("/hqdefault.jpg", "/mqdefault.jpg");
          } else {
            const card = img.closest("a");
            if (card) (card as HTMLElement).style.display = "none";
          }
        }}
      />
      <div className="absolute bottom-2 left-2">
        <SourceBadge source={source} />
      </div>
    </a>
  );
}

function FindMoreCard({ to, label }: { to: string; label: string }) {
  return (
    <Link
      to={to}
      className="relative shrink-0 overflow-hidden rounded-xl text-white flex flex-col justify-end p-4 transition-transform duration-200 ease-out hover:-translate-y-0.5"
      style={{
        width: 200,
        aspectRatio: "16 / 10",
        background: "linear-gradient(180deg, #2A2A2A 0%, #161616 100%)",
        border: "1px solid var(--ga-ink-900)",
        boxShadow: "0 1px 2px rgba(20,20,20,0.08)",
      }}
    >
      <PhIcon name="arrow-right" size={22} color="#FFFFFF" />
      <div
        className="text-white font-semibold mt-1.5"
        style={{ fontSize: 14, fontFamily: "var(--ga-font-sans)" }}
      >
        Find more
      </div>
      <div
        style={{
          fontFamily: "var(--ga-font-mono)",
          fontSize: 9,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.6)",
        }}
      >
        {label}
      </div>
    </Link>
  );
}

/* ─── Typewriter ──────────────────────────────────────────────── */

function useTypewriter(queries: string[]): string {
  const [text, setText] = useState("");
  const stateRef = useRef({ q: 0, pos: 0, dir: 1 as 1 | -1, hold: 0 });

  useEffect(() => {
    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const elapsed = now - last;
      const s = stateRef.current;
      const typeMs = 55, eraseMs = 28;
      const holdAtFullMs = 1600, holdAtEmptyMs = 350;

      if (s.hold > 0) {
        if (elapsed >= s.hold) { s.hold = 0; last = now; }
      } else {
        const stepMs = s.dir === 1 ? typeMs : eraseMs;
        if (elapsed >= stepMs) {
          const cur = queries[s.q];
          if (s.dir === 1) {
            s.pos++;
            if (s.pos >= cur.length) { s.dir = -1; s.hold = holdAtFullMs; }
          } else {
            s.pos--;
            if (s.pos <= 0) {
              s.pos = 0; s.dir = 1;
              s.q = (s.q + 1) % queries.length;
              s.hold = holdAtEmptyMs;
            }
          }
          setText(queries[s.q].slice(0, s.pos));
          last = now;
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [queries]);

  return text;
}

/* ─── Component ───────────────────────────────────────────────── */

export function LandingLauncher() {
  const [activeId, setActiveId] = useState<string>(DOMAINS[0].id);
  const shellRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const text = useTypewriter(TYPEWRITER_QUERIES);

  const active = useMemo(
    () => DOMAINS.find((d) => d.id === activeId) ?? DOMAINS[0],
    [activeId],
  );

  useEffect(() => {
    if (sliderRef.current) sliderRef.current.scrollLeft = 0;
  }, [activeId]);

  /* The landing canvas attaches NATIVE addEventListener handlers on the
   * viewport (mousedown, touchstart, touchmove, wheel). Those fire during
   * the bubble phase BEFORE React's synthetic handlers — so React's
   * stopPropagation is too late. Block bubbling at the DOM level here. */
  useEffect(() => {
    const el = shellRef.current;
    if (!el) return;
    const stop = (e: Event) => e.stopPropagation();
    el.addEventListener("mousedown", stop);
    el.addEventListener("touchstart", stop, { passive: true });
    el.addEventListener("touchmove", stop, { passive: true });
    el.addEventListener("wheel", stop, { passive: true });
    return () => {
      el.removeEventListener("mousedown", stop);
      el.removeEventListener("touchstart", stop);
      el.removeEventListener("touchmove", stop);
      el.removeEventListener("wheel", stop);
    };
  }, []);

  return (
    <div
      ref={shellRef}
      className="w-full max-w-[760px] mx-auto rounded-[22px] border p-3.5 flex flex-col gap-2.5 pointer-events-auto"
      style={{
        background: "rgba(255, 255, 255, 0.62)",
        backdropFilter: "blur(22px) saturate(180%)",
        WebkitBackdropFilter: "blur(22px) saturate(180%)",
        borderColor: "rgba(255, 255, 255, 0.55)",
        boxShadow:
          "0 1px 0 rgba(255,255,255,0.7) inset, 0 22px 60px rgba(20,20,20,0.18), 0 4px 14px rgba(20,20,20,0.06)",
      }}
    >
      {/* Input row */}
      <div
        className="relative flex items-center gap-2.5 rounded-xl bg-white"
        style={{
          height: 54,
          padding: "0 8px 0 16px",
          border: "1px solid var(--ga-divider)",
          boxShadow:
            "0 18px 7px rgba(143,143,143,0.01), 0 10px 6px rgba(143,143,143,0.05), 0 4px 4px rgba(143,143,143,0.09), 0 1px 2px rgba(143,143,143,0.10)",
        }}
      >
        <span className="inline-flex h-[22px] w-[22px] shrink-0 items-center justify-center">
          <Logo size={20} />
        </span>
        <div
          className="flex-1 min-w-0 overflow-hidden whitespace-nowrap text-[16px] font-normal"
          style={{
            fontFamily: "var(--ga-font-sans)",
            color: "var(--ga-fg2)",
          }}
          aria-hidden
        >
          <span className="inline-flex items-center">
            {text}
            <span
              className="ml-0.5 inline-block"
              style={{
                width: 1.5,
                height: 18,
                background: "var(--ga-fg1)",
                animation: "ll-caret-blink 1.05s steps(2) infinite",
              }}
            />
          </span>
        </div>
        <a
          href="https://github.com/suraj-xd/ai-research-archive"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contribute on GitHub"
          className="inline-flex h-9 shrink-0 items-center gap-1.5 rounded-lg border-0 bg-transparent px-3 text-[12px] font-medium transition-colors hover:bg-[color:var(--ga-chip)]"
          style={{
            fontFamily: "var(--ga-font-sans)",
            color: "var(--ga-fg2)",
          }}
        >
          <PhIcon name="git-pull-request" size={13} color="var(--ga-fg2)" />
          Contribute
        </a>
      </div>

      {/* Domain dock */}
      <div className="flex items-center justify-start gap-1 p-1">
        {DOMAINS.map((d) => {
          const isActive = d.id === activeId;
          return (
            <button
              key={d.id}
              type="button"
              onClick={() => setActiveId(d.id)}
              title={d.label}
              aria-label={d.label}
              aria-pressed={isActive}
              className="inline-flex h-14 min-w-[50px] flex-col items-center justify-center gap-1 rounded-xl border-0 px-2.5 transition-colors"
              style={{
                background: isActive
                  ? "rgba(255,255,255,0.85)"
                  : "transparent",
                color: isActive ? "var(--ga-fg1)" : "var(--ga-fg2)",
                boxShadow: isActive
                  ? "0 1px 2px rgba(20,20,20,0.06), 0 0 0 1px var(--ga-divider)"
                  : "none",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = "rgba(255,255,255,0.55)";
                  e.currentTarget.style.color = "var(--ga-fg1)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "var(--ga-fg2)";
                }
              }}
            >
              <PhIcon
                name={d.icon}
                size={20}
                weight={isActive ? "fill" : "regular"}
                color={isActive ? "var(--ga-fg1)" : "var(--ga-fg2)"}
              />
              {/*<span
                className="font-medium uppercase"
                style={{
                  fontFamily: "var(--ga-font-mono)",
                  fontSize: 9,
                  letterSpacing: "0.06em",
                  color: "inherit",
                }}
              >
                {d.label}
              </span>*/}
            </button>
          );
        })}
      </div>

      {/* Horizontal slider — overflow-x:auto handles trackpad/wheel/touch;
          mouse drag is wired up via onMouseDown for desktop users. */}
      <div
        ref={sliderRef}
        onMouseDown={(e) => {
          const slider = sliderRef.current;
          if (!slider || e.button !== 0) return;
          // Don't hijack drags that start on a link/button — let click work.
          const target = e.target as HTMLElement;
          if (target.closest("a, button")) return;
          e.preventDefault();
          const startX = e.pageX;
          const startLeft = slider.scrollLeft;
          slider.style.cursor = "grabbing";
          let moved = false;
          const onMove = (ev: MouseEvent) => {
            const dx = ev.pageX - startX;
            if (Math.abs(dx) > 4) moved = true;
            slider.scrollLeft = startLeft - dx;
          };
          const onUp = () => {
            window.removeEventListener("mousemove", onMove);
            window.removeEventListener("mouseup", onUp);
            slider.style.cursor = "";
            if (moved) {
              const blockClick = (ev: MouseEvent) => {
                ev.stopPropagation();
                ev.preventDefault();
                window.removeEventListener("click", blockClick, true);
              };
              window.addEventListener("click", blockClick, true);
            }
          };
          window.addEventListener("mousemove", onMove);
          window.addEventListener("mouseup", onUp);
        }}
        className="flex gap-3 overflow-x-auto overflow-y-hidden px-1.5 py-1 cursor-grab select-none [scrollbar-color:rgba(0,0,0,0.18)_transparent] [scrollbar-width:thin] [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-thumb]:bg-black/20 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent"
        style={{ scrollBehavior: "smooth" }}
      >
        {active.picks.map((p, i) => (
          <ResourceCard key={`${active.id}-${i}-${p.url}`} pick={p} />
        ))}
        <FindMoreCard to={active.to} label={active.label} />
      </div>

      <style>{`
        @keyframes ll-caret-blink { 50% { opacity: 0; } }
      `}</style>
    </div>
  );
}
