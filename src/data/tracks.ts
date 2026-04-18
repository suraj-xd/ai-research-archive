export interface Track {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  moduleIds: string[];
  estimatedWeeks: number;
  color: string;
}

export const tracks: Track[] = [
  {
    id: "ai-researcher",
    title: "AI Researcher",
    subtitle: "Understand the theory. Read papers. Publish research.",
    description:
      "For people who want to understand and publish papers. This track takes you from the mathematical foundations through core intuitions, building neural networks from scratch, understanding transformers and reinforcement learning, constructing LLMs, and finally writing and publishing your own research paper.",
    moduleIds: [
      "math-fundamentals",
      "core-ai-intuitions",
      "neural-network-from-scratch",
      "transformers",
      "reinforcement-learning",
      "llm-from-scratch",
      "write-research-paper",
    ],
    estimatedWeeks: 12,
    color: "purple",
  },
  {
    id: "ml-engineer",
    title: "ML Engineer",
    subtitle: "Build models. Ship to production. Monitor performance.",
    description:
      "For people who want to build and deploy models. Learn the math, get hands-on with PyTorch, build neural networks from scratch, fine-tune pre-trained models for your use case, then ship everything to production with MLOps best practices.",
    moduleIds: [
      "math-fundamentals",
      "pytorch-fundamentals",
      "neural-network-from-scratch",
      "fine-tuning",
      "mlops",
    ],
    estimatedWeeks: 8,
    color: "blue",
  },
  {
    id: "llm-builder",
    title: "LLM Builder",
    subtitle: "From attention to GPT. Build LLMs from scratch.",
    description:
      "For people who want to build and understand large language models. Start with math and core intuitions, learn PyTorch, deep-dive into transformer architecture, build full LLMs from scratch, and learn to fine-tune them for specific tasks.",
    moduleIds: [
      "math-fundamentals",
      "core-ai-intuitions",
      "pytorch-fundamentals",
      "transformers",
      "llm-from-scratch",
      "fine-tuning",
    ],
    estimatedWeeks: 10,
    color: "green",
  },
  {
    id: "deep-learning-foundations",
    title: "Deep Learning Foundations",
    subtitle: "Master neural networks from single neurons to CNNs and beyond.",
    description:
      "Comprehensive understanding of neural networks. Cover the math, build intuition for how models learn, get proficient in both PyTorch and TensorFlow, then build a neural network entirely from scratch to cement your understanding.",
    moduleIds: [
      "math-fundamentals",
      "core-ai-intuitions",
      "pytorch-fundamentals",
      "tensorflow-fundamentals",
      "neural-network-from-scratch",
    ],
    estimatedWeeks: 8,
    color: "orange",
  },
  {
    id: "full-stack-ai",
    title: "Full Stack AI",
    subtitle: "Everything. Math to models to production. The full journey.",
    description:
      "The complete path from math to deployment. This track covers everything — mathematical foundations, building neural networks, understanding transformers, constructing LLMs from scratch, fine-tuning models, and deploying them to production with MLOps.",
    moduleIds: [
      "math-fundamentals",
      "core-ai-intuitions",
      "pytorch-fundamentals",
      "neural-network-from-scratch",
      "transformers",
      "llm-from-scratch",
      "fine-tuning",
      "mlops",
    ],
    estimatedWeeks: 16,
    color: "red",
  },
];
