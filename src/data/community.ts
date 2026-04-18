export interface XProfile {
  name: string;
  handle: string;
  description: string;
  category: "researcher" | "educator" | "builder" | "creator";
}

export const xProfiles: XProfile[] = [
  // Researchers & Scientists
  {
    name: "Andrej Karpathy",
    handle: "karpathy",
    description: "Former OpenAI/Tesla AI lead. Builds neural nets from scratch, legendary educator.",
    category: "researcher",
  },
  {
    name: "Yann LeCun",
    handle: "ylecun",
    description: "Meta Chief AI Scientist, Turing Award winner, pioneer of CNNs.",
    category: "researcher",
  },
  {
    name: "Ilya Sutskever",
    handle: "ilyasut",
    description: "Co-founder SSI, former OpenAI Chief Scientist. Co-invented AlexNet.",
    category: "researcher",
  },
  {
    name: "François Chollet",
    handle: "fchollet",
    description: "Creator of Keras, ARC-AGI benchmark. Deep thinker on intelligence.",
    category: "researcher",
  },
  {
    name: "Sasha Rush",
    handle: "srush_nlp",
    description: "Cornell professor, NLP researcher. Built The Annotated Transformer.",
    category: "researcher",
  },
  {
    name: "Chris Olah",
    handle: "ch402",
    description: "Anthropic researcher, pioneer of neural network interpretability and visualization.",
    category: "researcher",
  },
  {
    name: "Lilian Weng",
    handle: "lilianweng",
    description: "OpenAI. Writes the best ML blog posts — comprehensive, clear, deep.",
    category: "researcher",
  },
  {
    name: "Jason Wei",
    handle: "_jasonwei",
    description: "OpenAI. Pioneered chain-of-thought prompting research.",
    category: "researcher",
  },
  {
    name: "Tri Dao",
    handle: "tri_dao",
    description: "Creator of FlashAttention. Princeton professor, Together AI.",
    category: "researcher",
  },
  {
    name: "Noam Brown",
    handle: "polynoam",
    description: "OpenAI researcher. Built Libratus/Pluribus (poker AI), reasoning research.",
    category: "researcher",
  },
  {
    name: "Jim Fan",
    handle: "DrJimFan",
    description: "NVIDIA senior research scientist. Foundation agents, embodied AI.",
    category: "researcher",
  },
  {
    name: "Chip Huyen",
    handle: "chipro",
    description: "Stanford, ML systems author. Wrote 'Designing ML Systems'.",
    category: "researcher",
  },
  {
    name: "Neel Nanda",
    handle: "NeelNanda5",
    description: "Google DeepMind. Mechanistic interpretability researcher.",
    category: "researcher",
  },
  {
    name: "Pieter Abbeel",
    handle: "PieterAbbeel",
    description: "UC Berkeley professor. Robotics, reinforcement learning pioneer.",
    category: "researcher",
  },
  {
    name: "Sebastian Raschka",
    handle: "rasbt",
    description: "LLM Research Engineer. Author of 'Build a LLM From Scratch' (90K GitHub stars), LLM Architecture Gallery (52 models), 'Ahead of AI' newsletter, and 170+ deep learning lectures.",
    category: "researcher",
  },

  // Educators & Content Creators
  {
    name: "Andrew Ng",
    handle: "AndrewYNg",
    description: "DeepLearning.AI, Coursera co-founder, Stanford. Made ML accessible to millions.",
    category: "educator",
  },
  {
    name: "Grant Sanderson",
    handle: "3blue1brown",
    description: "3Blue1Brown. The gold standard for math visualizations and intuition.",
    category: "educator",
  },
  {
    name: "Jeremy Howard",
    handle: "jeremyphoward",
    description: "fast.ai co-founder. Practical deep learning education, top-down approach.",
    category: "educator",
  },
  {
    name: "Jay Alammar",
    handle: "JayAlammar",
    description: "Visual ML explainer. The Illustrated Transformer is a must-read.",
    category: "educator",
  },
  {
    name: "Vuk Rosic",
    handle: "VukGit",
    description: "This curriculum's creator. Teaches AI research from math to LLMs from scratch.",
    category: "educator",
  },
  {
    name: "Pratham",
    handle: "prathamgrv",
    description: "Built TensorTonic (LeetCode for ML papers). Open-sourced arxiv-to-code Claude Code skill tracing every line back to paper sections.",
    category: "builder",
  },
  {
    name: "Daniel Bourke",
    handle: "mrdbourke",
    description: "ML educator. PyTorch tutorials, learning in public, great energy.",
    category: "educator",
  },
  {
    name: "Abhishek Thakur",
    handle: "abhaborhakur",
    description: "Kaggle 4x Grandmaster. Practical ML, AutoML, competitions.",
    category: "educator",
  },
  {
    name: "Elvis Saravia",
    handle: "omarsar0",
    description: "DAIR.AI founder. Curates ML papers, prompt engineering guides.",
    category: "educator",
  },
  {
    name: "Sentdex",
    handle: "Sentdex",
    description: "Python and ML tutorials. Neural networks from scratch, practical projects.",
    category: "educator",
  },
  {
    name: "Two Minute Papers",
    handle: "TwoMinutePapers",
    description: "AI research paper summaries. 'What a time to be alive!'",
    category: "educator",
  },
  {
    name: "Yannic Kilcher",
    handle: "yaborkilcher",
    description: "ML paper deep-dives on YouTube. Thorough, critical analysis.",
    category: "educator",
  },
  {
    name: "Weights & Biases",
    handle: "weights_biases",
    description: "ML experiment tracking. Great educational content and tutorials.",
    category: "educator",
  },
  {
    name: "Hugging Face",
    handle: "huggingface",
    description: "The GitHub of ML. Models, datasets, spaces — essential for any ML practitioner.",
    category: "educator",
  },

  // Builders & Engineers
  {
    name: "George Hotz",
    handle: "realGeorgeHotz",
    description: "tinygrad creator, tinybox. Building the simplest deep learning framework.",
    category: "builder",
  },
  {
    name: "Soumith Chintala",
    handle: "soaborumith",
    description: "Co-creator of PyTorch. Meta AI research engineer.",
    category: "builder",
  },
  {
    name: "Harrison Chase",
    handle: "hwchase17",
    description: "LangChain creator. Building the LLM application stack.",
    category: "builder",
  },
  {
    name: "Simon Willison",
    handle: "simonw",
    description: "LLM tooling pioneer. Created Datasette, writes extensively on practical AI.",
    category: "builder",
  },
  {
    name: "swyx",
    handle: "swyx",
    description: "AI engineer, Latent Space podcast. Bridges ML research and engineering.",
    category: "builder",
  },
  {
    name: "Aravind Srinivas",
    handle: "AravSrinivas",
    description: "Perplexity AI CEO. Building AI-powered search.",
    category: "builder",
  },
  {
    name: "Aidan Gomez",
    handle: "aidangomez",
    description: "Cohere CEO, Transformer paper co-author. Building enterprise LLMs.",
    category: "builder",
  },
  {
    name: "Sam Bhagwat",
    handle: "calcsam",
    description: "Mastra.ai founder, Gatsby co-founder. Wrote Principles of Building AI Agents.",
    category: "builder",
  },
  {
    name: "Emad Mostaque",
    handle: "EMostaque",
    description: "Founded Stability AI, open-source advocate for generative AI.",
    category: "builder",
  },
  {
    name: "Arthur Mensch",
    handle: "arthurmensch",
    description: "Mistral AI CEO. Building open-weight European LLMs.",
    category: "builder",
  },
  {
    name: "Dylan Patel",
    handle: "dylan522p",
    description: "SemiAnalysis. Deep technical analysis of AI hardware and infrastructure.",
    category: "builder",
  },

  // AI Leaders & Thinkers
  {
    name: "Sam Altman",
    handle: "sama",
    description: "OpenAI CEO. Leading the frontier of AGI development.",
    category: "creator",
  },
  {
    name: "Demis Hassabis",
    handle: "demaborishassabis",
    description: "Google DeepMind CEO. Nobel Prize winner, AlphaFold creator.",
    category: "creator",
  },
  {
    name: "Dario Amodei",
    handle: "DarioAmodei",
    description: "Anthropic CEO. AI safety research, building Claude.",
    category: "creator",
  },
  {
    name: "Greg Brockman",
    handle: "gabordb",
    description: "OpenAI co-founder and former president.",
    category: "creator",
  },
  {
    name: "Fei-Fei Li",
    handle: "draborfeifei",
    description: "Stanford professor, created ImageNet. Co-director Stanford HAI.",
    category: "creator",
  },
  {
    name: "Lex Fridman",
    handle: "lexfridman",
    description: "MIT researcher, podcaster. Deep conversations with AI leaders.",
    category: "creator",
  },
  {
    name: "Eliezer Yudkowsky",
    handle: "ESYudkowsky",
    description: "MIRI founder. AI alignment researcher, prolific writer on AI risk.",
    category: "creator",
  },
  {
    name: "Gary Marcus",
    handle: "GaryMarcus",
    description: "NYU professor emeritus. Critical voice on AI hype and limitations.",
    category: "creator",
  },
  {
    name: "Papers with Code",
    handle: "paperswithcode",
    description: "Tracking ML papers with code. Essential for staying current.",
    category: "creator",
  },
  {
    name: "ML Street Talk",
    handle: "MLStreetTalk",
    description: "In-depth ML podcast. Technical interviews with top researchers.",
    category: "creator",
  },
  {
    name: "Interconnects",
    handle: "natolambert",
    description: "Nathan Lambert. RLHF expert, great blog on LLM training and alignment.",
    category: "creator",
  },

  // New additions
  {
    name: "Mira Murati",
    handle: "maboriramurati",
    description: "Thinking Machines Lab co-founder. Building Tinker for distributed training. Former OpenAI CTO.",
    category: "researcher",
  },
  {
    name: "Jerry Liu",
    handle: "jerryjliu0",
    description: "LlamaIndex creator. Building LiteParse, pioneering context engineering and agent workflows.",
    category: "builder",
  },
  {
    name: "Guillermo Rauch",
    handle: "rauchg",
    description: "Vercel CEO. Distilling 10+ years of React/Next.js expertise into reusable agent skills. Driving the AI SDK ecosystem.",
    category: "builder",
  },
  {
    name: "Sankalp",
    handle: "dejavucoder",
    description: "Wrote the most-bookmarked Claude Code guide (20K bookmarks). Deep dives on prompt caching and agent optimization.",
    category: "educator",
  },
  {
    name: "Boris Cherny",
    handle: "bcherny",
    description: "Head of Claude Code at Anthropic. Open-sourced code-simplifier plugin. Shares the inside story of building AI coding tools.",
    category: "builder",
  },
  {
    name: "Aadit Sheth",
    handle: "aaditsh",
    description: "Curates viral AI learning content — AI coding rules (16K bookmarks), vibe coding guides, learning roadmaps. Consistently high signal.",
    category: "educator",
  },
  {
    name: "Akshay Pachaar",
    handle: "akshay_pachaar",
    description: "Wrote the 384-page AI Engineering Guidebook. Shares novel RAG techniques and comprehensive AI engineering deep dives.",
    category: "educator",
  },
  {
    name: "Virat Singh",
    handle: "virattt",
    description: "Built Dexter, an open-source financial research agent. Demonstrates agentic search without RAG for SEC filings.",
    category: "builder",
  },
  {
    name: "Archie Sengupta",
    handle: "archiexzzz",
    description: "Built a vector DB from first principles. Deep dives on security, token optimization, and design-to-code workflows.",
    category: "builder",
  },
  {
    name: "Alex Prompter",
    handle: "alex_prompter",
    description: "Surfaces key research papers: Verbalized Sampling, SWE-CI benchmark, ACE. Sharp technical analysis of what matters.",
    category: "educator",
  },
  {
    name: "Brady Long",
    handle: "thisguyknowsai",
    description: "Covers AI tools for learning and productivity. Google LearnLM breakdowns with 20K+ bookmarks.",
    category: "educator",
  },
  {
    name: "Poonam Soni",
    handle: "CodeByPoonam",
    description: "Curated the most-bookmarked compilation (25K) of official AI guides from OpenAI, Google, and Anthropic.",
    category: "educator",
  },
];

