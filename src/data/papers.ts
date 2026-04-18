export interface Paper {
  title: string;
  authors: string;
  description: string;
  url: string;
  category: "architecture" | "training" | "reasoning" | "rag" | "agents" | "efficiency" | "foundational" | "ilya-30u30";
}

export const papers: Paper[] = [
  // Architecture
  {
    title: "mHC: Manifold-Constrained Hyper-Connections",
    authors: "DeepSeek Research",
    description:
      "Replaces the residual connection paradigm (x + f(x)) used in every major transformer for the past decade. Projects residual paths onto Birkhoff Polytope manifold — neither explode nor collapse at any depth.",
    url: "https://arxiv.org/abs/2512.24880",
    category: "architecture",
  },
  {
    title: "Less is More: Recursive Reasoning with Tiny Networks",
    authors: "Jolicoeur-Martineau et al. (Samsung SAIL)",
    description:
      "A 7M parameter model beats DeepSeek-R1, Gemini 2.5 Pro, and o3-mini on ARC-AGI benchmarks. Proves recursive reasoning can compensate for massive parameter counts.",
    url: "https://arxiv.org/abs/2510.04871",
    category: "architecture",
  },
  {
    title: "Holographic Transformers",
    authors: "Various",
    description:
      "Physics-inspired attention using wave interference — builds holographic memory with cosines, sines, and phase modulation instead of standard dot-product attention.",
    url: "https://arxiv.org/abs/2509.19331",
    category: "architecture",
  },
  {
    title: "Recursive Self-Aggregation for Deep Thinking",
    authors: "RSA Team",
    description:
      "Test-time scaling via evolutionary algorithms — combines parallel and sequential scaling. Enables Qwen3-4B to compete with DeepSeek-R1 on AIME and LiveCodeBench.",
    url: "https://arxiv.org/abs/2509.26626",
    category: "reasoning",
  },

  // Training & Optimization
  {
    title: "Agentic Context Engineering (ACE)",
    authors: "Stanford & SambaNova",
    description:
      "Makes fine-tuning potentially irrelevant — evolves the context instead of weights. Delta updates and grow-and-refine mechanisms. 59.5% on AppWorld (+10.6pp).",
    url: "https://arxiv.org/abs/2510.04618",
    category: "training",
  },
  {
    title: "Verbalized Sampling",
    authors: "Stanford",
    description:
      "Recovers 66.8% of base model diversity hidden by RLHF alignment. Single prompting technique: ask LLMs to generate multiple responses with probability estimates. 2x diversity, zero safety loss.",
    url: "https://www.analyticsvidhya.com/blog/2025/10/verbalized-sampling/",
    category: "training",
  },
  {
    title: "GEPA: Reflective Prompt Evolution Outperforms RL",
    authors: "Various (ICLR 2026 Oral)",
    description:
      "Prompt optimization via evolutionary search outperforms GRPO by 10-20% while using 35x fewer rollouts. Also beats MIPROv2 by 10%+.",
    url: "https://arxiv.org/abs/2507.19457",
    category: "training",
  },
  {
    title: "Drag-and-Drop LLMs: Zero-Shot Prompt-to-Weights",
    authors: "Liang et al. (NUS, UT Austin, Oxford)",
    description:
      "Eliminates per-task fine-tuning — maps task prompts directly to LoRA weights via hyper-convolutional decoder. 12,000x lower overhead than full fine-tuning.",
    url: "https://arxiv.org/abs/2506.16406",
    category: "efficiency",
  },

  // Reasoning
  {
    title: "Categories of Inference-Time Scaling",
    authors: "Sebastian Raschka",
    description:
      "Overview of inference-scaling approaches — recursive language models, chain-of-thought, tree search, and their trade-offs for improved reasoning.",
    url: "https://magazine.sebastianraschka.com/p/categories-of-inference-time-scaling",
    category: "reasoning",
  },

  // RAG
  {
    title: "PageIndex: RAG Without Vector Databases (98.7% accuracy)",
    authors: "Akshay Kalane",
    description:
      "RAG approach that achieves 98.7% on FinanceBench without vector DBs, embeddings, chunking, or similarity search. Challenges the assumption that RAG = vector DB.",
    url: "https://pub.towardsai.net/pageindex-the-rag-framework-that-threw-out-vector-databases-and-still-hit-98-7-accuracy-d194e0549478",
    category: "rag",
  },

  // Agents
  {
    title: "SWE-CI: Coding Agents Fail at Long-Term Maintenance",
    authors: "Alibaba",
    description:
      "Benchmark showing coding agents that ace one-shot tasks fail catastrophically at continuous integration — managing PRs, handling merge conflicts, and maintaining code quality over time.",
    url: "https://arxiv.org/abs/2504.09696",
    category: "agents",
  },
  {
    title: "MAKER: Multi-Agent for Knowledge-Enabled Reasoning",
    authors: "Various",
    description:
      "Multi-agent system achieving million-step zero errors in knowledge reasoning tasks. Demonstrates reliable long-horizon agent coordination.",
    url: "https://arxiv.org/abs/2501.15253",
    category: "agents",
  },

  // Efficiency
  {
    title: "Attention Is All You Need",
    authors: "Vaswani et al. (Google Brain)",
    description:
      "The foundational transformer paper. Introduced self-attention, multi-head attention, and positional encoding — the architecture behind every modern LLM.",
    url: "https://arxiv.org/abs/1706.03762",
    category: "architecture",
  },
  {
    title: "Scaling Laws for Neural Language Models",
    authors: "Kaplan et al. (OpenAI)",
    description:
      "How LLM performance scales with data, compute, and model size. The foundation of modern scaling decisions.",
    url: "https://arxiv.org/abs/2001.08361",
    category: "training",
  },
  {
    title: "Training Compute-Optimal LLMs (Chinchilla)",
    authors: "Hoffmann et al. (DeepMind)",
    description:
      "Most LLMs are undertrained — compute-optimal training requires ~20 tokens per parameter. Changed how labs scale models.",
    url: "https://arxiv.org/abs/2203.15556",
    category: "training",
  },
  {
    title: "LoRA: Low-Rank Adaptation of Large Language Models",
    authors: "Hu et al. (Microsoft)",
    description:
      "Freeze model weights and inject trainable low-rank matrices — fine-tune LLMs with 10,000x fewer parameters. The standard for efficient adaptation.",
    url: "https://arxiv.org/abs/2106.09685",
    category: "efficiency",
  },

  // Ilya 30u30 & Foundational Papers
  {
    title: "Deep Residual Learning for Image Recognition (ResNet)",
    authors: "He et al.",
    description:
      "Introduced skip connections that allow training of 100+ layer networks — the backbone architecture behind most modern vision and language models.",
    url: "https://arxiv.org/abs/1512.03385",
    category: "architecture",
  },
  {
    title: "Neural Turing Machines",
    authors: "Graves et al. (DeepMind)",
    description:
      "Neural networks augmented with external memory and attention-based read/write heads — an early blueprint for memory-augmented reasoning.",
    url: "https://arxiv.org/abs/1410.5401",
    category: "architecture",
  },
  {
    title: "ImageNet Classification with Deep Convolutional Neural Networks (AlexNet)",
    authors: "Krizhevsky, Sutskever & Hinton",
    description:
      "The paper that ignited the deep learning revolution — won ImageNet 2012 by a massive margin using GPUs, ReLU, and dropout.",
    url: "https://papers.nips.cc/paper/2012/hash/c399862d3b9d6b76c8436e924a68c45b-Abstract.html",
    category: "architecture",
  },
  {
    title: "Neural Machine Translation by Jointly Learning to Align and Translate",
    authors: "Bahdanau, Cho & Bengio",
    description:
      "Introduced the attention mechanism for seq2seq models — letting the decoder focus on relevant source words instead of compressing everything into one vector.",
    url: "https://arxiv.org/abs/1409.0473",
    category: "architecture",
  },
  {
    title: "Identity Mappings in Deep Residual Networks",
    authors: "He et al.",
    description:
      "The follow-up to ResNet showing that clean identity skip connections (pre-activation) make very deep networks easier to train and generalize better.",
    url: "https://arxiv.org/abs/1603.05027",
    category: "architecture",
  },
  {
    title: "Deep Speech 2: End-to-End Speech Recognition in English and Mandarin",
    authors: "Amodei et al. (Baidu Research)",
    description:
      "Scaled end-to-end deep learning for speech recognition — replaced hand-engineered pipelines with a single RNN trained on thousands of hours of audio.",
    url: "https://arxiv.org/abs/1512.02595",
    category: "architecture",
  },
  {
    title: "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding",
    authors: "Devlin et al. (Google)",
    description:
      "Bidirectional pre-training via masked language modeling — set new SOTA on 11 NLP benchmarks and launched the era of pre-train then fine-tune.",
    url: "https://arxiv.org/abs/1810.04805",
    category: "architecture",
  },
  {
    title: "Sequence to Sequence Learning with Neural Networks",
    authors: "Sutskever, Vinyals & Le (Google)",
    description:
      "The foundational encoder-decoder architecture for machine translation — map variable-length input to variable-length output with two LSTMs.",
    url: "https://arxiv.org/abs/1409.3215",
    category: "architecture",
  },
  {
    title: "The Llama 3 Herd of Models",
    authors: "Meta AI",
    description:
      "Meta's open-weight LLM family up to 405B parameters — details on training data, scaling, multimodal extensions, and safety tuning.",
    url: "https://arxiv.org/abs/2407.21783",
    category: "architecture",
  },
  {
    title: "A Mathematical Framework for Transformer Circuits",
    authors: "Elhage et al. (Anthropic)",
    description:
      "Reverse-engineers transformer internals — shows how attention heads compose into interpretable circuits for induction, copying, and more.",
    url: "https://transformer-circuits.pub/2021/framework/index.html",
    category: "reasoning",
  },
  {
    title: "An Overview of Gradient Descent Optimization Algorithms",
    authors: "Sebastian Ruder",
    description:
      "The definitive survey of gradient descent variants — SGD, momentum, Adam, AdaGrad, RMSProp and their trade-offs in one reference.",
    url: "https://arxiv.org/abs/1609.04747",
    category: "training",
  },
  {
    title: "A Neural Probabilistic Language Model",
    authors: "Bengio et al.",
    description:
      "The 2003 paper that introduced neural language models and learned word embeddings — the intellectual ancestor of Word2Vec and all modern LLMs.",
    url: "https://www.jmlr.org/papers/volume3/bengio03a/bengio03a.pdf",
    category: "architecture",
  },
  {
    title: "Gradient-Based Learning Applied to Document Recognition",
    authors: "LeCun et al.",
    description:
      "The 1998 paper introducing LeNet and backprop-trained CNNs for handwritten digit recognition — laid the foundation for all modern convolutional networks.",
    url: "http://yann.lecun.com/exdb/publis/pdf/lecun-98.pdf",
    category: "architecture",
  },

  // Ilya 30u30
  {
    title: "The Annotated Transformer",
    authors: "Sasha Rush et al. (Harvard NLP)",
    description: "Line-by-line walkthrough of 'Attention Is All You Need' with working PyTorch code — the most practical way to understand transformers.",
    url: "https://nlp.seas.harvard.edu/annotated-transformer/",
    category: "ilya-30u30",
  },
  {
    title: "The Unreasonable Effectiveness of Recurrent Neural Networks",
    authors: "Andrej Karpathy",
    description: "The blog post that showed RNNs can generate Shakespeare, Wikipedia, LaTeX, and C code — igniting interest in language modeling.",
    url: "https://karpathy.github.io/2015/05/21/rnn-effectiveness/",
    category: "ilya-30u30",
  },
  {
    title: "Understanding LSTM Networks",
    authors: "Christopher Olah",
    description: "The clearest visual explanation of LSTMs ever written — gates, cell state, and information flow made intuitive.",
    url: "https://colah.github.io/posts/2015-08-Understanding-LSTMs/",
    category: "ilya-30u30",
  },
  {
    title: "Recurrent Neural Network Regularization",
    authors: "Zaremba, Sutskever & Vinyals",
    description: "How to apply dropout to RNNs without destroying temporal information — the standard regularization technique for recurrent models.",
    url: "https://arxiv.org/abs/1409.2329",
    category: "ilya-30u30",
  },
  {
    title: "Keeping Neural Networks Simple by Minimizing the Description Length of the Weights",
    authors: "Geoffrey Hinton & Drew van Camp",
    description: "Early work connecting information theory and neural network compression — MDL principle applied to weight regularization.",
    url: "https://www.cs.toronto.edu/~hinton/absps/colt93.pdf",
    category: "ilya-30u30",
  },
  {
    title: "Pointer Networks",
    authors: "Vinyals, Fortunato & Jaitly",
    description: "Attention mechanism that points to input positions instead of generating from a fixed vocabulary — solves combinatorial optimization problems.",
    url: "https://arxiv.org/abs/1506.03134",
    category: "ilya-30u30",
  },
  {
    title: "Order Matters: Sequence to Sequence for Sets",
    authors: "Vinyals, Bengio & Kudlur",
    description: "How input/output ordering affects seq2seq performance — introduces attention-based read-process-and-write for set-structured data.",
    url: "https://arxiv.org/abs/1511.06391",
    category: "ilya-30u30",
  },
  {
    title: "GPipe: Efficient Training of Giant Neural Networks using Pipeline Parallelism",
    authors: "Huang et al. (Google Brain)",
    description: "Pipeline parallelism for training massive models across multiple accelerators — micro-batching and re-materialization for memory efficiency.",
    url: "https://arxiv.org/abs/1811.06965",
    category: "ilya-30u30",
  },
  {
    title: "Multi-Scale Context Aggregation by Dilated Convolutions",
    authors: "Yu & Koltun",
    description: "Dilated (atrous) convolutions for exponentially growing receptive fields without pooling — foundational for dense prediction tasks.",
    url: "https://arxiv.org/abs/1511.07122",
    category: "ilya-30u30",
  },
  {
    title: "Neural Message Passing for Quantum Chemistry",
    authors: "Gilmer et al.",
    description: "Unified framework for graph neural networks applied to molecular property prediction — message passing as the core abstraction.",
    url: "https://arxiv.org/abs/1704.01212",
    category: "ilya-30u30",
  },
  {
    title: "A Simple Neural Network Module for Relational Reasoning",
    authors: "Santoro et al. (DeepMind)",
    description: "Relation networks that learn to reason about object relationships — simple pairwise function achieves super-human performance on visual QA.",
    url: "https://arxiv.org/abs/1706.01427",
    category: "ilya-30u30",
  },
  {
    title: "Variational Lossy Autoencoder",
    authors: "Chen et al.",
    description: "Bridges VAEs and autoregressive models — uses information preference to control what the latent code captures vs. what the decoder models.",
    url: "https://arxiv.org/abs/1611.02731",
    category: "ilya-30u30",
  },
  {
    title: "Relational Recurrent Neural Networks",
    authors: "Santoro et al. (DeepMind)",
    description: "Augments LSTMs with multi-head dot-product attention over memory slots — enabling relational reasoning within sequential processing.",
    url: "https://arxiv.org/abs/1806.01822",
    category: "ilya-30u30",
  },
  {
    title: "Quantifying the Rise and Fall of Complexity in Closed Systems: The Coffee Automaton",
    authors: "Aaronson, Carroll & Ouellette",
    description: "Uses a simple automaton to study how complexity rises then falls as systems evolve toward equilibrium — connects to physics and computation.",
    url: "https://arxiv.org/abs/1405.6903",
    category: "ilya-30u30",
  },
  {
    title: "A Tutorial Introduction to the Minimum Description Length Principle",
    authors: "Peter Grünwald",
    description: "MDL principle: the best model is the one that compresses data most efficiently — connects Kolmogorov complexity, statistics, and learning.",
    url: "https://arxiv.org/abs/math/0406077",
    category: "ilya-30u30",
  },

  // Foundational Papers
  {
    title: "A Mathematical Theory of Communication",
    authors: "Claude Shannon",
    description: "The 1948 paper that invented information theory — entropy, bits, channel capacity. The mathematical foundation underlying all of ML.",
    url: "https://people.math.harvard.edu/~ctm/home/text/others/shannon/entropy/entropy.pdf",
    category: "foundational",
  },
  {
    title: "A Logical Calculus of the Ideas Immanent in Nervous Activity",
    authors: "McCulloch & Pitts",
    description: "The 1943 paper that introduced the first mathematical model of a neuron — the intellectual ancestor of every neural network.",
    url: "https://www.cs.cmu.edu/~./epxing/Class/10715/reading/McCulloch.and.Pitts.pdf",
    category: "foundational",
  },
  {
    title: "Intelligent Machinery",
    authors: "Alan Turing",
    description: "Turing's 1948 paper exploring whether machines can think — describes unorganized machines (random neural networks) that learn through training.",
    url: "https://ia801703.us.archive.org/23/items/turing1948/turing1948_text.pdf",
    category: "foundational",
  },
  {
    title: "The Perceptron: A Probabilistic Model for Information Storage and Organization in the Brain",
    authors: "Frank Rosenblatt",
    description: "The 1957 paper introducing the perceptron — the first algorithmically described neural network capable of learning from data.",
    url: "https://bpb-us-e2.wpmucdn.com/websites.umass.edu/dist/a/27637/files/2016/03/rosenblatt-1957.pdf",
    category: "foundational",
  },
  {
    title: "Programming a Computer for Playing Chess",
    authors: "Claude Shannon",
    description: "Shannon's 1950 paper on chess programming — introduced minimax search, evaluation functions, and the A/B strategy distinction still used today.",
    url: "https://archive.computerhistory.org/projects/chess/related_materials/text/2-0%20and%202-1.Programming_a_computer_for_playing_chess.shannon/2-0%20and%202-1.Programming_a_computer_for_playing_chess.shannon.062303002.pdf",
    category: "foundational",
  },
  {
    title: "Learning Representations by Back-Propagating Errors",
    authors: "Rumelhart, Hinton & Williams",
    description: "The 1986 Nature paper that popularized backpropagation — showed how multi-layer networks can learn internal representations through gradient descent.",
    url: "https://github.com/georgezoto/Convolutional-Neural-Networks/blob/master/Papers/1986%20Backpro%20Learning%20representations%20by%20back-propagating%20errors%20-%20Rumelhart,%20Hinton,%20Williams.pdf",
    category: "foundational",
  },
  {
    title: "Long Short-Term Memory",
    authors: "Hochreiter & Schmidhuber",
    description: "The 1997 paper introducing LSTM — gated memory cells that solve the vanishing gradient problem and enable learning long-range dependencies.",
    url: "https://drive.google.com/file/d/1u4RwS5gmEB1Jk3hWcq7yU_5OxxfeqfMJ/view?usp=sharing",
    category: "foundational",
  },
  {
    title: "Random Forests",
    authors: "Leo Breiman",
    description: "The 2001 paper introducing random forests — ensemble of decorrelated decision trees that became the workhorse of tabular ML.",
    url: "https://link.springer.com/content/pdf/10.1023/a:1010933404324.pdf",
    category: "foundational",
  },
  {
    title: "Statistical Modeling: The Two Cultures",
    authors: "Leo Breiman",
    description: "The influential essay arguing statistics is stuck in the 'data modeling culture' while ML embraces the 'algorithmic modeling culture' — still debated today.",
    url: "https://www2.math.uu.se/~thulin/mm/breiman.pdf",
    category: "foundational",
  },
  {
    title: "Effective Approaches to Attention-based Neural Machine Translation",
    authors: "Luong, Pham & Manning",
    description: "Introduced global and local attention mechanisms for NMT — simpler alternatives to Bahdanau attention that became widely adopted.",
    url: "https://arxiv.org/abs/1508.04025",
    category: "architecture",
  },
  {
    title: "A Tutorial on Principal Component Analysis",
    authors: "Jonathon Shlens",
    description: "Clear mathematical walkthrough of PCA — from covariance matrices to eigendecomposition, with geometric intuition.",
    url: "https://arxiv.org/abs/1404.1100",
    category: "foundational",
  },
  {
    title: "Generating Sequences With Recurrent Neural Networks",
    authors: "Alex Graves",
    description: "Extended LSTMs for handwriting generation and text prediction — showed RNNs can generate convincingly human-like sequences.",
    url: "https://arxiv.org/abs/1308.0850",
    category: "architecture",
  },
  {
    title: "Memory Networks",
    authors: "Weston, Chopra & Bordes",
    description: "Neural networks augmented with explicit long-term memory and attention-based retrieval — a precursor to modern retrieval-augmented generation.",
    url: "https://arxiv.org/abs/1410.3916",
    category: "architecture",
  },
  {
    title: "Visualizing and Understanding Recurrent Networks",
    authors: "Karpathy, Johnson & Fei-Fei",
    description: "Opened the black box of RNNs — discovered interpretable cells tracking quotes, brackets, line lengths, and other structure in character-level models.",
    url: "https://arxiv.org/abs/1506.02078",
    category: "reasoning",
  },
];

export const paperCategoryLabels: Record<string, string> = {
  architecture: "Architecture",
  training: "Training & Optimization",
  reasoning: "Reasoning & Scaling",
  rag: "RAG & Retrieval",
  agents: "Agents",
  efficiency: "Efficiency",
  foundational: "Foundational",
  "ilya-30u30": "Ilya 30u30",
};
