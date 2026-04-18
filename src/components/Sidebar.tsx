import { ChevronRight, ChevronDown, Star } from "lucide-react";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { modules } from "@/data/curriculum";
import { useGitHubStars } from "@/hooks/useGitHubStars";

interface SidebarProps {
  scrollProgress: number;
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { to: "/overview", label: "Overview" },
  { to: "/resources", label: "Resources" },
  { to: "/community", label: "Community" },
  { to: "/study-with-me", label: "Study With Me" },
  { to: "/articles", label: "Articles" },
  { to: "/blogs", label: "Blogs" },
  { to: "/roadmap", label: "Roadmap" },
  { to: "/tools", label: "Tools & Practice" },
  { to: "/claude-code", label: "Claude Code" },
  { to: "/system-design", label: "System Design" },
  { to: "/hardware", label: "Hardware" },
  { to: "/challenges", label: "Challenges" },
  { to: "/glossary", label: "Glossary" },
  { to: "/newsletters", label: "Newsletters" },
  { to: "/tracks", label: "Learning Tracks" },
  { to: "/guides", label: "Official Guides" },
  { to: "/papers", label: "Research Papers" },
  { to: "/interviews", label: "Interview Prep" },
  { to: "/jobs", label: "Jobs" },
  { to: "/misc", label: "Misc & Inspiration" },
  { to: "/newbies", label: "AI For Newbies" },
];

const domainItems = [
  { to: "/deep-learning", label: "Deep Learning" },
  { to: "/machine-learning", label: "Machine Learning" },
  { to: "/reinforcement-learning", label: "Reinforcement Learning" },
  { to: "/gpu", label: "GPU & CUDA" },
];

export function Sidebar({ scrollProgress, isOpen, onClose }: SidebarProps) {
  const [expandedModules, setExpandedModules] = useState<Set<string>>(
    new Set(modules.map((m) => m.id))
  );
  const location = useLocation();
  const isHomePage = location.pathname === "/overview";
  const stars = useGitHubStars();

  const toggleModule = (id: string) => {
    setExpandedModules((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const closeMobile = () => {
    if (window.innerWidth < 1024) onClose();
  };

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-30 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed top-12 bottom-0 left-0 w-60 bg-sidebar-bg border-r border-border z-40 flex flex-col transition-transform duration-200 ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Progress bar */}
        <div className="h-[2px] bg-border">
          <div
            className="h-full bg-text-dim transition-all duration-150"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-3 px-2">
          {/* Route navigation links */}
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/overview"}
              onClick={closeMobile}
              className={({ isActive }) =>
                `sidebar-item w-full text-left text-xs px-3 py-1.5 mb-1 block ${
                  isActive
                    ? "active"
                    : "text-text-muted hover:text-text"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          {/* Domain sections */}
          <div className="h-px bg-border mx-2 my-3" />

          <div className="text-[10px] uppercase tracking-widest text-text-dim px-3 mb-2">
            Domains
          </div>

          {domainItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={closeMobile}
              className={({ isActive }) =>
                `sidebar-item w-full text-left text-xs px-3 py-1.5 mb-1 block ${
                  isActive
                    ? "active"
                    : "text-text-muted hover:text-text"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          {/* Curriculum modules — shown on all pages for quick access */}
          <div className="h-px bg-border mx-2 my-3" />

          <div className="text-[10px] uppercase tracking-widest text-text-dim px-3 mb-2">
            Curriculum
          </div>

          {modules.map((module, moduleIdx) => {
            const isExpanded = expandedModules.has(module.id);

            return (
              <div key={module.id} className="mb-1">
                {/* Module header */}
                <button
                  onClick={() => {
                    toggleModule(module.id);
                    closeMobile();
                  }}
                  className={`sidebar-item w-full text-left flex items-center gap-1 text-xs px-3 py-1.5 text-text-muted hover:text-text`}
                >
                  <span className="text-text-dim text-[10px] w-4">
                    {String(moduleIdx + 1).padStart(2, "0")}
                  </span>
                  {isExpanded ? (
                    <ChevronDown size={10} className="text-text-dim" />
                  ) : (
                    <ChevronRight size={10} className="text-text-dim" />
                  )}
                  <span className="truncate">{module.shortTitle}</span>
                  <span className="text-[10px] text-text-dim ml-auto">
                    {module.lessons.length}
                  </span>
                </button>

                {/* Lesson items — link to home page with hash */}
                {isExpanded && (
                  <div className="ml-5 border-l border-border">
                    {module.lessons.map((lesson) => {
                      const lessonId = `${module.id}-${lesson.id}`;
                      return isHomePage ? (
                        <button
                          key={lesson.id}
                          onClick={() => {
                            document
                              .getElementById(lessonId)
                              ?.scrollIntoView({ behavior: "smooth" });
                            closeMobile();
                          }}
                          className="sidebar-item w-full text-left text-[11px] pl-3 pr-2 py-1 block text-text-dim hover:text-text-muted"
                        >
                          <span className="truncate block">
                            {lesson.title}
                          </span>
                        </button>
                      ) : (
                        <NavLink
                          key={lesson.id}
                          to={`/overview#${lessonId}`}
                          onClick={closeMobile}
                          className="sidebar-item w-full text-left text-[11px] pl-3 pr-2 py-1 block text-text-dim hover:text-text-muted"
                        >
                          <span className="truncate block">
                            {lesson.title}
                          </span>
                        </NavLink>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="border-t border-border px-3 py-2.5 text-[10px] text-text-dim">
          <div className="mb-2">
            <span>
              {modules.length} modules &middot;{" "}
              {modules.reduce((s, m) => s + m.lessons.length, 0)} lessons
            </span>
          </div>
          <a
            href="https://github.com/suraj-xd/ai-research-archive"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full gap-2 px-2.5 py-1.5 mb-2 rounded border border-border hover:border-border-hover hover:bg-bg-hover text-text-muted hover:text-text transition-colors"
            aria-label="Star on GitHub"
          >
            <span className="flex items-center gap-1.5">
              <Star size={11} strokeWidth={2} />
              <span className="text-[10px] font-medium tracking-wide">
                Star on GitHub
              </span>
            </span>
            {stars !== null && (
              <span className="text-[10px] text-text-dim tabular-nums">
                {stars.toLocaleString()}
              </span>
            )}
          </a>
          <div className="flex items-center gap-3">
            <a
              href="https://x.com/notsurajgaud"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-text-muted transition-colors"
              aria-label="X / Twitter"
            >
              <svg
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
