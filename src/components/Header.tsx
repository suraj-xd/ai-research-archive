import { Link } from "react-router-dom";
import { Logo, PhIcon } from "@/components/brand";
import { useGitHubStars } from "@/hooks/useGitHubStars";

interface HeaderProps {
  onToggleSidebar: () => void;
  sidebarOpen: boolean;
}

const REPO = "suraj-xd/ai-research-archive";

export function Header({ onToggleSidebar, sidebarOpen }: HeaderProps) {
  const stars = useGitHubStars(REPO);

  return (
    <header
      className="sticky top-0 z-40 flex items-center bg-ga-bg font-sans"
      style={{
        height: 55,
        borderBottom: "1px solid var(--ga-divider)",
        padding: "0 16px",
        gap: 12,
      }}
    >
      <button
        type="button"
        onClick={onToggleSidebar}
        className="inline-flex items-center justify-center rounded-md transition-colors lg:hidden"
        style={{ width: 32, height: 32, color: "var(--ga-fg2)" }}
        aria-label="Toggle sidebar"
      >
        <PhIcon name={sidebarOpen ? "x" : "list"} size={18} />
      </button>

      <Link
        to="/overview"
        className="flex items-center"
        style={{ color: "var(--ga-fg1)", textDecoration: "none", gap: 10 }}
      >
        <Logo size={28} />
        <span
          style={{
            fontFamily: "var(--ga-font-departure)",
            fontWeight: 400,
            fontSize: 15,
            lineHeight: 1,
            letterSpacing: "0.02em",
            color: "var(--ga-fg1)",
            textTransform: "lowercase",
            position: "relative",
            top: 1,
          }}
        >
          ai research archive
        </span>
      </Link>

      <span
        className="ml-auto hidden md:inline-flex items-center"
        style={{
          gap: 6,
          padding: "4px 10px",
          borderRadius: 999,
          background: "var(--ga-chip)",
          color: "var(--ga-fg2)",
          fontFamily: "var(--ga-font-mono)",
          fontSize: 11,
          fontWeight: 500,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
        aria-label="Updated weekly"
      >
        <PhIcon name="calendar-blank" size={12} color="var(--ga-fg2)" />
        Updated weekly
      </span>

      <div
        className="md:ml-3 ml-auto flex items-center"
        style={{ gap: 8 }}
      >
        <a
          href={`https://github.com/${REPO}`}
          target="_blank"
          rel="noopener noreferrer"
          className="ga-btn ga-btn-secondary"
          style={{ height: 32, padding: "0 10px", borderRadius: 7 }}
          aria-label={
            stars !== null
              ? `Star on GitHub — ${stars} stars`
              : "Star on GitHub"
          }
        >
          <PhIcon name="github-logo" size={14} color="var(--ga-fg1)" />
          <PhIcon
            name="star"
            weight="fill"
            size={12}
            color="var(--ga-fg2)"
          />
          <span
            style={{
              fontFamily: "var(--ga-font-mono)",
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: "0.02em",
              color: "var(--ga-fg1)",
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {stars !== null ? stars.toLocaleString() : "Star"}
          </span>
        </a>
      </div>
    </header>
  );
}
