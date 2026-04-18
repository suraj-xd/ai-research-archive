import { modules } from "@/data/curriculum";
import { Map } from "lucide-react";

export function Roadmap() {
  return (
    <section id="roadmap" className="scroll-mt-20 mb-10">
      <div className="flex items-center gap-3 mb-4">
        <div className="h-px bg-border flex-1" />
        <span className="text-[10px] uppercase tracking-widest text-text-dim flex items-center gap-1.5">
          <Map size={10} />
          Roadmap
        </span>
        <div className="h-px bg-border flex-1" />
      </div>

      <div className="grid-card p-5 relative corner-tl corner-tr mb-6">
        <h2 className="text-sm font-semibold text-accent mb-1">
          Learning Roadmap
        </h2>
        <p className="text-xs text-text-muted leading-relaxed">
          Follow the path from math fundamentals to publishing research papers.
          Topics branch left and right from the main track.
        </p>
      </div>

      {/* Roadmap Tree */}
      <div className="relative overflow-x-auto pb-4">
        <div className="min-w-[600px] relative">
          {/* Central vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          {/* Start node */}
          <div className="flex justify-center mb-0 relative z-10">
            <div className="bg-accent text-bg text-xs font-bold px-5 py-2 border border-accent">
              START HERE
            </div>
          </div>

          {modules.map((module, i) => {
            const isLeft = i % 2 === 0;

            return (
              <div key={module.id} className="relative">
                {/* Vertical connector */}
                <div className="flex justify-center">
                  <div className="w-px h-8 bg-border" />
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
                          <div className="grid-card p-3 text-right relative hover:border-border-hover transition-all">
                            <div className="text-[10px] text-text-dim font-mono mb-1">
                              {String(i + 1).padStart(2, "0")}
                            </div>
                            <h3 className="text-xs font-semibold text-text group-hover:text-accent transition-colors mb-2">
                              {module.title}
                            </h3>
                            <div className="flex flex-wrap gap-1 justify-end">
                              {module.lessons.map((l) => (
                                <span
                                  key={l.id}
                                  className="text-[8px] text-text-dim bg-bg-hover border border-border px-1 py-0.5"
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
                    <div className="w-4 h-4 border-2 border-border bg-bg-card rounded-full hover:border-accent transition-colors" />
                    {/* Horizontal dotted connector */}
                    <div
                      className={`absolute top-2 ${isLeft ? "right-4" : "left-4"} w-6 border-t border-dashed border-text-dim`}
                      style={{ [isLeft ? "right" : "left"]: "16px" }}
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
                          <div className="grid-card p-3 text-left relative hover:border-border-hover transition-all">
                            <div className="text-[10px] text-text-dim font-mono mb-1">
                              {String(i + 1).padStart(2, "0")}
                            </div>
                            <h3 className="text-xs font-semibold text-text group-hover:text-accent transition-colors mb-2">
                              {module.title}
                            </h3>
                            <div className="flex flex-wrap gap-1">
                              {module.lessons.map((l) => (
                                <span
                                  key={l.id}
                                  className="text-[8px] text-text-dim bg-bg-hover border border-border px-1 py-0.5"
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
            <div className="w-px h-8 bg-border" />
          </div>
          <div className="flex justify-center relative z-10">
            <div className="bg-accent text-bg text-xs font-bold px-5 py-2 border border-accent">
              AI RESEARCHER
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
