export interface Book {
  title: string;
  author: string;
  description: string;
  url: string;
  coverUrl?: string;
  tag: string;
}

export interface Playlist {
  title: string;
  channel: string;
  description: string;
  url: string;
  videoCount?: string;
  tag: string;
}

export interface Platform {
  title: string;
  description: string;
  url: string;
  tag: string;
}

export const books: Book[] = [
  {
    title: "Mathematics for Machine Learning",
    author: "Deisenroht, Faisal & Ong",
    description:
      "The foundational textbook connecting linear algebra, calculus, and probability to ML algorithms. Free PDF available.",
    url: "https://mml-book.github.io/",
    coverUrl:
      "https://mml-book.github.io/static/images/mml-book-cover.jpg",
    tag: "essential",
  },
  {
    title: "Why Machines Learn",
    author: "Anil Ananthaswamy",
    description:
      "The elegant maths behind modern AI — a beautifully written exploration of the mathematical ideas powering deep learning.",
    url: "https://www.amazon.com/Why-Machines-Learn-Elegant-Behind/dp/0593185749",
    coverUrl: "/covers/why-machines-learn.png",
    tag: "recommended",
  },
  {
    title: "The Art of Doing Science and Engineering",
    author: "Richard W. Hamming",
    description:
      "Learning to learn — Hamming's legendary guide to thinking clearly about science, engineering, and research methodology.",
    url: "https://www.amazon.com/Art-Doing-Science-Engineering-Learning/dp/1732265178",
    coverUrl: "/covers/hamming.png",
    tag: "mindset",
  },
  {
    title: "Principles of Building AI Agents",
    author: "Sam Bhagwat",
    description:
      "A practical, no-hype guide to building AI agents — providers, models, prompts, tools, memory, and agentic workflows. Free PDF included.",
    url: "/books/principles-of-building-ai-agents.pdf",
    coverUrl: "/covers/principles-ai-agents.png",
    tag: "agents",
  },
  {
    title: "Principles of Mathematics",
    author: "Bertrand Russell",
    description:
      "Russell's foundational work on mathematical logic — the philosophical underpinnings of mathematics that inform formal reasoning in AI.",
    url: "https://www.amazon.com/Principles-Mathematics-Routledge-Classics-Bertrand/dp/0415487412",
    coverUrl: "/covers/russell.png",
    tag: "foundation",
  },
  {
    title: "Deep Learning",
    author: "Goodfellow, Bengio & Courville",
    description:
      "The comprehensive deep learning textbook. Covers mathematical foundations, modern techniques, and research frontiers. Free online.",
    url: "https://www.deeplearningbook.org/",
    coverUrl: "/covers/deep-learning-goodfellow.jpg",
    tag: "essential",
  },
  {
    title: "Pattern Recognition and Machine Learning",
    author: "Christopher Bishop",
    description:
      "A rigorous treatment of probabilistic ML — Bayesian methods, graphical models, and the mathematical theory behind learning.",
    url: "https://www.microsoft.com/en-us/research/publication/pattern-recognition-machine-learning/",
    coverUrl: "/covers/pattern-recognition-bishop.jpg",
    tag: "advanced",
  },
  {
    title: "Linear Algebra Done Right",
    author: "Sheldon Axler",
    description:
      "The best introduction to linear algebra for understanding vector spaces, eigenvalues, and the math behind neural networks.",
    url: "https://linear.axler.net/",
    coverUrl: "/covers/linear-algebra-axler.jpg",
    tag: "foundation",
  },
  {
    title: "Build a Large Language Model (From Scratch)",
    author: "Sebastian Raschka",
    description:
      "Step-by-step guide to building a ChatGPT-like LLM in PyTorch. Covers tokenization, pretraining, SFT, and RLHF. The companion GitHub repo has 90K+ stars.",
    url: "https://github.com/rasbt/LLMs-from-scratch",
    coverUrl: "/covers/build-llm-raschka.png",
    tag: "essential",
  },
  {
    title: "Machine Learning Q and AI",
    author: "Sebastian Raschka",
    description:
      "264-page Q&A format exploring fundamental AI concepts — multi-GPU training, transformer fine-tuning, vision transformers. Full book readable free online.",
    url: "https://nostarch.com/machine-learning-q-and-ai",
    coverUrl: "/covers/ml-q-and-ai-raschka.jpg",
    tag: "recommended",
  },
  {
    title: "Machine Learning with PyTorch and Scikit-Learn",
    author: "Sebastian Raschka",
    description:
      "Comprehensive 770-page ML textbook covering scikit-learn for tabular data, deep learning, NLP, computer vision, GANs, and transformers.",
    url: "https://github.com/rasbt/machine-learning-book",
    coverUrl: "/covers/ml-pytorch-raschka.jpg",
    tag: "essential",
  },
  {
    title: "Build a Reasoning Model (From Scratch)",
    author: "Sebastian Raschka",
    description:
      "Hands-on guide to adding reasoning capabilities to LLMs — inference-time scaling, reinforcement learning training, and distillation. In progress (early access).",
    url: "https://github.com/rasbt/reasoning-from-scratch",
    coverUrl: "/covers/build-reasoning-raschka.png",
    tag: "advanced",
  },
  {
    title: "Dive into Deep Learning",
    author: "Aston Zhang, Zachary C. Lipton, Mu Li & Alexander J. Smola",
    description:
      "Interactive deep learning textbook with runnable code, math, and discussion. Used at 500+ universities worldwide. Free online.",
    url: "https://d2l.ai/",
    coverUrl: "/covers/dive-into-dl.jpg",
    tag: "essential",
  },
  {
    title: "AI Engineering Guidebook",
    author: "Akshay Pachaar",
    description:
      "384-page free PDF covering LLM foundations, prompt engineering, fine-tuning, RAG, context engineering, AI agents, MCP, and deployment. One of the most comprehensive AI engineering references available.",
    url: "https://www.scribd.com/document/974078407/AI-Engineering-Guidebook",
    coverUrl: "/covers/ai-engineering-guidebook.png",
    tag: "recommended",
  },
  {
    title: "Agentic Software Engineering: The Future of Code",
    author: "AgenticSE Community",
    description:
      "Free online book covering how AI agents are transforming software engineering — from coding agents to autonomous research pipelines.",
    url: "https://agenticse-book.github.io/",
    coverUrl: "/covers/agentic-se.jpg",
    tag: "agents",
  },
  {
    title: "An Introduction to Flow Matching and Diffusion Models",
    author: "Peter Holderrieth & Ezra Erives (MIT)",
    description:
      "MIT 6.S184 lecture notes taking you from zero to SOTA in modern generative AI. Covers ODEs, SDEs, flow matching, and diffusion — the math behind image and video generation.",
    url: "https://diffusion.csail.mit.edu/",
    tag: "advanced",
  },

  // Competitor-sourced books
  {
    title: "Understanding Deep Learning",
    author: "Simon J.D. Prince",
    description:
      "Modern deep learning textbook with beautiful diagrams. Covers fundamentals through transformers and diffusion models. Free PDF.",
    url: "https://udlbook.github.io/udlbook/",
    coverUrl: "/covers/understanding-dl-prince.jpg",
    tag: "essential",
  },
  {
    title: "The Little Book of Deep Learning",
    author: "François Fleuret",
    description:
      "Pocket-sized deep learning reference — 170 pages covering the essentials with clean math and diagrams. Free PDF.",
    url: "https://fleuret.org/public/lbdl.pdf",
    coverUrl: "/covers/little-book-dl-fleuret.jpg",
    tag: "recommended",
  },
  {
    title: "Reinforcement Learning: An Introduction",
    author: "Sutton & Barto",
    description:
      "THE reinforcement learning textbook. Covers MDPs, temporal difference, policy gradient, and deep RL. Free online.",
    url: "http://incompleteideas.net/book/the-book-2nd.html",
    coverUrl: "/covers/rl-sutton-barto.jpg",
    tag: "essential",
  },
  {
    title: "Information Theory, Inference and Learning Algorithms",
    author: "David MacKay",
    description:
      "Brilliant connections between information theory and machine learning. Free PDF from Cambridge.",
    url: "https://www.inference.org.uk/itprnn/book.pdf",
    coverUrl: "/covers/info-theory-mackay.jpg",
    tag: "advanced",
  },
  {
    title: "The Matrix Calculus You Need For Deep Learning",
    author: "Terence Parr & Jeremy Howard",
    description:
      "Bridge the gap between math and deep learning — derivatives, Jacobians, and chain rule for neural networks.",
    url: "https://explained.ai/matrix-calculus/",
    tag: "foundation",
  },
];

