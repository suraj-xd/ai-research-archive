export interface Tool {
  name: string;
  description: string;
  url: string;
  category: "notebook" | "platform" | "framework" | "visualization" | "data" | "deployment";
}

export interface PracticeSite {
  name: string;
  description: string;
  url: string;
  category: "competition" | "exercises" | "courses" | "interactive";
}

export const tools: Tool[] = [
  // Notebooks & IDEs
  { name: "Google Colab", description: "Free GPU notebooks in the browser. The fastest way to start training models.", url: "https://colab.research.google.com", category: "notebook" },
  { name: "Jupyter Notebook", description: "The original interactive computing notebook. Run code, visualize, document.", url: "https://jupyter.org", category: "notebook" },
  { name: "Kaggle Notebooks", description: "Free GPU/TPU notebooks with access to datasets and competitions.", url: "https://www.kaggle.com/code", category: "notebook" },
  { name: "Lightning AI Studios", description: "Cloud IDE with GPUs. PyTorch Lightning ecosystem, LitGPT.", url: "https://lightning.ai", category: "notebook" },
  { name: "Cursor", description: "AI-powered code editor. Great for writing ML code with AI assistance.", url: "https://cursor.com", category: "notebook" },

  // Frameworks
  { name: "PyTorch", description: "The dominant deep learning framework. Dynamic computation graphs, Pythonic API.", url: "https://pytorch.org", category: "framework" },
  { name: "TensorFlow", description: "Google's ML framework. Production-ready, TF Lite for mobile, TF.js for web.", url: "https://tensorflow.org", category: "framework" },
  { name: "JAX", description: "Google's high-performance ML framework. Autograd + XLA compilation.", url: "https://jax.readthedocs.io", category: "framework" },
  { name: "Hugging Face Transformers", description: "Pre-trained models for NLP, vision, audio. The pip install of ML.", url: "https://huggingface.co/transformers", category: "framework" },
  { name: "tinygrad", description: "George Hotz's minimal deep learning framework. Under 1000 lines of code.", url: "https://tinygrad.org", category: "framework" },
  { name: "scikit-learn", description: "Classical ML algorithms. SVMs, random forests, clustering, preprocessing.", url: "https://scikit-learn.org", category: "framework" },

  // Platforms
  { name: "Weights & Biases", description: "Experiment tracking, model registry, hyperparameter sweeps. Essential MLOps.", url: "https://wandb.ai", category: "platform" },
  { name: "Hugging Face Hub", description: "Host and share models, datasets, and demos. The GitHub of ML.", url: "https://huggingface.co", category: "platform" },
  { name: "Replicate", description: "Run ML models in the cloud with one API call. No infrastructure needed.", url: "https://replicate.com", category: "platform" },
  { name: "Together AI", description: "Run and fine-tune open-source models. Fast inference, competitive pricing.", url: "https://together.ai", category: "platform" },
  { name: "Modal", description: "Run GPU workloads in the cloud. Serverless, pay-per-second.", url: "https://modal.com", category: "platform" },
  { name: "Lambda Cloud", description: "GPU cloud for ML training. A100s, H100s on demand.", url: "https://lambdalabs.com/service/gpu-cloud", category: "platform" },

  // Visualization & Monitoring
  { name: "TensorBoard", description: "Visualize training metrics, model graphs, embeddings. Built into TF and PyTorch.", url: "https://www.tensorflow.org/tensorboard", category: "visualization" },
  { name: "Netron", description: "Visualize neural network architectures. Supports ONNX, PyTorch, TF models.", url: "https://netron.app", category: "visualization" },
  { name: "Streamlit", description: "Build ML demos and data apps in Python. Rapid prototyping for ML.", url: "https://streamlit.io", category: "visualization" },
  { name: "Gradio", description: "Build and share ML demos. Hugging Face Spaces integration.", url: "https://gradio.app", category: "visualization" },

  // Data
  { name: "Arxiv", description: "Open-access research papers. Where all ML papers are published first.", url: "https://arxiv.org/list/cs.LG/recent", category: "data" },
  { name: "Papers with Code", description: "ML papers with code implementations, benchmarks, and leaderboards.", url: "https://paperswithcode.com", category: "data" },
  { name: "Semantic Scholar", description: "AI-powered academic search. Find papers, citations, related work.", url: "https://www.semanticscholar.org", category: "data" },
  { name: "Connected Papers", description: "Explore academic paper graphs. Find related work visually.", url: "https://www.connectedpapers.com", category: "data" },
  { name: "Dataset Search", description: "Google's dataset search engine. Find datasets across the web.", url: "https://datasetsearch.research.google.com", category: "data" },

  // Deployment
  { name: "ONNX Runtime", description: "Cross-platform ML inference. Convert and run models anywhere.", url: "https://onnxruntime.ai", category: "deployment" },
  { name: "vLLM", description: "High-throughput LLM serving. PagedAttention for efficient inference.", url: "https://vllm.ai", category: "deployment" },
  { name: "Ollama", description: "Run LLMs locally. One command to download and serve models.", url: "https://ollama.com", category: "deployment" },
  { name: "LM Studio", description: "Desktop app for running local LLMs. User-friendly, supports GGUF.", url: "https://lmstudio.ai", category: "deployment" },

  // AI Tools & Agents
  { name: "Crawl4AI", description: "Open-source web crawler that transforms web content into clean, LLM-ready Markdown. 63K+ stars. Essential for building RAG pipelines.", url: "https://github.com/unclecode/crawl4ai", category: "data" },
  { name: "Aider", description: "AI pair programming in the terminal. Works with Claude, GPT, and local models. Maps entire repos, auto-commits. 43K+ stars.", url: "https://github.com/Aider-AI/aider", category: "platform" },
  { name: "Exo", description: "Distribute AI inference across multiple devices — turn your Mac, iPhone, and iPad into a unified compute cluster. 43K+ stars.", url: "https://github.com/exo-explore/exo", category: "deployment" },
  { name: "LiteParse", description: "Model-free document parsing for AI agents. No GPU needed, processes 500 pages in 2 seconds. More accurate than PyPDF for RAG pipelines.", url: "https://github.com/run-llama/litepparse", category: "data" },
  { name: "AIChat", description: "All-in-one LLM CLI: shell assistant, chat-REPL, RAG, tools, and agents. Supports 20+ providers. Swiss Army knife for terminal AI workflows.", url: "https://github.com/sigoden/aichat", category: "platform" },
  { name: "Gemini CLI", description: "Google's open-source AI agent for the terminal. Free high usage limits with Gemini 2.5 Pro. Great entry point for AI-assisted coding.", url: "https://github.com/google-gemini/gemini-cli", category: "platform" },
  { name: "quickarXiv", description: "Swap 'arxiv' to 'quickarxiv' in any paper URL for an instant blog with figures, insights, and explanations. Uses DeepSeek OCR.", url: "https://quickarxiv.com", category: "data" },
  { name: "papiers.ai", description: "New arXiv interface for the AI era. Swap 'arxiv' to 'papiers' in any paper URL for an enhanced reading experience.", url: "https://papiers.ai", category: "data" },
  { name: "Helicone LLM Cost Calculator", description: "Compare costs across 300+ AI models side by side. Essential for budget planning when building AI applications.", url: "https://www.helicone.ai/llm-cost", category: "platform" },
  { name: "OVA.db", description: "Database of 2000+ AI models from 50+ providers. Compare pricing, capabilities, and context windows in one place.", url: "https://ovadb.vercel.app/", category: "data" },
  { name: "Hallucination Leaderboard", description: "Vectara's public benchmark ranking 80+ LLMs on hallucination rates. Critical for choosing reliable models for production.", url: "https://github.com/vectara/hallucination-leaderboard", category: "data" },
  { name: "Chroma", description: "AI-native open-source vector database. 27K+ stars. Also launched Context-1, a 20B parameter search agent (Apache 2.0).", url: "https://github.com/chroma-core/chroma", category: "framework" },
  { name: "Goose", description: "General-purpose open-source AI agent from the Linux Foundation. Desktop app, CLI, and API. Extensible via 70+ MCP tools. 39K+ stars.", url: "https://github.com/block/goose", category: "platform" },

  // Competitor-sourced tools
  { name: "LLM Visualization", description: "Interactive 3D visualization of a complete LLM — see tokens flow through layers, attention heads, and MLP blocks in real time.", url: "https://bbycroft.net/llm", category: "visualization" },
  { name: "Transformer Explainer", description: "Interactive visualization showing exactly how transformers process text — attention patterns, embeddings, and generation step by step.", url: "https://poloclub.github.io/transformer-explainer/", category: "visualization" },
  { name: "GPU Glossary", description: "Modal's comprehensive glossary of GPU computing terms — CUDA cores, tensor cores, memory hierarchy, and parallelism concepts.", url: "https://modal.com/gpu-glossary", category: "visualization" },
  { name: "Matrix Visualizer", description: "Interactive visualization of matrix operations — see how transformations work geometrically.", url: "https://shad.io/MatVis/", category: "visualization" },
  { name: "MiniTorch", description: "DIY teaching library for machine learning engineers. Build a PyTorch-like framework from scratch to understand autograd and tensors.", url: "https://minitorch.github.io/", category: "framework" },
  { name: "ConvNetJS", description: "Karpathy's browser-based neural network training. Visualize CNNs learning in real time, no setup needed.", url: "https://cs.stanford.edu/people/karpathy/convnetjs/index.html", category: "visualization" },
  { name: "Paper2Code", description: "Claude Code skill that turns any arxiv paper into working code. Every line traces back to the paper section it came from — unspecified details are flagged, never assumed. 700+ stars.", url: "https://github.com/PrathamLearnsToCode/paper2code", category: "data" },
];

