import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Logo, PhIcon, ZigDivider } from "@/components/brand";
import playlistThumbs from "@/data/playlistThumbs.json";
import { modules, type Module } from "@/data/curriculum";

/* ─── Curated picks per domain ─────────────────────────────────
 * Niche & awesome resources — every URL resolves to a real visual
 * (YT thumbnail or explicit OG image). Cards render image-only,
 * no titles. If a thumbnail can't load, the card hides itself.
 *
 * `fit: "contain"` letterboxes the thumbnail (used for portrait book
 * covers); default is `cover` for landscape OG/YT thumbs.
 */

type Pick = {
  url: string;
  thumb?: string;
  fit?: "cover" | "contain";
  /** Render style. Default "image" uses thumbnailFor(); "book" renders a
   *  portrait book-cover tile; "site" renders a favicon bookmark tile;
   *  "discord"/"reddit" paint a brand-color tile; "profile" paints an X
   *  follow card. */
  kind?: "image" | "book" | "site" | "discord" | "reddit" | "profile";
  name?: string;
  handle?: string;
};

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

const TOOLS_PICKS: Pick[] = [
  { url: "https://github.com/karpathy/nanoGPT",         thumb: "https://opengraph.githubassets.com/1/karpathy/nanoGPT" },
  { url: "https://github.com/karpathy/llm.c",           thumb: "https://opengraph.githubassets.com/1/karpathy/llm.c" },
  { url: "https://github.com/karpathy/micrograd",       thumb: "https://opengraph.githubassets.com/1/karpathy/micrograd" },
  { url: "https://github.com/karpathy/llama2.c",        thumb: "https://opengraph.githubassets.com/1/karpathy/llama2.c" },
  { url: "https://github.com/tinygrad/tinygrad",        thumb: "https://opengraph.githubassets.com/1/tinygrad/tinygrad" },
  { url: "https://github.com/ggerganov/llama.cpp",      thumb: "https://opengraph.githubassets.com/1/ggerganov/llama.cpp" },
  { url: "https://github.com/ollama/ollama",            thumb: "https://opengraph.githubassets.com/1/ollama/ollama" },
  { url: "https://github.com/vllm-project/vllm",        thumb: "https://opengraph.githubassets.com/1/vllm-project/vllm" },
  { url: "https://github.com/huggingface/transformers", thumb: "https://opengraph.githubassets.com/1/huggingface/transformers" },
  { url: "https://github.com/pytorch/pytorch",          thumb: "https://opengraph.githubassets.com/1/pytorch/pytorch" },
  { kind: "site", url: "https://tensortonic.com",          name: "TensorTonic" },
  { kind: "site", url: "https://www.ml-digest.com",        name: "ML Digest" },
  { kind: "site", url: "https://aman.ai/primers/ai/",      name: "Aman.ai Primers" },
];

const BOOKS_PICKS: Pick[] = [
  { kind: "book", url: "https://www.amazon.com/Why-Machines-Learn-Elegant-Behind/dp/0593185749", thumb: "/covers/why-machines-learn.png" },
  { kind: "book", url: "https://www.deeplearningbook.org/",                                       thumb: "/covers/deep-learning-goodfellow.jpg" },
  { kind: "book", url: "https://linear.axler.net/",                                               thumb: "/covers/linear-algebra-axler.jpg" },
  { kind: "book", url: "https://github.com/rasbt/LLMs-from-scratch",                              thumb: "/covers/build-llm-raschka.png" },
  { kind: "book", url: "https://www.microsoft.com/en-us/research/publication/pattern-recognition-machine-learning/", thumb: "/covers/pattern-recognition-bishop.jpg" },
  { kind: "book", url: "https://www.amazon.com/Art-Doing-Science-Engineering-Learning/dp/1732265178", thumb: "/covers/hamming.png" },
  { kind: "book", url: "https://mml-book.github.io/",                                             thumb: "https://mml-book.github.io/static/images/mml-book-cover.jpg" },
  { kind: "book", url: "https://github.com/rasbt/machine-learning-book",                          thumb: "/covers/ml-pytorch-raschka.jpg" },
  { kind: "book", url: "https://nostarch.com/machine-learning-q-and-ai",                          thumb: "/covers/ml-q-and-ai-raschka.jpg" },
  { kind: "book", url: "https://d2l.ai/",                                                         thumb: "/covers/dive-into-dl.jpg" },
];

