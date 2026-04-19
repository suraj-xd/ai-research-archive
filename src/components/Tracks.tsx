// Refactored to General Agents brand — 2026-04-19
import { modules } from "@/data/curriculum";
import { tracks } from "@/data/tracks";
import { ZigDivider } from "@/components/brand";

export function TracksSection() {
  return (
    <section id="tracks" className="scroll-mt-20 mb-10">
      <div className="my-4">
        <ZigDivider label="Learning tracks" width={420} />
      </div>

      <div className="grid-card p-5 relative mb-4">
        <h2 className="text-sm font-semibold text-foreground mb-1">
          Choose your path
        </h2>
        <p className="text-xs text-muted-foreground leading-relaxed">
          5 curated tracks through the curriculum. Pick based on your goal —
          each track tells you exactly what to study and in what order.
        </p>
      </div>

      <div className="space-y-3">
        {tracks.map((track) => {
          const trackModules = track.moduleIds
            .map((id) => modules.find((m) => m.id === id))
            .filter(Boolean);
          const totalLessons = trackModules.reduce(
            (sum, m) => sum + (m?.lessons.length ?? 0),
            0
          );

          return (
            <div key={track.id} className="grid-card p-5 relative">
              <h3 className="text-sm font-semibold mb-1 text-foreground">
                {track.title}
              </h3>
              <p className="text-xs text-muted-foreground mb-1">{track.subtitle}</p>
              <p className="text-[10px] text-muted-foreground leading-relaxed mb-3">
                {track.description}
              </p>

              <div className="text-[10px] text-text-dim mb-3">
                {trackModules.length} modules &middot; {totalLessons} lessons
                &middot; ~{track.estimatedWeeks} weeks
              </div>

              <div className="flex flex-wrap items-center gap-1">
                {trackModules.map((mod, i) => (
                  <span key={mod!.id} className="flex items-center gap-1">
                    <span className="text-[10px] px-2 py-0.5 bg-secondary text-muted-foreground rounded font-mono">
                      {mod!.shortTitle}
                    </span>
                    {i < trackModules.length - 1 && (
                      <span className="text-text-dim text-[10px]">&rarr;</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
