// Refactored to General Agents brand — 2026-04-19
import { ZigDivider } from "@/components/brand";

const tips = [
  {
    title: "Explain any paper",
    description:
      "Paste an arxiv paper and ask Claude to break it down section by section — architecture, loss functions, key contributions, and how it compares to prior work.",
  },
  {
    title: "Debug training loops",
    description:
      "Share your training code and loss curves. Claude can spot issues like vanishing gradients, learning rate problems, data leakage, and shape mismatches.",
  },
  {
    title: "Implement from scratch",
    description:
      "Ask Claude to walk through implementing papers step by step — from attention mechanisms to full transformer architectures, with explanations at every line.",
  },
  {
    title: "Generate exercises",
    description:
      "Get custom practice problems for any topic. Request exercises on backpropagation, tensor operations, or loss functions tailored to your current level.",
  },
  {
    title: "Code review",
    description:
      "Get feedback on your ML implementations — performance bottlenecks, PyTorch anti-patterns, numerical stability issues, and best practices.",
  },
  {
    title: "Visualize concepts",
    description:
      "Generate matplotlib or plotly code to visualize math concepts — gradient descent surfaces, attention heatmaps, embedding spaces, and decision boundaries.",
  },
  {
    title: "Compare architectures",
    description:
      "Ask Claude to compare different model designs — ResNet vs ViT, LSTM vs Transformer, MoE vs dense — with trade-offs, parameter counts, and use cases.",
  },
  {
    title: "Dataset analysis",
    description:
      "Explore and preprocess datasets interactively. Get code for EDA, data cleaning, tokenization, train/val/test splits, and data augmentation strategies.",
  },
];

export function ClaudeCodeGuide() {
  return (
    <section id="claude-code-guide" className="scroll-mt-20 mb-10">
      <div className="my-4">
        <ZigDivider label="Claude Code" width={420} />
      </div>

      <div className="grid-card p-5 mb-4">
        <h2 className="text-sm font-semibold text-foreground mb-1">
          Learn ML faster with Claude Code
        </h2>
        <p className="text-xs text-muted-foreground leading-relaxed">
          AI coding assistants are the ultimate learning accelerator. Use Claude
          Code to break down papers, debug training loops, implement
          architectures from scratch, and build intuition through interactive
          exploration. Here are 8 ways to supercharge your ML learning.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {tips.map((tip, i) => (
          <div key={tip.title} className="grid-card group p-4">
            <div className="flex items-start gap-3">
              <span className="ga-mono-label mt-0.5 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1 min-w-0">
                <h3 className="text-xs font-semibold text-foreground mb-1">
                  {tip.title}
                </h3>
                <p className="text-[10px] text-muted-foreground leading-relaxed">
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