const COMMUNITY_PICKS: Pick[] = [
  { kind: "discord", url: "https://discord.gg/g5gAD2vFcm", name: "GPU MODE" },
  { kind: "discord", url: "https://discord.gg/RPKhmstvG2", name: "EleutherAI" },
  { kind: "discord", url: "https://discord.gg/zJy2PKwWDu", name: "fast.ai" },
  { kind: "discord", url: "https://discord.gg/KaM9H6QQ5c", name: "Latent Space" },
  { kind: "discord", url: "https://discord.gg/kfAx26aZY3", name: "Mech Interp" },
  { kind: "discord", url: "https://discord.gg/axGCnnQ5Mm", name: "Eureka Labs" },
  { kind: "reddit",  url: "https://www.reddit.com/r/MachineLearning/", name: "r/MachineLearning" },
  { kind: "reddit",  url: "https://www.reddit.com/r/LocalLLaMA/",      name: "r/LocalLLaMA" },
  { kind: "reddit",  url: "https://www.reddit.com/r/deeplearning/",    name: "r/deeplearning" },
];

const PEOPLE_PICKS: Pick[] = [
  { kind: "profile", url: "https://x.com/karpathy",     handle: "karpathy",     name: "Andrej Karpathy" },
  { kind: "profile", url: "https://x.com/ylecun",       handle: "ylecun",       name: "Yann LeCun" },
  { kind: "profile", url: "https://x.com/fchollet",     handle: "fchollet",     name: "François Chollet" },
  { kind: "profile", url: "https://x.com/ch402",        handle: "ch402",        name: "Chris Olah" },
  { kind: "profile", url: "https://x.com/lilianweng",   handle: "lilianweng",   name: "Lilian Weng" },
  { kind: "profile", url: "https://x.com/_jasonwei",    handle: "_jasonwei",    name: "Jason Wei" },
  { kind: "profile", url: "https://x.com/DrJimFan",     handle: "DrJimFan",     name: "Jim Fan" },
  { kind: "profile", url: "https://x.com/chipro",       handle: "chipro",       name: "Chip Huyen" },
  { kind: "profile", url: "https://x.com/AndrewYNg",    handle: "AndrewYNg",    name: "Andrew Ng" },
  { kind: "profile", url: "https://x.com/sama",         handle: "sama",         name: "Sam Altman" },
];

type Domain = {
  id: string;
  label: string;
  icon: string;
  to: string;
  /** When omitted, the domain renders a bespoke view (e.g. curriculum grid)
   *  instead of the horizontal picks slider. */
  picks?: Pick[];
};

