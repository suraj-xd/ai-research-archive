import { type ReactNode } from "react";
import { Logo } from "./Logo";
import { PhIcon } from "./PhIcon";

export function TopBar({
  crumbs = ["Ronika."],
  right,
}: {
  crumbs?: string[];
  right?: ReactNode;
}) {
  return (
    <header
      className="sticky top-0 z-10 flex items-center bg-ga-bg font-sans"
      style={{
        height: 55,
        borderBottom: "1px solid var(--ga-divider)",
        padding: "0 24px",
      }}
    >
      <Logo size={22} />
      <nav
        className="flex items-center gap-2.5"
        style={{ marginLeft: 14, fontSize: 14, color: "var(--ga-fg1)" }}
      >
        {crumbs.map((crumb, i) => (
          <span key={`${crumb}-${i}`} className="flex items-center gap-2.5">
            {i > 0 && <span style={{ color: "var(--ga-border-strong)" }}>/</span>}
            <span>{crumb}</span>
          </span>
        ))}
      </nav>
      <div
        className="ml-auto flex items-center gap-5.5"
        style={{ fontSize: 14, color: "var(--ga-fg1)", gap: 22 }}
      >
        {right ?? (
          <>
            <a
              href="#"
              style={{ color: "var(--ga-fg1)", textDecoration: "none" }}
            >
              Templates
            </a>
            <a
              href="#"
              style={{ color: "var(--ga-fg1)", textDecoration: "none" }}
            >
              Job history
            </a>
            <div
              className="inline-flex items-center justify-center rounded-full"
              style={{
                width: 28,
                height: 28,
                background: "var(--ga-border)",
              }}
            >
              <PhIcon name="user" size={16} color="var(--ga-fg2)" />
            </div>
          </>
        )}
      </div>
    </header>
  );
}
