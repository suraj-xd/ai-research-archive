import { useState } from "react";
import { Cpu, ChevronDown, ChevronRight, ExternalLink } from "lucide-react";
import type { ReactNode } from "react";

interface HardwareTopic {
  id: string;
  title: string;
  notes: string;
}

const topics: HardwareTopic[] = [
  {
    id: "gpu-basics",
    title: "GPU vs CPU for ML",
    notes: `**Why GPUs?** Neural network training is massively parallel matrix multiplication. GPUs have thousands of cores optimized for this.

**Key metrics:**
- **VRAM** — most important. Determines max model size you can load
- **TFLOPS** — raw compute speed (FP16/BF16 matters most for ML)
- **Memory bandwidth** — how fast data moves to/from GPU memory
- **Tensor Cores** — specialized hardware for matrix ops (NVIDIA)

**Rule of thumb:** A 7B parameter model in FP16 needs ~14GB VRAM. In 4-bit quantization, ~4GB.`,
  },
  {
    id: "consumer-gpus",
    title: "Consumer GPUs for ML",
    notes: `**NVIDIA (best ecosystem):**
- **RTX 4090** (24GB) — best consumer GPU for ML. Trains 7B models
- **RTX 4080** (16GB) — good for fine-tuning smaller models
- **RTX 3090** (24GB) — still excellent, great used market value
- **RTX 4060 Ti** (16GB) — budget option for learning

**Apple Silicon:**
- **M1/M2/M3/M4 Max** (32-128GB unified) — great for inference, decent for training with MLX
- Unified memory means the GPU can access all system RAM

**AMD:** ROCm support improving but NVIDIA CUDA ecosystem is still dominant.`,
  },
  {
    id: "cloud-gpus",
    title: "Cloud GPU Options",
    notes: `**Tiers by budget:**
- **Free:** Google Colab (T4), Kaggle (P100/T4)
- **Cheap:** Lambda Cloud, Vast.ai, RunPod ($0.20-0.80/hr for A100)
- **Premium:** AWS (p4d/p5), GCP (A100/H100), Azure
- **Managed:** Modal, Together AI, Replicate (pay per compute)

**Key instances:**
- **A100 40GB/80GB** — the workhorse, ~$1-2/hr
- **H100 80GB** — 2-3x faster than A100, ~$2-4/hr
- **A10G 24GB** — budget training, good for fine-tuning

**Tip:** Start with Colab/Kaggle free tier. Move to Lambda/RunPod for serious training.`,
  },
  {
    id: "memory-optimization",
    title: "Memory Optimization Techniques",
    notes: `**Fit bigger models in less VRAM:**
- **Mixed Precision (FP16/BF16)** — halves memory, minimal quality loss
- **Gradient Checkpointing** — trade compute for memory, ~30% slower but uses ~60% less memory
- **Gradient Accumulation** — simulate larger batches without more memory
- **DeepSpeed ZeRO** — shard model across GPUs (Stage 1/2/3)
- **FSDP** — PyTorch native model sharding
- **Quantization** — 8-bit (bitsandbytes), 4-bit (QLoRA), GPTQ, AWQ
- **Flash Attention** — O(N) memory instead of O(N squared) for attention
- **Offloading** — move parts to CPU/NVMe when GPU is full`,
  },
  {
    id: "multi-gpu",
    title: "Multi-GPU & Distributed Training",
    notes: `**Parallelism strategies:**
- **Data Parallel (DP/DDP)** — same model on each GPU, split data batches
- **Model Parallel (TP)** — split model layers across GPUs
- **Pipeline Parallel (PP)** — split model stages across GPUs
- **Expert Parallel** — for MoE models, different experts on different GPUs

**Frameworks:**
- **PyTorch DDP** — standard for multi-GPU
- **DeepSpeed** — Microsoft optimization library
- **Megatron-LM** — NVIDIA large model training framework
- **FSDP** — PyTorch native, simpler than DeepSpeed

**NVLink vs PCIe:** NVLink gives 5-10x more bandwidth between GPUs. Critical for tensor parallelism.`,
  },
  {
    id: "inference-hardware",
    title: "Inference & Serving Hardware",
    notes: `**Optimization for serving:**
- **Quantization** — GGUF (llama.cpp), GPTQ, AWQ reduce model size 2-4x
- **KV Cache** — pre-computed attention keys/values for faster generation
- **Continuous Batching** — serve multiple requests efficiently (vLLM)
- **Speculative Decoding** — use small model to draft, large model to verify

**Serving frameworks:**
- **vLLM** — PagedAttention, high throughput
- **TGI** — Hugging Face serving solution
- **llama.cpp** — CPU/GPU inference, GGUF format
- **Ollama** — easiest local deployment
- **TensorRT-LLM** — NVIDIA optimized serving`,
  },
  {
    id: "tpu-alternatives",
    title: "TPUs & Alternative Hardware",
    notes: `**Google TPUs:**
- Designed specifically for tensor operations
- TPU v4/v5 competitive with H100
- Free TPU access in Colab and Kaggle
- JAX is the native framework (not PyTorch)

**Other accelerators:**
- **Intel Gaudi** — competitive pricing, growing ecosystem
- **AMD MI300X** — 192GB HBM3, strong H100 competitor
- **Cerebras** — wafer-scale chip, entire model on one chip
- **Groq** — LPU for ultra-fast inference
- **Apple Neural Engine** — on-device inference for M-series chips`,
  },
  {
    id: "cost-planning",
    title: "Hardware Planning & Cost",
    notes: `**What you need by task:**
- **Learning/experimenting:** Free Colab or M-series Mac
- **Fine-tuning 7B:** 1x A100 40GB or RTX 3090/4090 (~$1-2/hr cloud)
- **Fine-tuning 70B:** 4-8x A100 80GB (~$8-16/hr cloud)
- **Pre-training:** 100s-1000s of GPUs, millions of dollars
- **Inference (local):** Quantized models on consumer hardware

**Cost optimization:**
- Use spot/preemptible instances (60-90% cheaper)
- Train in off-peak hours
- Use smaller models with good data (often beats bigger models)
- Quantize for inference — 4-bit models run on laptops`,
  },
];

function renderInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const regex = /(\*\*(.+?)\*\*|`(.+?)`)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) nodes.push(text.slice(lastIndex, match.index));
    if (match[2]) {
      nodes.push(
        <strong key={key++} className="text-text font-medium">{match[2]}</strong>
      );
    } else if (match[3]) {
      nodes.push(
        <code key={key++} className="text-[11px] bg-bg-hover px-1 py-0.5 text-text-muted">{match[3]}</code>
      );
    }
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));
  return nodes;
}

function renderNotes(notes: string): ReactNode[] {
  return notes.split("\n\n").map((paragraph, i) => {
    if (
      paragraph.startsWith("**") &&
      paragraph.endsWith("**") &&
      !paragraph.slice(2, -2).includes("**")
    ) {
      return (
        <h4 key={i} className="text-xs font-semibold text-text mt-3 mb-1">
          {paragraph.replace(/\*\*/g, "")}
        </h4>
      );
    }

    if (paragraph.includes("\n-")) {
      const lines = paragraph.split("\n");
      const header = lines[0];
      const bullets = lines.slice(1).filter((l) => l.startsWith("-"));
      return (
        <div key={i}>
          {header && <p className="mb-1">{renderInline(header)}</p>}
          <ul className="list-none space-y-0.5 ml-2">
            {bullets.map((b, j) => (
              <li key={j} className="flex items-start gap-1.5">
                <span className="text-text-dim mt-0.5 shrink-0">&middot;</span>
                <span>{renderInline(b.replace(/^-\s*/, ""))}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    }

    return <p key={i}>{renderInline(paragraph)}</p>;
  });
}

export function Hardware() {
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <section id="hardware" className="scroll-mt-20 mb-10">
      <div className="flex items-center gap-3 mb-4">
        <div className="h-px bg-border flex-1" />
        <span className="text-[10px] uppercase tracking-widest text-text-dim flex items-center gap-1.5">
          <Cpu size={10} />
          Hardware
        </span>
        <div className="h-px bg-border flex-1" />
      </div>

      <div className="grid-card p-5 relative corner-tl corner-tr mb-4">
        <h2 className="text-sm font-semibold text-accent mb-1">
          Hardware for ML Training & Inference
        </h2>
        <p className="text-xs text-text-muted leading-relaxed">
          Understanding GPUs, memory optimization, cloud vs local, and how to
          pick the right hardware for your ML workload.
        </p>
      </div>

      {/* llmfit tool card */}
      <a
        href="https://github.com/AlexsJones/llmfit"
        target="_blank"
        rel="noopener noreferrer"
        className="grid-card group p-4 flex items-start gap-3 mb-4 relative corner-tl corner-tr"
      >
        <div className="w-9 h-9 flex items-center justify-center text-[11px] font-semibold shrink-0 bg-green-400/20 text-green-400">
          LF
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 mb-0.5">
            <span className="text-xs font-medium text-text group-hover:text-accent transition-colors">
              llmfit — Find what runs on your hardware
            </span>
            <ExternalLink size={9} className="text-text-dim shrink-0" />
          </div>
          <p className="text-[10px] text-text-muted leading-relaxed">
            Terminal tool that right-sizes LLM models to your system RAM, CPU,
            and GPU. Detects hardware, scores models across quality/speed/fit,
            and tells you which ones will actually run on your machine. Supports
            Ollama, llama.cpp, MLX, LM Studio.
          </p>
          <div className="flex gap-2 mt-2">
            <span className="text-[9px] text-green-400 border border-green-400/30 px-1.5 py-0.5">
              TOOL
            </span>
            <span className="text-[9px] text-text-dim border border-border px-1.5 py-0.5">
              brew install llmfit
            </span>
          </div>
        </div>
      </a>

      {/* Topics */}
      <div className="space-y-2">
        {topics.map((topic, i) => {
          const isOpen = expanded.has(topic.id);
          return (
            <div key={topic.id} className="grid-card relative">
              <button
                onClick={() => toggle(topic.id)}
                className="w-full text-left flex items-center gap-3 p-3 sm:p-4 hover:bg-bg-hover transition-colors"
              >
                <span className="text-[10px] text-text-dim font-mono w-6 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {isOpen ? (
                  <ChevronDown size={12} className="text-text-dim shrink-0" />
                ) : (
                  <ChevronRight size={12} className="text-text-dim shrink-0" />
                )}
                <span className="text-xs text-text flex-1">{topic.title}</span>
                <span className="text-[9px] text-text-dim border border-border px-1.5 py-0.5">
                  NOTES
                </span>
              </button>

              {isOpen && (
                <div className="border-t border-border p-4 sm:p-5 fade-in">
                  <div className="text-xs text-text-muted leading-relaxed space-y-2">
                    {renderNotes(topic.notes)}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
