export interface DomainResource {
  title: string;
  url: string;
  type: "book" | "course" | "tutorial" | "explainer" | "video" | "tool" | "paper" | "repo";
  author?: string;
}

export interface DomainSubtopic {
  id: string;
  label: string;
  resources: DomainResource[];
}

export const rlTitle = "Reinforcement Learning";
export const rlDescription = "From policy gradients to deep Q-networks — books, courses, and frameworks for learning how agents learn from rewards.";

export const rlResources: DomainResource[] = [
  { title: "Reinforcement Learning: An Introduction", url: "https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf", type: "book", author: "Sutton & Barto" },
  { title: "Introduction to Reinforcement Learning 2015", url: "https://www.youtube.com/playlist?list=PLqYmG7hTraZDM-OYHWgPebj2MfCFzFObQ", type: "course", author: "DeepMind x UCL" },
  { title: "Spinning Up in Deep RL", url: "https://github.com/openai/spinningup", type: "repo", author: "OpenAI" },
  { title: "Algorithms for Reinforcement Learning", url: "https://sites.ualberta.ca/~szepesva/papers/RLAlgsInMDPs-lecture.pdf", type: "book", author: "Csaba Szepesvári" },
  { title: "CS 294: Deep Reinforcement Learning", url: "https://rll.berkeley.edu/deeprlcoursesp17/", type: "course", author: "UC Berkeley" },
  { title: "Reinforcement Learning: An Overview", url: "https://arxiv.org/pdf/2412.05265", type: "paper", author: "Kevin P. Murphy" },
  { title: "Deep RL Course", url: "https://huggingface.co/learn/deep-rl-course/unit0/introduction", type: "course", author: "Hugging Face" },
  { title: "Alpha Zero and Monte Carlo Tree Search", url: "https://joshvarty.github.io/AlphaZero/", type: "tutorial", author: "Josh Varty" },
  { title: "4 Months of RL in 4 Hours | Deep Reinforcement Learning Course (PPO, DQN, SAC, A2C)", url: "https://www.youtube.com/watch?v=wf0X3Y287uQ", type: "video" },
];

export const rlSubtopics: DomainSubtopic[] = [];
