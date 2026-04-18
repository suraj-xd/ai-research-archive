export interface Organization {
  name: string;
  country: string;
  description: string;
  url: string;
  category: "lab" | "bigtech" | "startup" | "academic" | "gov";
}

export const organizations: Organization[] = [
  // Frontier Labs
  { name: "OpenAI", country: "US", description: "GPT series, DALL-E, Sora. Leading frontier LLM research.", url: "https://openai.com", category: "lab" },
  { name: "Anthropic", country: "US", description: "Claude models. AI safety-focused research lab.", url: "https://anthropic.com", category: "lab" },
  { name: "Google DeepMind", country: "UK", description: "AlphaFold, Gemini, AlphaGo. World-class research across AI.", url: "https://deepmind.google", category: "lab" },
  { name: "Meta AI (FAIR)", country: "US", description: "LLaMA, Segment Anything, open-source AI research.", url: "https://ai.meta.com", category: "lab" },
  { name: "xAI", country: "US", description: "Grok models. Elon Musk's AI research company.", url: "https://x.ai", category: "lab" },
  { name: "Mistral AI", country: "France", description: "Open-weight European LLMs. Mistral, Mixtral models.", url: "https://mistral.ai", category: "lab" },
  { name: "Cohere", country: "Canada", description: "Enterprise LLMs, RAG, embeddings. Transformer co-author founded.", url: "https://cohere.com", category: "lab" },
  { name: "AI21 Labs", country: "Israel", description: "Jamba models, enterprise AI. Transformer-Mamba hybrid architecture.", url: "https://ai21.com", category: "lab" },
  { name: "Stability AI", country: "UK", description: "Stable Diffusion, open-source generative AI models.", url: "https://stability.ai", category: "lab" },
  { name: "Aleph Alpha", country: "Germany", description: "European sovereign AI. Luminous models for enterprise.", url: "https://aleph-alpha.com", category: "lab" },
  { name: "SSI (Safe Superintelligence)", country: "US", description: "Ilya Sutskever's lab. Focused solely on safe superintelligence.", url: "https://ssi.inc", category: "lab" },

  // Big Tech AI
  { name: "Google Research", country: "US", description: "Transformer paper origin. TensorFlow, BERT, T5, PaLM.", url: "https://research.google", category: "bigtech" },
  { name: "Microsoft Research", country: "US", description: "Broad AI research. Phi models, Orca, DeepSpeed.", url: "https://www.microsoft.com/en-us/research/", category: "bigtech" },
  { name: "Apple ML Research", country: "US", description: "On-device ML, Core ML, Apple Intelligence research.", url: "https://machinelearning.apple.com", category: "bigtech" },
  { name: "NVIDIA Research", country: "US", description: "GPU computing pioneer. AI hardware and software research.", url: "https://www.nvidia.com/en-us/research/", category: "bigtech" },
  { name: "Amazon Science", country: "US", description: "Alexa AI, AWS AI/ML, robotics research.", url: "https://www.amazon.science", category: "bigtech" },
  { name: "IBM Research", country: "US", description: "Granite models, AI governance, quantum computing.", url: "https://research.ibm.com", category: "bigtech" },
  { name: "Samsung AI", country: "South Korea", description: "On-device AI, computer vision, NLP research.", url: "https://research.samsung.com/artificial-intelligence", category: "bigtech" },
  { name: "Intel Labs", country: "US", description: "Neural network hardware, Gaudi accelerators, AI research.", url: "https://www.intel.com/content/www/us/en/research/overview.html", category: "bigtech" },

  // Chinese AI
  { name: "DeepSeek", country: "China", description: "DeepSeek V3, R1. Open-weight frontier models rivaling GPT-4.", url: "https://deepseek.com", category: "startup" },
  { name: "Alibaba DAMO / Qwen", country: "China", description: "Qwen models, open-source LLMs. Strong multilingual capability.", url: "https://qwenlm.github.io", category: "bigtech" },
  { name: "Baidu AI", country: "China", description: "ERNIE models, PaddlePaddle framework. Chinese AI leader.", url: "https://ai.baidu.com", category: "bigtech" },
  { name: "Tencent AI Lab", country: "China", description: "Hunyuan models, NLP, computer vision, game AI.", url: "https://ai.tencent.com", category: "bigtech" },
  { name: "ByteDance AI", country: "China", description: "Doubao/Seed models, recommendation systems, video AI.", url: "https://www.bytedance.com", category: "bigtech" },
  { name: "Zhipu AI / GLM", country: "China", description: "GLM-4 models, ChatGLM. Tsinghua University spinoff.", url: "https://zhipuai.cn", category: "startup" },
  { name: "01.AI", country: "China", description: "Yi models. Founded by Kai-Fu Lee, open-source bilingual LLMs.", url: "https://01.ai", category: "startup" },
  { name: "Moonshot AI (Kimi)", country: "China", description: "Kimi assistant with long-context capability. Founded by ex-Googlers.", url: "https://moonshot.cn", category: "startup" },
  { name: "SenseTime", country: "China", description: "Computer vision, autonomous driving, AI platform.", url: "https://www.sensetime.com", category: "startup" },
  { name: "BAAI", country: "China", description: "Beijing Academy of AI. Aquila models, FlagAI framework.", url: "https://www.baai.ac.cn", category: "academic" },

  // Indian AI
  { name: "Sarvam AI", country: "India", description: "Building foundational AI for India. Indic language models.", url: "https://sarvam.ai", category: "startup" },
  { name: "Krutrim (Ola)", country: "India", description: "India's first AI unicorn. Multilingual Indian language LLM.", url: "https://olakrutrim.com", category: "startup" },
  { name: "IIT AI Research", country: "India", description: "AI research across IITs — NLP, computer vision, robotics.", url: "https://www.iitb.ac.in", category: "academic" },

  // Other Asian AI
  { name: "NAVER AI Lab", country: "South Korea", description: "HyperCLOVA, search AI. Korea's leading AI research.", url: "https://www.navercorp.com", category: "bigtech" },
  { name: "Kakao Brain", country: "South Korea", description: "KoGPT, multimodal AI research from Korea.", url: "https://www.kakaobrain.com", category: "startup" },
  { name: "Preferred Networks", country: "Japan", description: "Japanese AI lab. Deep learning for robotics and drug discovery.", url: "https://www.preferred.jp/en/", category: "startup" },
  { name: "RIKEN AIP", country: "Japan", description: "Japan's premier AI research center. Broad fundamental research.", url: "https://aip.riken.jp", category: "gov" },

  // European AI
  { name: "INRIA", country: "France", description: "French national institute for CS and applied math research.", url: "https://www.inria.fr", category: "gov" },
  { name: "Max Planck Institute", country: "Germany", description: "Fundamental AI research. Intelligent systems, computer vision.", url: "https://www.mpg.de", category: "academic" },
  { name: "ELLIS", country: "Europe", description: "European Lab for Learning & Intelligent Systems. Pan-European network.", url: "https://ellis.eu", category: "academic" },
  { name: "Kyutai", country: "France", description: "Open-science AI lab funded by Xavier Niel. Moshi real-time AI.", url: "https://kyutai.org", category: "lab" },

  // Startups & Rising
  { name: "Hugging Face", country: "US/France", description: "The GitHub of ML. Models, datasets, transformers library.", url: "https://huggingface.co", category: "startup" },
  { name: "Together AI", country: "US", description: "Open-source model training and inference. RedPajama, FlashAttention.", url: "https://together.ai", category: "startup" },
  { name: "Perplexity AI", country: "US", description: "AI-powered search engine. Real-time knowledge with citations.", url: "https://perplexity.ai", category: "startup" },
  { name: "Runway", country: "US", description: "Gen-3 video generation. Pioneering creative AI tools.", url: "https://runwayml.com", category: "startup" },
  { name: "Adept AI", country: "US", description: "Building AI agents that use software tools like humans.", url: "https://adept.ai", category: "startup" },
  { name: "Character.AI", country: "US", description: "Conversational AI characters. Founded by transformer co-authors.", url: "https://character.ai", category: "startup" },
  { name: "Inflection AI", country: "US", description: "Pi personal AI assistant. Founded by DeepMind co-founder.", url: "https://inflection.ai", category: "startup" },
  { name: "Lightning AI", country: "US", description: "PyTorch Lightning, LitGPT. ML engineering tools and education.", url: "https://lightning.ai", category: "startup" },
  { name: "Weights & Biases", country: "US", description: "ML experiment tracking, model registry. Essential MLOps platform.", url: "https://wandb.ai", category: "startup" },
  { name: "Replicate", country: "US", description: "Run ML models in the cloud with one line of code.", url: "https://replicate.com", category: "startup" },

  // Academic Powerhouses
  { name: "Stanford HAI", country: "US", description: "Stanford Human-Centered AI. Foundation models research, AI Index.", url: "https://hai.stanford.edu", category: "academic" },
  { name: "MIT CSAIL", country: "US", description: "MIT's Computer Science & AI Lab. Broad foundational research.", url: "https://www.csail.mit.edu", category: "academic" },
  { name: "Berkeley AI Research", country: "US", description: "BAIR. RL, robotics, NLP, computer vision research.", url: "https://bair.berkeley.edu", category: "academic" },
  { name: "CMU ML Department", country: "US", description: "First ML department. Statistical learning, robotics, NLP.", url: "https://www.ml.cmu.edu", category: "academic" },
  { name: "Mila", country: "Canada", description: "Montreal Institute for Learning Algorithms. Yoshua Bengio's lab.", url: "https://mila.quebec", category: "academic" },
  { name: "Vector Institute", country: "Canada", description: "Toronto AI institute. Geoffrey Hinton affiliated.", url: "https://vectorinstitute.ai", category: "academic" },
  { name: "Allen Institute for AI", country: "US", description: "AI2. OLMo open models, Semantic Scholar, non-profit research.", url: "https://allenai.org", category: "academic" },
  { name: "EleutherAI", country: "Decentralized", description: "Open-source AI research collective. GPT-Neo, The Pile dataset.", url: "https://eleuther.ai", category: "academic" },
  { name: "LAION", country: "Germany", description: "Large-scale AI Open Network. Open datasets for ML research.", url: "https://laion.ai", category: "academic" },
  { name: "Tsinghua KEG", country: "China", description: "Tsinghua Knowledge Engineering Group. GLM models, knowledge graphs.", url: "https://keg.cs.tsinghua.edu.cn", category: "academic" },

  // Government & National
  { name: "DARPA AI", country: "US", description: "US Defense Advanced Research. Funded foundational AI breakthroughs.", url: "https://www.darpa.mil", category: "gov" },
  { name: "AISI", country: "UK", description: "UK AI Safety Institute. Government-backed AI safety evaluation.", url: "https://www.aisi.gov.uk", category: "gov" },
];

export const orgCategoryLabels: Record<string, string> = {
  lab: "Frontier Labs",
  bigtech: "Big Tech AI",
  startup: "Startups & Rising",
  academic: "Academic & Research",
  gov: "Government & National",
};

export const orgCategoryColors: Record<string, string> = {
  lab: "text-red-400 border-red-400/30",
  bigtech: "text-blue-400 border-blue-400/30",
  startup: "text-green-400 border-green-400/30",
  academic: "text-purple-400 border-purple-400/30",
  gov: "text-orange-400 border-orange-400/30",
};
