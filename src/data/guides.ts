export interface Guide {
  title: string;
  author: string;
  description: string;
  url: string;
  category: "prompting" | "agents" | "enterprise" | "learning";
}

export const guides: Guide[] = [
  // Prompting Guides
  {
    title: "Prompt Engineering Guide",
    author: "Anthropic",
    description:
      "Anthropic's official guide to getting the best results from Claude — structured prompting, chain-of-thought, system prompts, and evaluation.",
    url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview",
    category: "prompting",
  },
  {
    title: "Prompting Guide 101",
    author: "Google",
    description:
      "Google's foundational prompting guide — zero-shot, few-shot, chain-of-thought, and structured output techniques with examples.",
    url: "https://static.carahsoft.com/concrete/files/1117/5440/7382/Prompting_Guide_101.pdf",
    category: "prompting",
  },
  {
    title: "Prompt Engineering by Google",
    author: "Google",
    description:
      "Google's advanced prompt engineering guide — covers system instructions, temperature tuning, grounding, and multi-turn patterns.",
    url: "https://drive.google.com/file/d/1AbaBYbEa_EbPelsT40-vj64L-2IwUJHy/view",
    category: "prompting",
  },

  // Agent Building Guides
  {
    title: "Building Effective Agents",
    author: "Anthropic",
    description:
      "The definitive guide to agent architecture — augmented LLMs, prompt chaining, routing, parallelization, orchestrator-workers, and evaluator-optimizer patterns.",
    url: "https://www.anthropic.com/engineering/building-effective-agents",
    category: "agents",
  },
  {
    title: "A Practical Guide to Building Agents",
    author: "OpenAI",
    description:
      "OpenAI's hands-on guide to building agents — tool use, function calling, memory, planning, and real-world deployment patterns.",
    url: "https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf",
    category: "agents",
  },
  {
    title: "Agents Companion",
    author: "Google",
    description:
      "Google's comprehensive agents companion — multi-agent systems, tool integration, evaluation frameworks, and production deployment.",
    url: "https://drive.google.com/file/d/1GVPdwEh48bErTNdhxD0vqxPAifSx1I6Y/view",
    category: "agents",
  },
  {
    title: "Components of a Coding Agent",
    author: "Sebastian Raschka",
    description:
      "How coding agents work under the hood — tools, memory, repository context, and the agent loop. Technical deep dive.",
    url: "https://magazine.sebastianraschka.com/p/components-of-a-coding-agent",
    category: "agents",
  },
  {
    title: "Claude Code 2.0 — Getting Better at Coding Agents",
    author: "Sankalp (dejavucoder)",
    description:
      "Practical guide to Claude Code 2.0 — context engineering, sub-agents, MCP servers, skills, hooks, and a personal workflow breakdown.",
    url: "https://sankalp.bearblog.dev/my-experience-with-claude-code-20-and-how-to-get-better-at-using-coding-agents/",
    category: "agents",
  },

  // Enterprise & Use Cases
  {
    title: "AI in the Enterprise",
    author: "OpenAI",
    description:
      "OpenAI's guide to enterprise AI adoption — strategy, implementation, governance, security, and scaling AI across organizations.",
    url: "https://cdn.openai.com/business-guides-and-resources/ai-in-the-enterprise.pdf",
    category: "enterprise",
  },
  {
    title: "1,001 Real-World Gen AI Use Cases",
    author: "Google Cloud",
    description:
      "Massive collection of generative AI use cases from the world's leading organizations — across industries, functions, and scales.",
    url: "https://cloud.google.com/transform/101-real-world-generative-ai-use-cases-from-industry-leaders",
    category: "enterprise",
  },
  {
    title: "Identifying and Scaling AI Use Cases",
    author: "OpenAI",
    description:
      "Framework for finding high-impact AI use cases in your organization and scaling them from pilot to production.",
    url: "https://cdn.openai.com/business-guides-and-resources/identifying-and-scaling-ai-use-cases.pdf",
    category: "enterprise",
  },
  {
    title: "Perplexity at Work",
    author: "Perplexity AI",
    description:
      "42-page internal guide on how Perplexity uses AI at work — automating email, meeting prep, research, and amplifying curiosity over replacement.",
    url: "https://r2cdn.perplexity.ai/pdf/pplx-at-work.pdf",
    category: "enterprise",
  },

  // Learning & Meta
  {
    title: "Learn Your Way",
    author: "Google Research",
    description:
      "Google's LearnLM-powered tool that transforms any PDF into 5 personalized learning formats. Students scored 78% vs 67% on retention tests.",
    url: "https://learnyourway.withgoogle.com/",
    category: "learning",
  },
  {
    title: "LLM Architecture Gallery",
    author: "Sebastian Raschka",
    description:
      "Visual gallery of 52+ LLM architectures — dense, MoE, hybrid, recurrent. Clickable diagrams, fact sheets, and concept explainers for every major model.",
    url: "https://sebastianraschka.com/llm-architecture-gallery/",
    category: "learning",
  },
  {
    title: "Anthropic Prompt Library",
    author: "Anthropic",
    description:
      "Ready-to-use prompt templates for common tasks — writing, analysis, coding, extraction, and creative work with Claude.",
    url: "https://docs.anthropic.com/en/resources/prompt-library/library",
    category: "prompting",
  },
];

export const guideCategoryLabels: Record<string, string> = {
  prompting: "Prompt Engineering",
  agents: "Building Agents",
  enterprise: "Enterprise & Use Cases",
  learning: "Learning Tools",
};
