import { Terminal } from "lucide-react";

const tips = [
  {
    title: "Explain Any Paper",
    description:
      "Paste an arxiv paper and ask Claude to break it down section by section — architecture, loss functions, key contributions, and how it compares to prior work.",
  },
  {
    title: "Debug Training Loops",
    description:
      "Share your training code and loss curves. Claude can spot issues like vanishing gradients, learning rate problems, data leakage, and shape mismatches.",
  },
  {
    title: "Implement from Scratch",
    description:
      "Ask Claude to walk through implementing papers step by step — from attention mechanisms to full transformer architectures, with explanations at every line.",
  },
  {
    title: "Generate Exercises",
    description:
      "Get custom practice problems for any topic. Request exercises on backpropagation, tensor operations, or loss functions tailored to your current level.",
  },
  {
    title: "Code Review",
    description:
      "Get feedback on your ML implementations — performance bottlenecks, PyTorch anti-patterns, numerical stability issues, and best practices.",
  },
  {
    title: "Visualize Concepts",
    description:
      "Generate matplotlib or plotly code to visualize math concepts — gradient descent surfaces, attention heatmaps, embedding spaces, and decision boundaries.",
  },
  {
    title: "Compare Architectures",
    description:
      "Ask Claude to compare different model designs — ResNet vs ViT, LSTM vs Transformer, MoE vs dense — with trade-offs, parameter counts, and use cases.",
  },
  {
    title: "Dataset Analysis",
    description:
      "Explore and preprocess datasets interactively. Get code for EDA, data cleaning, tokenization, train/val/test splits, and data augmentation strategies.",
  },
];

export function ClaudeCodeGuide() {
  return (
    <section id="claude-code-guide" className="scroll-mt-20 mb-10">
      <div className="flex items-center gap-3 mb-4">
        <div className="h-px bg-border flex-1" />
        <span className="text-[10px] uppercase tracking-widest text-text-dim flex items-center gap-1.5">
          <Terminal size={10} />
          Claude Code
        </span>
        <div className="h-px bg-border flex-1" />
      </div>

      <div className="grid-card p-5 relative corner-tl corner-tr mb-4">
        <h2 className="text-sm font-semibold text-accent mb-1">
          Learn ML 100x Faster with Claude Code
        </h2>
        <p className="text-xs text-text-muted leading-relaxed">
          AI coding assistants are the ultimate learning accelerator. Use Claude
          Code to break down papers, debug training loops, implement
          architectures from scratch, and build intuition through interactive
          exploration. Here are 8 ways to supercharge your ML learning.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {tips.map((tip, i) => (
          <div key={tip.title} className="grid-card group p-4 relative">
            <div className="flex items-start gap-3">
              <span className="text-[11px] text-text-dim font-mono border border-border px-2 py-0.5 mt-0.5 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1 min-w-0">
                <h3 className="text-xs font-semibold text-text mb-1">
                  {tip.title}
                </h3>
                <p className="text-[10px] text-text-muted leading-relaxed">
                  {tip.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
