// Refactored to General Agents brand — 2026-04-19
import { modules } from "@/data/curriculum";
import { ZigDivider } from "@/components/brand";

export function Roadmap() {
  return (
    <section id="roadmap" className="scroll-mt-20 mb-10">
      <div className="my-4">
        <ZigDivider label="Roadmap" width={420} />
      </div>

      <div className="grid-card p-5 mb-6">
        <h2 className="text-sm font-semibold text-foreground mb-1">
          Learning roadmap
        </h2>
        <p className="text-xs text-muted-foreground leading-relaxed">
          Follow the path from math fundamentals to publishing research papers.
          Topics branch left and right from the main track.
        </p>
      </div>

      {/* Roadmap Tree */}
      <div className="relative overflow-x-auto pb-4">
        <div className="min-w-[600px] relative">
          {/* Central vertical line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{ background: "var(--ga-divider)" }}
          />

          {/* Start node */}
          <div className="flex justify-center mb-0 relative z-10">
            <div className="ga-mono-label bg-foreground text-[var(--ga-fg-inv)] px-5 py-2 rounded">
              Start here
            </div>
          </div>

          {modules.map((module, i) => {
            const isLeft = i % 2 === 0;

            return (
              <div key={module.id} id={module.id} className="relative scroll-mt-20">
                {/* Vertical connector */}
                <div className="flex justify-center">
                  <div
                    className="w-px h-8"
                    style={{ background: "var(--ga-divider)" }}
                  />
                </div>

                {/* Module row */}
                <div className="flex items-start relative">
                  {/* Left side */}
                  <div className={`w-1/2 ${isLeft ? "pr-6" : ""}`}>
                    {isLeft && (
                      <div className="flex justify-end">
                        <a
                          href={`#${module.id}`}
                          className="group block max-w-[280px] w-full"
                        >
                          {/* Module card */}
                          <div className="grid-card p-3 text-right transition-all">
                            <div className="text-[10px] text-text-dim font-mono mb-1">
                              {String(i + 1).padStart(2, "0")}
                            </div>
                            <h3 className="text-xs font-semibold text-foreground transition-colors mb-2">
                              {module.title}
                            </h3>
                            <div className="flex flex-wrap gap-1 justify-end">
                              {module.lessons.map((l) => (
                                <span
                                  key={l.id}
                                  className="inline-flex items-center px-2 py-0.5 rounded bg-secondary text-muted-foreground text-[9px] font-mono"
                                >
                                  {l.title}
                                </span>
                              ))}
                            </div>
                          </div>
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Center node */}
                  <div className="absolute left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
                    <div
                      className="w-3 h-3 bg-card rounded-full transition-colors"
                      style={{ border: "2px solid var(--ga-border)" }}
                    />
                    {/* Horizontal dotted connector */}
                    <div
                      className={`absolute top-1.5 ${isLeft ? "right-4" : "left-4"} w-6 border-t border-dashed`}
                      style={{
                        borderColor: "var(--ga-fg3)",
                        [isLeft ? "right" : "left"]: "16px",
                      }}
                    />
                  </div>

                  {/* Right side */}
                  <div className={`w-1/2 ${!isLeft ? "pl-6" : ""}`}>
                    {!isLeft && (
                      <div className="flex justify-start">
                        <a
                          href={`#${module.id}`}
                          className="group block max-w-[280px] w-full"
                        >
                          <div className="grid-card p-3 text-left transition-all">
                            <div className="text-[10px] text-text-dim font-mono mb-1">
                              {String(i + 1).padStart(2, "0")}
                            </div>
                            <h3 className="text-xs font-semibold text-foreground transition-colors mb-2">
                              {module.title}
                            </h3>
                            <div className="flex flex-wrap gap-1">
                              {module.lessons.map((l) => (
                                <span
                                  key={l.id}
                                  className="inline-flex items-center px-2 py-0.5 rounded bg-secondary text-muted-foreground text-[9px] font-mono"
                                >
                                  {l.title}
                                </span>
                              ))}
                            </div>
                          </div>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Final connector + end node */}
          <div className="flex justify-center">
            <div
              className="w-px h-8"
              style={{ background: "var(--ga-divider)" }}
            />
          </div>
          <div className="flex justify-center relative z-10">
            <div className="ga-mono-label bg-foreground text-[var(--ga-fg-inv)] px-5 py-2 rounded">
              AI researcher
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
