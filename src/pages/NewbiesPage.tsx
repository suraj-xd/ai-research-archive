import { Baby } from "lucide-react";

export default function NewbiesPage() {
  return (
    <section className="scroll-mt-20 mb-10">
      <div className="flex items-center gap-3 mb-4">
        <div className="h-px bg-border flex-1" />
        <span className="text-[10px] uppercase tracking-widest text-text-dim flex items-center gap-1.5">
          <Baby size={10} />
          AI For Newbies
        </span>
        <div className="h-px bg-border flex-1" />
      </div>

      <div className="grid-card p-5 relative corner-tl corner-tr mb-4">
        <h2 className="text-sm font-semibold text-accent mb-1">
          AI For Newbies
        </h2>
        <p className="text-xs text-text-muted leading-relaxed">
          Starting from zero? This page is your on-ramp — no math prerequisites,
          no jargon, just the clearest beginner resources to get you from "what is
          AI?" to building your first model.
        </p>
      </div>

      <div className="grid-card p-8 text-center">
        <p className="text-xs text-text-dim">Coming soon — content is being curated.</p>
      </div>
    </section>
  );
}
