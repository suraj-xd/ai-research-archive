// Refactored to General Agents brand — 2026-04-19
import { useState, type ReactNode } from "react";
import type { Module } from "@/data/curriculum";
import { YouTubeEmbed } from "./YouTubeEmbed";
import { PhIcon } from "@/components/brand";

const NEUTRAL_CHIP =
  "inline-flex items-center px-2 py-0.5 rounded bg-secondary text-muted-foreground text-[10px] uppercase tracking-wider font-mono";

interface ModuleSectionProps {
  module: Module;
  index: number;
}

export function ModuleSection({ module, index }: ModuleSectionProps) {
  const [expandedLessons, setExpandedLessons] = useState<Set<string>>(
    new Set()
  );

  const toggleLesson = (id: string) => {
    setExpandedLessons((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <section id={module.id} className="scroll-mt-16 mb-8">
      {/* Module Header */}
      <div className="grid-card p-4 sm:p-5 relative mb-3">
        <div className="flex items-start gap-3">
          <span className="text-[11px] text-text-dim font-mono border border-border px-2 py-0.5 mt-0.5 shrink-0">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="flex-1">
            <h2 className="text-sm font-semibold text-foreground mb-1">
              {module.title}
            </h2>
            <p className="text-xs text-text-muted leading-relaxed">
              {module.description}
            </p>
            <div className="flex items-center gap-3 mt-3 text-[10px] text-text-dim">
              <span>{module.lessons.length} lessons</span>
              {module.githubUrl && (
                <a
                  href={module.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-text-muted transition-colors"
                >
                  GitHub <PhIcon name="arrow-square-out" size={10} color="var(--ga-fg2)" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Lessons */}
      <div className="space-y-2">
        {module.lessons.map((lesson, lessonIdx) => {
          const lessonId = `${module.id}-${lesson.id}`;
          const isExpanded = expandedLessons.has(lesson.id);

          return (
            <div
              key={lesson.id}
              id={lessonId}
              className="scroll-mt-16 grid-card relative"
            >
              {/* Lesson Header */}
              <button
                onClick={() => toggleLesson(lesson.id)}
                className="w-full text-left flex items-center gap-3 p-4 sm:p-5 hover:bg-muted/60 transition-colors"
              >
                <span className="text-[11px] text-muted-foreground font-mono w-9 shrink-0 tracking-wider">
                  {String(index + 1).padStart(2, "0")}.
                  {String(lessonIdx + 1).padStart(2, "0")}
                </span>
                <PhIcon
                  name={isExpanded ? "caret-down" : "caret-right"}
                  size={12}
                  color="var(--ga-fg2)"
                />
                <span className="text-sm text-foreground flex-1">{lesson.title}</span>
                <div className="flex items-center gap-1.5">
                  {lesson.youtubeId && <span className={NEUTRAL_CHIP}>Video</span>}
                  {lesson.notes && <span className={NEUTRAL_CHIP}>Notes</span>}
                </div>
              </button>

              {/* Lesson Content */}
              {isExpanded && (
                <div
                  className="px-4 pb-4 sm:px-5 sm:pb-5 fade-in"
                  style={{ borderTop: "1px solid var(--ga-divider)", paddingTop: 16 }}
                >
                  {lesson.youtubeId && (
                    <div className="mb-4">
                      <YouTubeEmbed
                        videoId={lesson.youtubeId}
                        title={lesson.title}
                      />
                    </div>
                  )}

                  {lesson.notes && (
                    <div className="text-xs text-text-muted leading-relaxed space-y-2">
                      {renderNotes(lesson.notes)}
                    </div>
                  )}

                  {lesson.youtubeId && (
                    <div className="mt-4 pt-3 border-t border-border">
                      <a
                        href={`https://youtu.be/${lesson.youtubeId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[11px] text-text-dim hover:text-text-muted transition-colors"
                      >
                        Watch on YouTube <PhIcon name="arrow-square-out" size={10} color="var(--ga-fg2)" />
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function renderInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const boldCodeRegex = /(\*\*(.+?)\*\*|`(.+?)`)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = boldCodeRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    if (match[2]) {
      nodes.push(
        <strong key={key++} className="text-text font-medium">
          {match[2]}
        </strong>
      );
    } else if (match[3]) {
      nodes.push(
        <code
          key={key++}
          className="text-[11px] bg-bg-hover px-1 py-0.5 text-text-muted"
        >
          {match[3]}
        </code>
      );
    }
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }
  return nodes;
}

function renderNotes(notes: string): ReactNode[] {
  const paragraphs = notes.split("\n\n");
  return paragraphs.map((paragraph, i) => {
    // Headers (standalone bold text)
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

    // Bullet lists
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