export const playlists: Playlist[] = [
  {
    title: "Essence of Linear Algebra",
    channel: "3Blue1Brown",
    description:
      "Visual, intuitive explanations of linear algebra concepts — vectors, matrices, eigenvalues, and more. The gold standard for building geometric intuition.",
    url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab",
    videoCount: "16 videos",
    tag: "linear-algebra",
  },
  {
    title: "Neural Networks",
    channel: "3Blue1Brown",
    description:
      "Deep visual understanding of how neural networks actually work — gradient descent, backpropagation, and what neurons compute.",
    url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi",
    videoCount: "4 videos",
    tag: "neural-nets",
  },
  {
    title: "Essence of Calculus",
    channel: "3Blue1Brown",
    description:
      "Beautiful visual explanations of calculus from first principles — derivatives, integrals, and the chain rule.",
    url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr",
    videoCount: "12 videos",
    tag: "calculus",
  },
  {
    title: "MIT 18.06 Linear Algebra",
    channel: "Gilbert Strang (MIT OCW)",
    description:
      "The legendary Gilbert Strang lectures on linear algebra. Complete MIT course — the definitive resource for deep understanding.",
    url: "https://www.youtube.com/playlist?list=PLE7DDD91010BC51F8",
    videoCount: "34 lectures",
    tag: "linear-algebra",
  },
  {
    title: "StatQuest: Machine Learning",
    channel: "Josh Starmer",
    description:
      "Clear, no-nonsense explanations of ML algorithms and statistics. Perfect for building intuition before diving into math.",
    url: "https://www.youtube.com/playlist?list=PLblh5JKOoLUICTaGLRoHQDuF_7q2GfuJF",
    videoCount: "100+ videos",
    tag: "ml-basics",
  },
  {
    title: "Stanford CS229: Machine Learning",
    channel: "Stanford Online",
    description:
      "Andrew Ng's legendary ML course. Rigorous mathematical treatment of supervised learning, unsupervised learning, and deep learning.",
    url: "https://www.youtube.com/playlist?list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU",
    videoCount: "20 lectures",
    tag: "ml-theory",
  },
  {
    title: "Build a Large Language Model (From Scratch)",
    channel: "Sebastian Raschka",
    description:
      "Full video course implementing a ChatGPT-like LLM in PyTorch — tokenization, pretraining, SFT, RLHF, and inference. Companion to the 90K-star GitHub repo.",
    url: "https://www.youtube.com/playlist?list=PLTKMiZHVd_2IIEsoJrWACkIxLRdfMlw11",
    videoCount: "20+ videos",
    tag: "neural-nets",
  },
  {
    title: "Introduction to Deep Learning",
    channel: "Sebastian Raschka",
    description:
      "Complete university deep learning course — 170 video lectures with PyTorch code. Covers CNNs, RNNs, GANs, transformers, and more.",
    url: "https://sebastianraschka.com/blog/2021/dl-course.html",
    videoCount: "170 lectures",
    tag: "neural-nets",
  },
  {
    title: "Introduction to Machine Learning",
    channel: "Sebastian Raschka",
    description:
      "Full university ML course using scikit-learn. Python, tree methods, feature selection, and core ML algorithms.",
    url: "https://sebastianraschka.com/blog/2021/ml-course.html",
    videoCount: "30+ lectures",
    tag: "ml-basics",
  },
  {
    title: "MIT 6.S184: Flow Matching & Diffusion Models",
    channel: "MIT (Peter Holderrieth)",
    description:
      "From zero to state-of-the-art in generative AI. Self-contained lectures covering flow matching, diffusion models, and modern image/video generation techniques.",
    url: "https://diffusion.csail.mit.edu/",
    videoCount: "Full course",
    tag: "neural-nets",
  },
  {
    title: "Deep Learning with Yacine",
    channel: "Yacine Mahdid",
    description:
      "How to read math in deep learning papers — breaks down the 'alphabet soup' of notation. The 27-min QHAdam tutorial alone is worth the channel.",
    url: "https://www.youtube.com/@deeplearningexplained",
    videoCount: "20+ videos",
    tag: "ml-theory",
  },
  {
    title: "NLP Course: Word Embeddings to Prompting",
    channel: "neural nets.",
    description:
      "Structured NLP curriculum from word embeddings through transformers, pretraining, fine-tuning, and prompting. Complete modern NLP pipeline.",
    url: "https://x.com/cneuralnetwork/status/1995398363869810704",
    videoCount: "8 modules",
    tag: "neural-nets",
  },
];

