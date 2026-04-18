export interface Newsletter {
  name: string;
  author: string;
  description: string;
  url: string;
  frequency: "daily" | "weekly" | "biweekly" | "monthly";
  category: "newsletter" | "digest" | "community" | "podcast";
}

export const newsletters: Newsletter[] = [
  // Newsletters
  {
    name: "The Batch",
    author: "Andrew Ng",
    description:
      "DeepLearning.AI's weekly AI newsletter. Top stories, research summaries, and insights from Andrew Ng.",
    url: "https://www.deeplearning.ai/the-batch/",
    frequency: "weekly",
    category: "newsletter",
  },
  {
    name: "Ahead of AI",
    author: "Sebastian Raschka",
    description:
      "Deep technical ML insights from the author of 'Build a LLM From Scratch'. LLM architectures, LoRA/DoRA, reasoning models, annual State of LLMs reviews, and curated paper lists (200+ papers/year).",
    url: "https://magazine.sebastianraschka.com/",
    frequency: "biweekly",
    category: "newsletter",
  },
  {
    name: "Import AI",
    author: "Jack Clark",
    description:
      "AI policy and research newsletter covering the latest developments and their societal implications.",
    url: "https://importai.substack.com/",
    frequency: "weekly",
    category: "newsletter",
  },
  {
    name: "The Gradient",
    author: "The Gradient Team",
    description:
      "Long-form AI research perspectives. In-depth essays on ML topics from researchers and practitioners.",
    url: "https://thegradient.pub/",
    frequency: "weekly",
    category: "newsletter",
  },
  {
    name: "Davis Summarizes Papers",
    author: "Davis Blalock",
    description:
      "Concise, opinionated ML paper summaries. Cuts through the noise to surface what matters.",
    url: "https://dblalock.substack.com/",
    frequency: "weekly",
    category: "newsletter",
  },
  {
    name: "AI Tidbits",
    author: "Sahar Mor",
    description:
      "Curated AI news and resources. Quick, digestible updates on the latest in artificial intelligence.",
    url: "https://aitidbitsnewsletter.substack.com/",
    frequency: "weekly",
    category: "newsletter",
  },
  {
    name: "Interconnects",
    author: "Nathan Lambert",
    description:
      "RLHF and alignment focused. Deep dives into LLM training, reward modeling, and AI safety.",
    url: "https://www.interconnects.ai/",
    frequency: "weekly",
    category: "newsletter",
  },
  {
    name: "The Neuron",
    author: "The Neuron Team",
    description:
      "Daily AI news for builders. Bite-sized updates on tools, models, and industry moves.",
    url: "https://www.theneurondaily.com/",
    frequency: "daily",
    category: "newsletter",
  },
  {
    name: "Last Week in AI",
    author: "Skynet Today",
    description:
      "Weekly roundup of the most important AI news, research, and commentary.",
    url: "https://lastweekin.ai/",
    frequency: "weekly",
    category: "newsletter",
  },
  {
    name: "Latent Space",
    author: "swyx & Alessio",
    description:
      "AI engineering podcast and newsletter. Bridging ML research and practical engineering.",
    url: "https://www.latent.space/",
    frequency: "weekly",
    category: "newsletter",
  },

  // Digests
  {
    name: "TLDR AI",
    author: "TLDR Team",
    description:
      "Daily AI news in 5 minutes. The most popular AI digest — concise, well-curated, free.",
    url: "https://tldr.tech/ai",
    frequency: "daily",
    category: "digest",
  },
  {
    name: "ML Digest",
    author: "ML Digest Team",
    description:
      "Curated ML resources and papers. Handpicked links to the best content each week.",
    url: "https://mldigest.com/",
    frequency: "weekly",
    category: "digest",
  },
  {
    name: "Papers With Code Newsletter",
    author: "Papers With Code",
    description:
      "New implementations weekly. Tracks trending ML papers with open-source code.",
    url: "https://paperswithcode.com/newsletter",
    frequency: "weekly",
    category: "digest",
  },
  {
    name: "Alpha Signal",
    author: "Alpha Signal Team",
    description:
      "Top ML research papers weekly, ranked by community engagement and impact.",
    url: "https://alphasignal.ai/",
    frequency: "weekly",
    category: "digest",
  },
  {
    name: "Deep Learning Weekly",
    author: "DL Weekly Team",
    description:
      "Curated deep learning news, papers, tutorials, and resources delivered every week.",
    url: "https://www.deeplearningweekly.com/",
    frequency: "weekly",
    category: "digest",
  },

  // Communities
  {
    name: "Techfren Discord",
    author: "Techfren Community",
    description:
      "Active AI builder community. Collaborate on projects, share resources, get feedback.",
    url: "https://discord.gg/techfren",
    frequency: "daily",
    category: "community",
  },
  {
    name: "Eleuther AI Discord",
    author: "Eleuther AI",
    description:
      "Open-source LLM research community. Home of GPT-NeoX, The Pile, and cutting-edge research.",
    url: "https://discord.gg/eleutherai",
    frequency: "daily",
    category: "community",
  },
  {
    name: "Hugging Face Discord",
    author: "Hugging Face",
    description:
      "Model and dataset community. Discuss transformers, diffusers, and open-source ML.",
    url: "https://discord.gg/huggingface",
    frequency: "daily",
    category: "community",
  },
  {
    name: "MLOps Community Slack",
    author: "MLOps Community",
    description:
      "Production ML engineering community. Discuss deployment, monitoring, and infrastructure.",
    url: "https://mlops.community/",
    frequency: "daily",
    category: "community",
  },
  {
    name: "r/MachineLearning",
    author: "Reddit ML Community",
    description:
      "Reddit's ML research community. Paper discussions, AMAs with researchers, career advice.",
    url: "https://www.reddit.com/r/MachineLearning/",
    frequency: "daily",
    category: "community",
  },
  {
    name: "LessWrong",
    author: "LessWrong Community",
    description:
      "AI safety and alignment discussion. Long-form posts on rationality, AI risk, and research.",
    url: "https://www.lesswrong.com/",
    frequency: "daily",
    category: "community",
  },

  // Podcasts
  {
    name: "Machine Learning Street Talk",
    author: "Tim Scarfe et al.",
    description:
      "Technical AI discussions with top researchers. Deep, rigorous, and unfiltered.",
    url: "https://www.youtube.com/@MachineLearningStreetTalk",
    frequency: "weekly",
    category: "podcast",
  },
  {
    name: "Lex Fridman Podcast",
    author: "Lex Fridman",
    description:
      "Long-form interviews with AI researchers, engineers, and thinkers. Deep conversations on intelligence.",
    url: "https://lexfridman.com/podcast/",
    frequency: "weekly",
    category: "podcast",
  },
  {
    name: "Gradient Dissent",
    author: "Weights & Biases",
    description:
      "Practical ML interviews with builders and researchers. Hosted by Lukas Biewald.",
    url: "https://wandb.ai/fully-connected/gradient-dissent",
    frequency: "biweekly",
    category: "podcast",
  },
  {
    name: "The TWIML AI Podcast",
    author: "Sam Charrington",
    description:
      "ML research and industry interviews. Covers both cutting-edge research and real-world applications.",
    url: "https://twimlai.com/podcast/",
    frequency: "weekly",
    category: "podcast",
  },
  {
    name: "Latent Space Podcast",
    author: "swyx & Alessio",
    description:
      "AI engineering deep dives. Interviews with builders at the frontier of AI infrastructure.",
    url: "https://www.latent.space/podcast",
    frequency: "weekly",
    category: "podcast",
  },

  // New additions
  {
    name: "Thinking Machines Blog",
    author: "Mira Murati & John Schulman",
    description:
      "Research blog from the lab behind Tinker. Covers defeating LLM nondeterminism, on-policy distillation, and LoRA improvements. Frontier research made accessible.",
    url: "https://thinkingmachines.ai/blog/",
    frequency: "monthly",
    category: "newsletter",
  },
  {
    name: "DAIR.AI",
    author: "Elvis Saravia",
    description:
      "Curated ML papers, prompt engineering guides, and AI research summaries. High signal-to-noise curation of what matters in AI research.",
    url: "https://github.com/dair-ai",
    frequency: "weekly",
    category: "digest",
  },
  {
    name: "AI by Hand",
    author: "Prof. Tom Yeh",
    description:
      "Learn AI concepts by working through them by hand — a unique visual, intuitive approach to building understanding from first principles.",
    url: "https://www.byhand.ai/",
    frequency: "weekly",
    category: "newsletter",
  },

  // Competitor-sourced communities
  {
    name: "GPU MODE Discord",
    author: "GPU MODE Community",
    description:
      "The go-to community for GPU programming, CUDA optimization, and high-performance ML. Active discussions on kernels, Triton, and inference.",
    url: "https://discord.gg/g5gAD2vFcm",
    frequency: "daily",
    category: "community",
  },
  {
    name: "Latent Space Discord",
    author: "swyx & Alessio",
    description:
      "AI engineering community from the Latent Space podcast. Discuss frontier models, tools, and building AI products.",
    url: "https://discord.gg/KaM9H6QQ5c",
    frequency: "daily",
    category: "community",
  },
  {
    name: "fast.ai Discord",
    author: "fast.ai Community",
    description:
      "Jeremy Howard's fast.ai community. Practical deep learning, study groups, and project collaboration.",
    url: "https://discord.gg/zJy2PKwWDu",
    frequency: "daily",
    category: "community",
  },
  {
    name: "r/LocalLLaMA",
    author: "Reddit Community",
    description:
      "Run LLMs locally — quantization, hardware recommendations, model benchmarks. The most active local AI community.",
    url: "https://www.reddit.com/r/LocalLLaMA/",
    frequency: "daily",
    category: "community",
  },
];

export const newsletterCategoryLabels: Record<string, string> = {
  newsletter: "Newsletters",
  digest: "Digests",
  community: "Communities",
  podcast: "Podcasts",
};

export const frequencyLabels: Record<string, string> = {
  daily: "Daily",
  weekly: "Weekly",
  biweekly: "Biweekly",
  monthly: "Monthly",
};