const DOMAINS: Domain[] = [
  { id: "curriculum", label: "Curriculum",             icon: "graduation-cap", to: "/overview" },
  { id: "dl",         label: "Deep learning",          icon: "brain",          to: "/deep-learning",          picks: DL_PICKS },
  { id: "ml",         label: "Machine learning",       icon: "function",       to: "/machine-learning",       picks: ML_PICKS },
  { id: "rl",         label: "Reinforcement learning", icon: "robot",          to: "/reinforcement-learning", picks: RL_PICKS },
  { id: "gpu",        label: "GPU & CUDA",             icon: "cpu",            to: "/gpu",                    picks: GPU_PICKS },
  { id: "tools",      label: "Tools",                  icon: "wrench",         to: "/tools",                  picks: TOOLS_PICKS },
  { id: "books",      label: "Books",                  icon: "stack",          to: "/resources",              picks: BOOKS_PICKS },
  { id: "community",  label: "Community",              icon: "chat-circle",    to: "/community",              picks: COMMUNITY_PICKS },
  { id: "people",     label: "People to follow",       icon: "users-three",    to: "/community",              picks: PEOPLE_PICKS },
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

const CARD_BASE: React.CSSProperties = {
  width: 200,
  aspectRatio: "16 / 10",
  border: "1px solid var(--ga-divider)",
  boxShadow: "0 1px 2px rgba(20,20,20,0.04)",
};

const DiscordGlyph = (
  <svg width="44" height="44" viewBox="0 0 24 24" fill="#FFFFFF" aria-hidden>
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
  </svg>
);

const RedditGlyph = (
  <svg width="44" height="44" viewBox="0 0 24 24" fill="#FFFFFF" aria-hidden>
    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
  </svg>
);

function BrandTileCard({
  href,
  bg,
  glyph,
  name,
}: {
  href: string;
  bg: string;
  glyph: React.ReactNode;
  name: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative shrink-0 overflow-hidden rounded-xl flex flex-col items-center justify-center p-3 transition-transform duration-200 ease-out hover:-translate-y-0.5 text-white"
      style={{ ...CARD_BASE, background: bg, borderColor: bg }}
    >
      <div className="flex-1 flex items-center justify-center">{glyph}</div>
      <div
        className="text-white text-center"
        style={{
          fontFamily: "var(--ga-font-mono)",
          fontSize: 11,
          fontWeight: 500,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          lineHeight: 1.2,
        }}
      >
        {name}
      </div>
    </a>
  );
}

function ProfileCard({ pick }: { pick: Pick }) {
  const handle = pick.handle ?? "";
  const name = pick.name ?? handle;
  return (
    <a
      href={pick.url}
      target="_blank"
      rel="noopener noreferrer"
      className="relative shrink-0 overflow-hidden rounded-xl bg-[color:var(--ga-chip)] transition-transform duration-200 ease-out hover:-translate-y-0.5 group"
      style={CARD_BASE}
    >
      <img
        src={`https://unavatar.io/x/${handle}?fallback=https%3A%2F%2Funavatar.io%2Ffallback.png`}
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = "none";
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 px-3 pt-6 pb-2"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.62) 100%)",
        }}
      >
        <div
          className="text-white truncate"
          style={{
            fontFamily: "var(--ga-font-sans)",
            fontSize: 12,
            fontWeight: 600,
            lineHeight: 1.2,
          }}
        >
          {name}
        </div>
        <div
          className="truncate"
          style={{
            fontFamily: "var(--ga-font-mono)",
            fontSize: 10,
            color: "rgba(255,255,255,0.78)",
            letterSpacing: "0.04em",
            marginTop: 1,
          }}
        >
          @{handle}
        </div>
      </div>
      <div className="absolute top-2 left-2">
        <span
          className="inline-flex items-center justify-center rounded-md text-white"
          style={{
            width: 22,
            height: 22,
            background: "#000",
            boxShadow: "0 1px 3px rgba(0,0,0,0.22)",
          }}
          aria-hidden
        >
          <i className="ph ph-x-logo" style={{ fontSize: 11, color: "#FFF", lineHeight: 1 }} />
        </span>
      </div>
    </a>
  );
}

