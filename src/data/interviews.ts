export interface InterviewQuestion {
  question: string;
  difficulty: "easy" | "medium" | "hard";
  category: "core-ml" | "llms" | "system-design" | "python" | "cv";
  tags: string[];
}

export const interviewQuestions: InterviewQuestion[] = [
  // Core ML
  {
    question: "Overfitting vs. Underfitting — how to detect and fix each?",
    difficulty: "easy",
    category: "core-ml",
    tags: ["Theory", "Basics"],
  },
  {
    question: "Precision vs. Recall — when to optimize for which?",
    difficulty: "easy",
    category: "core-ml",
    tags: ["Metrics", "Evaluation"],
  },
  {
    question:
      "Explain Gradient Descent and its variants (SGD, Adam, AdaGrad).",
    difficulty: "medium",
    category: "core-ml",
    tags: ["Optimization", "Math"],
  },
  {
    question: "How to detect Exploding vs. Vanishing Gradients?",
    difficulty: "medium",
    category: "core-ml",
    tags: ["Debugging", "Deep Learning"],
  },
  {
    question:
      "Explain Feature Engineering — key techniques and when to use them.",
    difficulty: "medium",
    category: "core-ml",
    tags: ["Data Engineering", "Process"],
  },

  // LLMs
  {
    question: "What is the Context Window and why does it matter?",
    difficulty: "easy",
    category: "llms",
    tags: ["Architecture", "Constraints"],
  },
  {
    question:
      "Explain Embeddings and why they are represented as vectors.",
    difficulty: "easy",
    category: "llms",
    tags: ["Embeddings", "Math"],
  },
  {
    question:
      "How does the attention mechanism help with interpretability?",
    difficulty: "medium",
    category: "llms",
    tags: ["Transformer", "Interpretability"],
  },
  {
    question:
      "Difference between LoRA and QLoRA — when to use each?",
    difficulty: "hard",
    category: "llms",
    tags: ["Fine-tuning", "PEFT", "Optimization"],
  },
  {
    question:
      "Explain PEFT (Parameter-Efficient Fine-Tuning) approaches.",
    difficulty: "medium",
    category: "llms",
    tags: ["Fine-tuning", "Optimization"],
  },
  {
    question: "Fine-tuning vs. RAG: When to use which approach?",
    difficulty: "medium",
    category: "llms",
    tags: ["RAG", "Strategy", "System Design"],
  },
  {
    question:
      "Common problems faced while fine-tuning LLMs and how to debug them.",
    difficulty: "medium",
    category: "llms",
    tags: ["Fine-tuning", "Debugging"],
  },
  {
    question: "Difference between AI Agents and Agentic AI?",
    difficulty: "medium",
    category: "llms",
    tags: ["Agents", "Definitions"],
  },
  {
    question:
      "RNNs vs. LSTMs vs. Transformers — evolution and trade-offs.",
    difficulty: "hard",
    category: "llms",
    tags: ["Deep Learning", "Architecture"],
  },
  {
    question:
      "What are GANs and how do Generator and Discriminator compete?",
    difficulty: "hard",
    category: "llms",
    tags: ["GenAI", "Architecture"],
  },

  // System Design
  {
    question:
      "How to optimize a RAG pipeline for better retrieval and generation?",
    difficulty: "hard",
    category: "system-design",
    tags: ["RAG", "Optimization"],
  },
  {
    question:
      "Why use Vector DBs instead of standard SQL for embeddings?",
    difficulty: "medium",
    category: "system-design",
    tags: ["Infrastructure", "Databases"],
  },
  {
    question:
      "Design an AI Agent for E-commerce that combines SQL + RAG.",
    difficulty: "hard",
    category: "system-design",
    tags: ["Architecture", "Agents", "SQL"],
  },
  {
    question:
      "Building Agentic AI with LangGraph — architecture and patterns.",
    difficulty: "hard",
    category: "system-design",
    tags: ["Agents", "LangChain"],
  },

  // Python & SQL
  {
    question:
      "Explain OOP concepts in Python (inheritance, polymorphism, encapsulation).",
    difficulty: "easy",
    category: "python",
    tags: ["Python", "Software Engineering"],
  },
  {
    question:
      "Python Threading vs. Multiprocessing — when to use which?",
    difficulty: "medium",
    category: "python",
    tags: ["Python", "Concurrency"],
  },
  {
    question:
      "AI/ML/DL — explain the differences to a non-technical person.",
    difficulty: "easy",
    category: "python",
    tags: ["Communication", "Basics"],
  },
];

export const interviewCategoryLabels: Record<string, string> = {
  "core-ml": "Core ML",
  llms: "LLMs",
  "system-design": "System Design",
  python: "Python & SQL",
  cv: "Computer Vision",
};

export const difficultyColors: Record<string, string> = {
  easy: "text-green-400 border-green-400/30",
  medium: "text-yellow-400 border-yellow-400/30",
  hard: "text-red-400 border-red-400/30",
};
