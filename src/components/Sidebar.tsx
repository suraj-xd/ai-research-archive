import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { modules } from "@/data/curriculum";
import { PhIcon } from "@/components/brand";

interface SidebarProps {
  scrollProgress: number;
  isOpen: boolean;
  onClose: () => void;
}

type NavItem = { to: string; label: string; icon: string };

const navItems: NavItem[] = [
  { to: "/overview", label: "Overview", icon: "house" },
  { to: "/resources", label: "Resources", icon: "stack" },
  { to: "/community", label: "Community", icon: "users-three" },
  { to: "/study-with-me", label: "Study with me", icon: "video-camera" },
  { to: "/articles", label: "Articles", icon: "newspaper" },
  { to: "/blogs", label: "Blogs", icon: "article" },
  { to: "/roadmap", label: "Roadmap", icon: "map-trifold" },
  { to: "/tools", label: "Tools & practice", icon: "wrench" },
  { to: "/claude-code", label: "Claude Code", icon: "code" },
  { to: "/system-design", label: "System design", icon: "graph" },
  { to: "/hardware", label: "Hardware", icon: "circuitry" },
  { to: "/challenges", label: "Challenges", icon: "trophy" },
  { to: "/glossary", label: "Glossary", icon: "book-open" },
  { to: "/newsletters", label: "Newsletters", icon: "envelope-simple" },
  { to: "/tracks", label: "Learning tracks", icon: "path" },
  { to: "/guides", label: "Official guides", icon: "compass" },
  { to: "/papers", label: "Research papers", icon: "files" },
  { to: "/interviews", label: "Interview prep", icon: "chats" },
  { to: "/jobs", label: "Jobs", icon: "briefcase" },
  { to: "/misc", label: "Misc", icon: "sparkle" },
  { to: "/newbies", label: "Newbies", icon: "baby" },
];

const domainItems: NavItem[] = [
  { to: "/deep-learning", label: "Deep learning", icon: "brain" },
  { to: "/machine-learning", label: "Machine learning", icon: "function" },
  {
    to: "/reinforcement-learning",
    label: "Reinforcement learning",
    icon: "robot",
  },
  { to: "/gpu", label: "GPU & CUDA", icon: "cpu" },
];

const sidebarItemBase: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 10,
  padding: "6px 10px",
  borderRadius: 6,
  fontSize: 13,
  fontWeight: 500,
  letterSpacing: "0.01em",
  textDecoration: "none",
  cursor: "pointer",
  width: "100%",
  border: 0,
  background: "transparent",
  textAlign: "left",
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontFamily: "var(--ga-font-mono)",
        fontSize: 11,
        color: "var(--ga-ink-400)",
        textTransform: "uppercase",
        letterSpacing: "0.08em",
        fontWeight: 500,
        margin: "16px 10px 6px",
      }}
    >
      {children}
    </div>
  );
}