function ImageCard({ pick }: { pick: Pick }) {
  const thumb = thumbnailFor(pick);
  const source = sourceFor(pick.url);
  if (!thumb) return null;
  const isContain = pick.fit === "contain";
  return (
    <a
      href={pick.url}
      target="_blank"
      rel="noopener noreferrer"
      className="relative shrink-0 overflow-hidden rounded-xl bg-white transition-transform duration-200 ease-out hover:-translate-y-0.5 group"
      style={CARD_BASE}
    >
      <img
        src={thumb}
        alt=""
        loading="lazy"
        className={`absolute inset-0 h-full w-full transition-transform duration-300 group-hover:scale-[1.04] ${
          isContain ? "object-contain p-2 bg-[color:var(--ga-chip)]" : "object-cover"
        }`}
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

function BookCard({ pick }: { pick: Pick }) {
  if (!pick.thumb) return null;
  return (
    <a
      href={pick.url}
      target="_blank"
      rel="noopener noreferrer"
      className="relative shrink-0 overflow-hidden rounded-xl flex items-center justify-center transition-transform duration-200 ease-out hover:-translate-y-0.5 group"
      style={{
        // Match height of other cards (200w * 16/10 = 125h) so the row
        // stays a single horizontal band; books just sit in a narrower
        // portrait-friendly tile.
        width: 100,
        height: 125,
        background:
          "linear-gradient(180deg, #FFFFFF 0%, var(--ga-chip) 100%)",
        border: "1px solid var(--ga-divider)",
        boxShadow: "0 1px 2px rgba(20,20,20,0.04)",
      }}
    >
      <img
        src={pick.thumb}
        alt=""
        loading="lazy"
        className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.03]"
        style={{ padding: 8, filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.18))" }}
        onError={(e) => {
          const card = (e.currentTarget as HTMLImageElement).closest("a");
          if (card) (card as HTMLElement).style.display = "none";
        }}
      />
    </a>
  );
}

function SiteCard({ pick }: { pick: Pick }) {
  const host = getHost(pick.url);
  const name = pick.name ?? host;
  const favicon = `https://www.google.com/s2/favicons?domain=${host}&sz=128`;
  return (
    <a
      href={pick.url}
      target="_blank"
      rel="noopener noreferrer"
      className="relative shrink-0 overflow-hidden rounded-xl flex flex-col items-center justify-center p-3 transition-transform duration-200 ease-out hover:-translate-y-0.5 group"
      style={{
        ...CARD_BASE,
        background:
          "linear-gradient(160deg, #FFFFFF 0%, var(--ga-chip) 100%)",
      }}
    >
      <div
        className="flex items-center justify-center mb-2"
        style={{
          width: 56,
          height: 56,
          borderRadius: 12,
          background: "#FFFFFF",
          boxShadow: "0 1px 3px rgba(0,0,0,0.08), 0 0 0 1px var(--ga-divider)",
        }}
      >
        <img
          src={favicon}
          alt=""
          loading="lazy"
          className="object-contain"
          style={{ width: 32, height: 32 }}
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
      </div>
      <div
        className="text-center truncate w-full"
        style={{
          fontFamily: "var(--ga-font-sans)",
          fontSize: 12,
          fontWeight: 600,
          color: "var(--ga-fg1)",
          lineHeight: 1.2,
        }}
      >
        {name}
      </div>
      <div
        className="text-center truncate w-full mt-0.5"
        style={{
          fontFamily: "var(--ga-font-mono)",
          fontSize: 9,
          color: "var(--ga-fg3)",
          letterSpacing: "0.04em",
        }}
      >
        {host}
      </div>
    </a>
  );
}

function ResourceCard({ pick }: { pick: Pick }) {
  if (pick.kind === "book") return <BookCard pick={pick} />;
  if (pick.kind === "site") return <SiteCard pick={pick} />;
  if (pick.kind === "discord") {
    return (
      <BrandTileCard
        href={pick.url}
        bg="#5865F2"
        glyph={DiscordGlyph}
        name={pick.name ?? "Discord"}
      />
    );
  }
  if (pick.kind === "reddit") {
    return (
      <BrandTileCard
        href={pick.url}
        bg="#FF4500"
        glyph={RedditGlyph}
        name={pick.name ?? "Reddit"}
      />
    );
  }
  if (pick.kind === "profile") {
    return <ProfileCard pick={pick} />;
  }
  return <ImageCard pick={pick} />;
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

/* ─── Curriculum grid ─────────────────────────────────────────── */

function CurriculumChip({
  module,
  index,
  className = "flex",
}: {
  module: Module;
  index: number;
  className?: string;
}) {
  return (
    <Link
      to={`/overview#${module.id}`}
      className={`group relative items-center justify-between gap-2 p-1.5 rounded-sm transition-all backdrop-blur-sm  hover:bg-white hover:shadow-[0_1px_2px_rgba(20,20,20,0.06)] ${className}`}
      style={{ minHeight: 20 }}
    >
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span
            className="shrink-0"
            style={{
              fontFamily: "var(--ga-font-mono)",
              fontSize: 10,
              color: "var(--ga-fg3)",
              letterSpacing: "0.04em",
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <span
            className="truncate"
            style={{
              fontFamily: "var(--ga-font-sans)",
              fontSize: 12,
              fontWeight: 600,
              color: "var(--ga-fg1)",
              lineHeight: 1.2,
            }}
          >
            {module.title}
          </span>
        </div>
        {/*<div
          style={{
            fontFamily: "var(--ga-font-mono)",
            fontSize: 9,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--ga-fg3)",
            paddingLeft: 24,
            marginTop: 2,
          }}
        >
          {count} {count === 1 ? "lesson" : "lessons"}
        </div>*/}
      </div>
      <PhIcon
        name="arrow-right"
        size={14}
        color="var(--ga-fg2)"
        className="shrink-0 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
      />
    </Link>
  );
}

function CurriculumGrid() {
  // Below sm, show first N chips + a single "X+ more" tile;
  // at sm+, show all 12 chips in a 3-col grid.
  const MOBILE_VISIBLE = 5;
  const hiddenOnMobile = modules.length - MOBILE_VISIBLE;

  return (
    <div className="grid grid-cols-2 gap-2 px-1.5 py-1 sm:grid-cols-3">
      {modules.slice(0, MOBILE_VISIBLE).map((m, i) => (
        <CurriculumChip key={m.id} module={m} index={i} />
      ))}
      {hiddenOnMobile > 0 && (
        <Link
          to="/overview"
          className="group relative flex items-center justify-between gap-2 rounded-lg px-3 py-2.5 transition-all hover:bg-white hover:shadow-[0_1px_2px_rgba(20,20,20,0.06)] sm:hidden"
          style={{ background: "var(--ga-chip)", minHeight: 54 }}
          aria-label={`See ${hiddenOnMobile} more modules`}
        >
          <span
            style={{
              fontFamily: "var(--ga-font-sans)",
              fontSize: 12,
              fontWeight: 600,
              color: "var(--ga-fg1)",
            }}
          >
            {hiddenOnMobile}+ more
          </span>
          <PhIcon name="arrow-right" size={14} color="var(--ga-fg2)" />
        </Link>
      )}
      {modules.slice(MOBILE_VISIBLE).map((m, i) => (
        <CurriculumChip
          key={m.id}
          module={m}
          index={i + MOBILE_VISIBLE}
          className="hidden sm:flex"
        />
      ))}
    </div>
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
      <div className="flex items-center justify-start gap-1 p-1 overflow-x-auto [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
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

		  {/* Active domain label — mono uppercase, sits below the preview */}
      <div className="text-left px-2">
        <span
          style={{
            fontFamily: "var(--ga-font-mono)",
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: "0.10em",
            textTransform: "uppercase",
            color: "var(--ga-fg2)",
          }}
        >
          {active.label}
        </span>
      </div>

      {active.id === "curriculum" ? (
        <CurriculumGrid />
      ) : (
        /* Horizontal slider — overflow-x:auto handles trackpad/wheel/touch;
           mouse drag is wired up via onMouseDown for desktop users. */
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
          {active.picks?.map((p, i) => (
            <ResourceCard key={`${active.id}-${i}-${p.url}`} pick={p} />
          ))}
          <FindMoreCard to={active.to} label={active.label} />
        </div>
      )}

      

      <style>{`
        @keyframes ll-caret-blink { 50% { opacity: 0; } }
      `}</style>
    </div>
  );
}
