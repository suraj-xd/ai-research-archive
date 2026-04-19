// Refactored to General Agents brand — 2026-04-19
import { useState } from "react";
import { PhIcon, ZigDivider } from "@/components/brand";

const topics = [
  {
    id: "data-pipeline",
    title: "Data Pipeline Design",
    notes:
      "Ingestion, validation, transformation, and storage at scale. Build reliable ETL/ELT pipelines with tools like Apache Beam, Spark, or Dagster. Handle schema evolution, data versioning, and lineage tracking.",
  },
  {
    id: "feature-engineering",
    title: "Feature Engineering at Scale",
    notes:
      "Feature stores (Feast, Tecton), online vs offline features, point-in-time correctness, and feature drift detection. Transform raw data into model-ready signals without leaking future information.",
  },
  {
    id: "training-infra",
    title: "Model Training Infrastructure",
    notes:
      "Distributed training strategies (data parallel, model parallel, pipeline parallel), GPU cluster management, experiment tracking (W&B, MLflow), hyperparameter tuning, and reproducible training pipelines.",
  },
  {
    id: "model-serving",
    title: "Model Serving & Inference",
    notes:
      "Real-time vs batch inference, model optimization (quantization, distillation, pruning), serving frameworks (vLLM, TorchServe, Triton), autoscaling, and latency-throughput trade-offs.",
  },
  {
    id: "monitoring",
    title: "Monitoring & Observability",
    notes:
      "Data drift, concept drift, and model degradation detection. Set up alerting on prediction quality, latency percentiles, and throughput. Build dashboards for model health and business KPIs.",
  },
  {
    id: "ab-testing",
    title: "A/B Testing ML Models",
    notes:
      "Online evaluation, shadow deployments, canary releases, and interleaving experiments. Statistical significance for ML metrics, guardrail metrics, and safe rollout strategies.",
  },
  {
    id: "ml-platform",
    title: "ML Platform Architecture",
    notes:
      "End-to-end platform design: model registry, CI/CD for ML, metadata management, access control, and self-service tooling. Learn from platforms at Google (TFX), Meta (FBLearner), and Uber (Michelangelo).",
  },
  {
    id: "cost-optimization",
    title: "Cost Optimization",
    notes:
      "Spot/preemptible instances for training, right-sizing GPU allocations, caching inference results, model compression for cheaper serving, and total cost of ownership analysis for build vs buy decisions.",
  },
];

export function SystemDesign() {
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
    <section id="system-design" className="scroll-mt-20 mb-10">
      <div className="my-4">
        <ZigDivider label="System Design" width={420} />
      </div>

      <div className="grid-card p-5 mb-4">
        <h2 className="text-sm font-semibold text-foreground mb-1">
          ML system design 101
        </h2>
        <p className="text-xs text-muted-foreground leading-relaxed">
          Designing production ML systems goes far beyond model accuracy.
          Learn the architecture patterns, infrastructure decisions, and
          operational practices that separate research prototypes from
          reliable, scalable ML products.
        </p>
      </div>

      <div className="space-y-2">
        {topics.map((topic, i) => {
          const isExpanded = expanded.has(topic.id);
          return (
            <div key={topic.id} className="grid-card">
              <button
                onClick={() => toggle(topic.id)}
                className="w-full text-left flex items-center gap-3 p-4 sm:p-5 hover:bg-muted/50 transition-colors"
              >
                <span className="text-[10px] text-text-dim font-mono w-6 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <PhIcon
                  name={isExpanded ? "caret-down" : "caret-right"}
                  size={12}
                  color="var(--ga-fg2)"
                />
                <span className="text-xs text-foreground flex-1">{topic.title}</span>
                <span className="inline-flex items-center px-2 py-0.5 rounded bg-secondary text-muted-foreground text-[10px] uppercase tracking-wider font-mono">
                  Notes
                </span>
              </button>

              {isExpanded && (
                <div
                  className="px-4 pb-4 sm:px-5 sm:pb-5 pt-4 sm:pt-5 fade-in"
                  style={{ borderTop: "1px solid var(--ga-divider)" }}
                >
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {topic.notes}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