export const practiceSites: PracticeSite[] = [
  // Competitions
  { name: "Kaggle", description: "ML competitions, datasets, and notebooks. The competitive ML platform.", url: "https://kaggle.com", category: "competition" },
  { name: "DrivenData", description: "Data science competitions for social good. Real-world impact problems.", url: "https://drivendata.org", category: "competition" },
  { name: "Zindi", description: "Africa-focused ML competitions. Solve real problems with data science.", url: "https://zindi.africa", category: "competition" },
  { name: "AICrowd", description: "ML challenges from research labs. NeurIPS, ICML competition platform.", url: "https://aicrowd.com", category: "competition" },

  // Exercises & Practice
  { name: "LeetCode ML", description: "ML and data science interview questions. Practice for FAANG interviews.", url: "https://leetcode.com/problemset/machine-learning/", category: "exercises" },
  { name: "Deep Learning Drizzle", description: "Curated collection of ML courses, tutorials, and assignments from top universities.", url: "https://deep-learning-drizzle.github.io", category: "exercises" },
  { name: "ML Exercises (Sebastian Raschka)", description: "Hands-on exercises for ML fundamentals. Practice implementing from scratch.", url: "https://github.com/rasbt/machine-learning-book", category: "exercises" },
  { name: "fast.ai Practical DL", description: "Top-down practical deep learning course. Code-first, theory-later approach.", url: "https://course.fast.ai", category: "exercises" },
  { name: "Hugging Face Course", description: "Free NLP course using Transformers library. Hands-on with pre-trained models.", url: "https://huggingface.co/learn", category: "exercises" },
  { name: "Full Stack Deep Learning", description: "Production ML course. MLOps, deployment, monitoring, team workflows.", url: "https://fullstackdeeplearning.com", category: "exercises" },
  { name: "Made With ML", description: "End-to-end ML project course. From idea to production with best practices.", url: "https://madewithml.com", category: "exercises" },

  // Interactive
  { name: "TensorFlow Playground", description: "Visualize neural networks in your browser. Tweak architectures, see results live.", url: "https://playground.tensorflow.org", category: "interactive" },
  { name: "CNN Explainer", description: "Interactive visualization of convolutional neural networks. See activations flow.", url: "https://poloclub.github.io/cnn-explainer/", category: "interactive" },
  { name: "GAN Lab", description: "Interactive GAN experiments in the browser. Watch generators and discriminators learn.", url: "https://poloclub.github.io/ganlab/", category: "interactive" },
  { name: "Distill.pub", description: "Interactive ML research articles. Beautiful visualizations of complex concepts.", url: "https://distill.pub", category: "interactive" },
  { name: "Seeing Theory", description: "Visual introduction to probability and statistics. Interactive, beautiful.", url: "https://seeing-theory.brown.edu", category: "interactive" },
  { name: "3Blue1Brown Interactive", description: "Interactive versions of 3Blue1Brown lessons. Explore math concepts hands-on.", url: "https://www.3blue1brown.com", category: "interactive" },
  { name: "TensorTonic", description: "LeetCode for ML papers. Implement Transformers, BERT, ViT, GANs from scratch in cloud IDEs. 200+ problems.", url: "https://www.tensortonic.com/", category: "interactive" },
  { name: "Neural Network Visualization", description: "Interactive 3D visualization of an MLP training on MNIST. Built with Three.js and PyTorch. See what networks actually learn.", url: "https://nn-vis.noelith.dev/", category: "interactive" },
  { name: "Google AI Edge Gallery", description: "On-device ML showcase for Android and iOS. Run Gemma, multimodal analysis, and transcription directly on mobile devices.", url: "https://github.com/google-ai-edge/gallery", category: "interactive" },

  // Courses
  { name: "DeepLearning.AI", description: "Andrew Ng's specializations. Deep Learning, MLOps, NLP, GenAI courses.", url: "https://deeplearning.ai", category: "courses" },
  { name: "Stanford CS231n", description: "Convolutional Neural Networks for Visual Recognition. Legendary Stanford course.", url: "https://cs231n.stanford.edu", category: "courses" },
  { name: "Stanford CS224n", description: "NLP with Deep Learning. Stanford's definitive NLP course.", url: "https://web.stanford.edu/class/cs224n/", category: "courses" },
  { name: "MIT 6.S191", description: "Introduction to Deep Learning. MIT's fast-paced modern DL course.", url: "https://introtodeeplearning.com", category: "courses" },
  { name: "NYU Deep Learning (Yann LeCun)", description: "Yann LeCun's NYU deep learning course. Energy-based models, self-supervised learning.", url: "https://atcold.github.io/NYU-DLSP21/", category: "courses" },
  { name: "Build a LLM from Scratch (Raschka)", description: "Free YouTube course: implement a ChatGPT-like LLM in PyTorch from scratch. 90K-star GitHub repo companion.", url: "https://www.youtube.com/playlist?list=PLTKMiZHVd_2IIEsoJrWACkIxLRdfMlw11", category: "courses" },
  { name: "Deep Learning Fundamentals (Lightning AI)", description: "Sebastian Raschka's 10-unit modern DL course. Multi-GPU training, self-supervised learning, hyperparameter optimization.", url: "https://lightning.ai/pages/courses/deep-learning-fundamentals/", category: "courses" },
  { name: "PyTorch in One Hour (Raschka)", description: "From tensors to multi-GPU training in one sitting. Free, code-first PyTorch tutorial.", url: "https://sebastianraschka.com/teaching/pytorch-1h", category: "courses" },
  { name: "GPU Performance Engineering Curriculum", description: "Complete path from CUDA basics to frontier AI lab GPU techniques — matrix multiplication, FlashAttention, Triton, CUTLASS, and multi-GPU.", url: "https://github.com/wafer-ai/gpu-perf-engineering-resources", category: "courses" },
  { name: "Nanochat (Karpathy)", description: "Build a ChatGPT clone from scratch in ~8K lines. Covers tokenization, pretraining, SFT, RLHF, and inference. ~$100 to train.", url: "https://github.com/karpathy/nanochat", category: "exercises" },
  { name: "Autoresearch (Karpathy)", description: "Run autonomous ML experiments with AI agents. Edit a prompt file, the agent rewrites training code and runs 12 experiments/hour.", url: "https://github.com/karpathy/autoresearch", category: "exercises" },
  { name: "Everything Claude Code", description: "146K-star mega-repo of battle-tested Claude Code configs: 47 agents, 181+ skills, hooks system, multi-language rules. The ultimate reference.", url: "https://github.com/affaan-m/everything-claude-code", category: "exercises" },
  { name: "PufferLib", description: "The best starting point for reinforcement learning after learning backpropagation. Recommended by yacineMTB.", url: "https://puffer.ai", category: "courses" },

  // Competitor-sourced practice sites
  { name: "Deep-ML", description: "ML coding challenges — implement algorithms from scratch. LeetCode-style problems for machine learning.", url: "https://www.deep-ml.com/", category: "exercises" },
  { name: "Hugging Face Deep RL Course", description: "Free deep reinforcement learning course. Theory + practice with stable-baselines3 and RL environments.", url: "https://huggingface.co/learn/deep-rl-course/unit0/introduction", category: "courses" },
  { name: "Papers in 100 Lines of Code", description: "ML paper implementations in exactly 100 lines. Understand the core of each paper without boilerplate.", url: "https://github.com/MaximeVandegar/Papers-in-100-Lines-of-Code", category: "exercises" },
  { name: "Hugging Face smol-course", description: "Build small but capable language models. Hands-on course on efficient LLMs from Hugging Face.", url: "https://github.com/huggingface/smol-course", category: "courses" },
  { name: "UC Irvine ML Repository", description: "Classic ML dataset repository. 600+ datasets used in thousands of research papers.", url: "https://archive.ics.uci.edu/", category: "exercises" },
  { name: "Image Kernels (Interactive)", description: "See how image convolution kernels work in real time. Blur, sharpen, edge detect — understand the building blocks of CNNs.", url: "https://setosa.io/ev/image-kernels/", category: "interactive" },
  { name: "LearnPyTorch.io", description: "Daniel Bourke's comprehensive PyTorch tutorial. Zero to mastery with hands-on code and visual explanations.", url: "https://www.learnpytorch.io/", category: "courses" },
  { name: "Fine-Tune Llama 3.1 with QLoRA + W&B", description: "Hands-on notebook: fine-tune Llama 3.1 for medical dialogue summarization using QLoRA with Weights & Biases tracking.", url: "https://github.com/PrathamLearnsToCode/Llama-3.1_QLoRA_medical_dialogue_summary_finetuning-WandB", category: "exercises" },
];

export const toolCategoryLabels: Record<string, string> = {
  notebook: "Notebooks & IDEs",
  platform: "Platforms",
  framework: "Frameworks",
  visualization: "Visualization",
  data: "Papers & Data",
  deployment: "Deployment & Inference",
};

export const practiceCategoryLabels: Record<string, string> = {
  competition: "Competitions",
  exercises: "Exercises & Projects",
  interactive: "Interactive",
  courses: "Courses",
};