export interface Channel {
  name: string;
  handle: string;
  description: string;
  url: string;
  subscribers: string;
  tag: string;
}

export const channels: Channel[] = [
  {
    name: "3Blue1Brown",
    handle: "@3blue1brown",
    description:
      "The gold standard for visual math explanations. Linear algebra, calculus, neural networks — beautifully animated and deeply intuitive.",
    url: "https://www.youtube.com/@3blue1brown",
    subscribers: "6.5M",
    tag: "math",
  },
  {
    name: "Andrej Karpathy",
    handle: "@AndrejKarpathy",
    description:
      "Former Tesla AI director and OpenAI founding member. Neural Networks: Zero to Hero series builds GPT from scratch.",
    url: "https://www.youtube.com/@AndrejKarpathy",
    subscribers: "1M+",
    tag: "deep-learning",
  },
  {
    name: "Yannic Kilcher",
    handle: "@YannicKilcher",
    description:
      "In-depth paper walkthroughs and ML news. One of the best channels for understanding cutting-edge research papers.",
    url: "https://www.youtube.com/@YannicKilcher",
    subscribers: "260K",
    tag: "papers",
  },
  {
    name: "Two Minute Papers",
    handle: "@TwoMinutePapers",
    description:
      "Bite-sized summaries of the latest AI research. Great for staying current on what's happening in the field.",
    url: "https://www.youtube.com/@TwoMinutePapers",
    subscribers: "1.5M",
    tag: "papers",
  },
  {
    name: "StatQuest with Josh Starmer",
    handle: "@statquest",
    description:
      "Crystal-clear explanations of statistics and ML algorithms. Makes complex concepts feel simple with humor and BAM!",
    url: "https://www.youtube.com/@statquest",
    subscribers: "1.2M",
    tag: "ml-basics",
  },
  {
    name: "Sentdex",
    handle: "@sentdex",
    description:
      "Practical Python and ML tutorials. Hands-on coding with real projects — from neural networks to self-driving cars.",
    url: "https://www.youtube.com/@sentdex",
    subscribers: "1.3M",
    tag: "coding",
  },
  {
    name: "AI Explained",
    handle: "@aiexplained-official",
    description:
      "Thoughtful analysis of AI developments, capabilities, and implications. Well-researched and balanced perspective.",
    url: "https://www.youtube.com/@aiexplained-official",
    subscribers: "500K",
    tag: "analysis",
  },
  {
    name: "Umar Jamil",
    handle: "@uaborobot",
    description:
      "Deep dives into transformer architectures, attention mechanisms, and LLM internals. Excellent for understanding how models work.",
    url: "https://www.youtube.com/@uaborobot",
    subscribers: "200K",
    tag: "deep-learning",
  },
  {
    name: "Machine Learning Street Talk",
    handle: "@MachineLearningStreetTalk",
    description:
      "Long-form interviews and discussions with top ML researchers. Deep technical conversations about the frontier of AI.",
    url: "https://www.youtube.com/@MachineLearningStreetTalk",
    subscribers: "180K",
    tag: "interviews",
  },
  {
    name: "Sebastian Raschka",
    handle: "@rasaborasbt",
    description:
      "LLM research engineer. Build LLMs from scratch, architecture deep dives, LoRA/DoRA tutorials, and the LLM Architecture Gallery covering 52+ models.",
    url: "https://www.youtube.com/@SebastianRaschka",
    subscribers: "100K+",
    tag: "deep-learning",
  },
  {
    name: "Deep Learning with Yacine",
    handle: "@deeplearningexplained",
    description:
      "Demystifies the math in deep learning papers. Teaches you how to read optimizer equations and paper notation step by step.",
    url: "https://www.youtube.com/@deeplearningexplained",
    subscribers: "50K+",
    tag: "math",
  },
  {
    name: "Thinking Machines Lab",
    handle: "@thinkymachines",
    description:
      "Mira Murati and John Schulman's lab. Research blog covering LLM nondeterminism, on-policy distillation, and LoRA. Cutting-edge and accessible.",
    url: "https://thinkingmachines.ai/blog/",
    subscribers: "New",
    tag: "deep-learning",
  },
];

