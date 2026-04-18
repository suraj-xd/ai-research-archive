import { modules } from "@/data/curriculum";
import { tracks } from "@/data/tracks";
import { Route } from "lucide-react";

const colorMap: Record<string, string> = {
  purple: "text-purple-400",
  blue: "text-blue-400",
  green: "text-green-400",
  orange: "text-orange-400",
  red: "text-red-400",
};

export function TracksSection() {
  return (
    <section id="tracks" className="scroll-mt-20 mb-10">
      <div className="flex items-center gap-3 mb-4">
        <div className="h-px bg-border flex-1" />
        <span className="text-[10px] uppercase tracking-widest text-text-dim flex items-center gap-1.5">
          <Route size={10} />
          Learning Tracks
        </span>
        <div className="h-px bg-border flex-1" />
      </div>

      <div className="grid-card p-5 relative corner-tl corner-tr mb-4">
        <h2 className="text-sm font-semibold text-accent mb-1">
          Choose Your Path
        </h2>
        <p className="text-xs text-text-muted leading-relaxed">
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
              <h3 className={`text-sm font-semibold mb-1 ${colorMap[track.color] ?? "text-text"}`}>
                {track.title}
              </h3>
              <p className="text-xs text-text-muted mb-1">{track.subtitle}</p>
              <p className="text-[10px] text-text-muted leading-relaxed mb-3">
                {track.description}
              </p>

              <div className="text-[10px] text-text-dim mb-3">
                {trackModules.length} modules &middot; {totalLessons} lessons
                &middot; ~{track.estimatedWeeks} weeks
              </div>

              <div className="flex flex-wrap items-center gap-1">
                {trackModules.map((mod, i) => (
                  <span key={mod!.id} className="flex items-center gap-1">
                    <span className="text-[10px] px-2 py-0.5 bg-bg-hover border border-border text-text-muted">
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