function NavRow({
  item,
  onNavigate,
}: {
  item: NavItem;
  onNavigate: () => void;
}) {
  return (
    <NavLink
      to={item.to}
      end={item.to === "/overview"}
      onClick={onNavigate}
      style={({ isActive }) => ({
        ...sidebarItemBase,
        color: isActive ? "var(--ga-fg1)" : "var(--ga-fg2)",
        background: isActive ? "var(--ga-hover)" : "transparent",
      })}
    >
      {({ isActive }) => (
        <>
          <PhIcon
            name={item.icon}
            size={16}
            color={isActive ? "var(--ga-fg1)" : "var(--ga-fg2)"}
          />
          <span style={{ flex: 1, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            {item.label}
          </span>
        </>
      )}
    </NavLink>
  );
}

export function Sidebar({ scrollProgress, isOpen, onClose }: SidebarProps) {
  const [expandedModules, setExpandedModules] = useState<Set<string>>(
    new Set(modules.map((m) => m.id))
  );
  const location = useLocation();
  const isHomePage = location.pathname === "/overview";

  const toggleModule = (id: string) => {
    setExpandedModules((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const closeMobile = () => {
    if (typeof window !== "undefined" && window.innerWidth < 1024) onClose();
  };

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 lg:hidden"
          style={{ background: "rgba(0, 0, 0, 0.25)" }}
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed left-0 z-40 flex flex-col transition-transform duration-200 lg:sticky ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
        style={{
          top: 55,
          width: 220,
          height: "calc(100vh - 55px)",
          background: "var(--ga-sidebar)",
          borderRight: "1px solid var(--ga-divider)",
          fontFamily: "var(--ga-font-sans)",
        }}
      >
        {/* Scroll progress */}
        <div
          style={{
            height: 2,
            background: "var(--ga-divider)",
            position: "relative",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${scrollProgress}%`,
              background: "var(--ga-ink-800)",
              transition: "width 150ms ease-out",
            }}
          />
        </div>

        {/* Scrollable nav */}
        <nav
          className="flex-1 overflow-y-auto"
          style={{ padding: "8px 12px 16px" }}
        >
          <SectionLabel>Pages</SectionLabel>
          {navItems.map((item) => (
            <NavRow key={item.to} item={item} onNavigate={closeMobile} />
          ))}

          <SectionLabel>Domains</SectionLabel>
          {domainItems.map((item) => (
            <NavRow key={item.to} item={item} onNavigate={closeMobile} />
          ))}

          <SectionLabel>Curriculum</SectionLabel>
          {modules.map((module, moduleIdx) => {
            const isExpanded = expandedModules.has(module.id);
            return (
              <div key={module.id} style={{ marginBottom: 2 }}>
                <button
                  type="button"
                  onClick={() => {
                    toggleModule(module.id);
                  }}
                  style={{
                    ...sidebarItemBase,
                    color: "var(--ga-fg2)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--ga-font-mono)",
                      fontSize: 10,
                      color: "var(--ga-ink-400)",
                      width: 18,
                    }}
                  >
                    {String(moduleIdx + 1).padStart(2, "0")}
                  </span>
                  <PhIcon
                    name={isExpanded ? "caret-down" : "caret-right"}
                    size={10}
                    color="var(--ga-ink-400)"
                  />
                  <span
                    style={{
                      flex: 1,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {module.shortTitle}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--ga-font-mono)",
                      fontSize: 10,
                      color: "var(--ga-ink-400)",
                    }}
                  >
                    {module.lessons.length}
                  </span>
                </button>
                {isExpanded && (
                  <div
                    style={{
                      marginLeft: 18,
                      borderLeft: "1px solid var(--ga-divider)",
                    }}
                  >
                    {module.lessons.map((lesson) => {
                      const lessonId = `${module.id}-${lesson.id}`;
                      const linkProps = isHomePage
                        ? {
                            onClick: () => {
                              document
                                .getElementById(lessonId)
                                ?.scrollIntoView({ behavior: "smooth" });
                              closeMobile();
                            },
                          }
                        : undefined;
                      const Comp = isHomePage ? "button" : NavLink;
                      const compProps =
                        Comp === NavLink
                          ? {
                              to: `/overview#${lessonId}`,
                              onClick: closeMobile,
                            }
                          : { type: "button" as const, ...linkProps };
                      return (
                        // @ts-expect-error union of button + NavLink props
                        <Comp
                          key={lesson.id}
                          {...compProps}
                          style={{
                            ...sidebarItemBase,
                            padding: "4px 10px",
                            fontSize: 11,
                            color: "var(--ga-fg3)",
                            display: "block",
                          }}
                        >
                          <span
                            style={{
                              display: "block",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                          >
                            {lesson.title}
                          </span>
                        </Comp>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Footer — counts + X icon (GitHub star moved to top navbar) */}
        <div
          style={{
            borderTop: "1px solid var(--ga-divider)",
            padding: "10px 12px",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span
            style={{
              fontFamily: "var(--ga-font-mono)",
              fontSize: 10,
              color: "var(--ga-ink-400)",
              textTransform: "uppercase",
              letterSpacing: "0.04em",
              flex: 1,
            }}
          >
            {modules.length} modules ·{" "}
            {modules.reduce((s, m) => s + m.lessons.length, 0)} lessons
          </span>
          <a
            href="https://x.com/notsurajgaud"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md transition-colors"
            style={{
              width: 28,
              height: 28,
              color: "var(--ga-fg2)",
              textDecoration: "none",
            }}
            aria-label="Follow @notsurajgaud on X"
          >
            <PhIcon name="x-logo" size={13} color="var(--ga-fg2)" />
          </a>
        </div>
      </aside>
    </>
  );
}