export const platforms: Platform[] = [
  {
    title: "Math Academy",
    description:
      "AI-powered adaptive math learning platform. Covers everything from algebra to advanced linear algebra and calculus with spaced repetition.",
    url: "https://www.mathacademy.com/",
    tag: "adaptive",
  },
  {
    title: "Khan Academy",
    description:
      "Free, world-class education. Comprehensive math courses from arithmetic through multivariable calculus and linear algebra.",
    url: "https://www.khanacademy.org/math",
    tag: "free",
  },
  {
    title: "MIT OpenCourseWare",
    description:
      "Free access to MIT's entire math and CS curriculum. Includes 18.06 (Linear Algebra), 18.01/02 (Calculus), and 6.034 (AI).",
    url: "https://ocw.mit.edu/",
    tag: "free",
  },
  {
    title: "Brilliant",
    description:
      "Interactive problem-solving platform for math, science, and CS. Great for building intuition through hands-on exploration.",
    url: "https://brilliant.org/",
    tag: "interactive",
  },
  {
    title: "Notion — Study Tracker",
    description:
      "Live study progress tracker — gets updated frequently as studies progress. Check current status and notes.",
    url: "https://www.notion.so/Math-Foundations-for-Machine-Learning-32174da94966803eb7e3c314e9e8d90b",
    tag: "live",
  },
  {
    title: "LLM Architecture Gallery",
    description:
      "Visual gallery of 52+ LLM architectures by Sebastian Raschka — dense, MoE, hybrid, and recurrent models with clickable diagrams, fact sheets, and concept explainers.",
    url: "https://sebastianraschka.com/llm-architecture-gallery/",
    tag: "interactive",
  },
  {
    title: "TensorTonic",
    description:
      "LeetCode for ML papers — implement Transformers, BERT, ViT, DDPM, VAE, and GANs from scratch in cloud-native IDEs. 7,000 users in 2.5 months.",
    url: "https://www.tensortonic.com/",
    tag: "interactive",
  },
  {
    title: "Dive into Deep Learning (d2l.ai)",
    description:
      "Interactive textbook with runnable code in PyTorch, TensorFlow, and JAX. Used at 500+ universities for teaching deep learning.",
    url: "https://d2l.ai/",
    tag: "free",
  },
  {
    title: "AI by Hand (Prof. Tom Yeh)",
    description:
      "Learn AI concepts by working through them by hand — a visual, intuitive approach that builds deep understanding before touching code.",
    url: "https://www.byhand.ai/",
    tag: "interactive",
  },
  {
    title: "Google Learn Your Way",
    description:
      "Uses LearnLM + Gemini to transform any PDF into 5 personalized learning formats. Students scored 78% vs 67% on retention tests.",
    url: "https://learnyourway.withgoogle.com/",
    tag: "adaptive",
  },
];