export const categoryLabels: Record<string, string> = {
  researcher: "Researchers & Scientists",
  educator: "Educators & Creators",
  builder: "Builders & Engineers",
  creator: "Leaders & Thinkers",
};

export const categoryColors: Record<string, string> = {
  researcher: "text-purple-400 border-purple-400/30",
  educator: "text-green-400 border-green-400/30",
  builder: "text-blue-400 border-blue-400/30",
  creator: "text-orange-400 border-orange-400/30",
};

export interface CommunityServer {
  name: string;
  url: string;
  platform: "discord" | "reddit";
}

export const communityServers: CommunityServer[] = [
  // Discord
  { name: "GroundZero AI", url: "https://discord.gg/tdztf4kXvz", platform: "discord" },
  { name: "Eureka Labs", url: "https://discord.gg/axGCnnQ5Mm", platform: "discord" },
  { name: "GPU MODE", url: "https://discord.gg/g5gAD2vFcm", platform: "discord" },
  { name: "Umar Jamil AI", url: "https://discord.gg/GwRfpxPCnH", platform: "discord" },
  { name: "The Neural Nest", url: "https://discord.gg/qt3aPSGNNk", platform: "discord" },
  { name: "TheBloke AI", url: "https://discord.gg/SxswPydGRU", platform: "discord" },
  { name: "fast.ai", url: "https://discord.gg/zJy2PKwWDu", platform: "discord" },
  { name: "Latent Space", url: "https://discord.gg/KaM9H6QQ5c", platform: "discord" },
  { name: "Mech Interp", url: "https://discord.gg/kfAx26aZY3", platform: "discord" },
  { name: "EleutherAI", url: "https://discord.gg/RPKhmstvG2", platform: "discord" },
  { name: "UWaterloo Data Science Club", url: "https://discord.gg/ZYccDZVQ", platform: "discord" },
  { name: "WAT.ai", url: "https://discord.gg/rQ7gZbne", platform: "discord" },

  // Reddit
  { name: "r/MachineLearning", url: "https://www.reddit.com/r/MachineLearning/", platform: "reddit" },
  { name: "r/deeplearning", url: "https://www.reddit.com/r/deeplearning/", platform: "reddit" },
  { name: "r/LocalLLaMA", url: "https://www.reddit.com/r/LocalLLaMA/", platform: "reddit" },
  { name: "r/ChatGPT", url: "https://www.reddit.com/r/ChatGPT/", platform: "reddit" },
];
