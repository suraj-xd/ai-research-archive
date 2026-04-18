import { ChevronRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { modules } from "@/data/curriculum";

interface SidebarProps {
  scrollProgress: number;
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { to: "/", label: "Overview" },
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
  const isHomePage = location.pathname === "/";

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
              end={item.to === "/"}
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
                          to={`/#${lessonId}`}
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
          <div className="flex items-center justify-between mb-1.5">
            <span>
              {modules.length} modules &middot;{" "}
              {modules.reduce((s, m) => s + m.lessons.length, 0)} lessons
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/suraj-xd"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-text-muted transition-colors"
              aria-label="GitHub"
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://x.com/notsurajgaud"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-text-muted transition-colors"
              aria-label="X / Twitter"
            >
              <svg
                width="12"
                height="12"
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
