import { ZigDivider } from "@/components/brand";

export default function NewbiesPage() {
  return (
    <section className="scroll-mt-20 mb-10">
      <div className="my-4">
        <ZigDivider label="AI For Newbies" width={420} />
      </div>

      <div className="grid-card p-5 relative mb-4">
        <h2 className="text-sm font-semibold text-foreground mb-1">
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
