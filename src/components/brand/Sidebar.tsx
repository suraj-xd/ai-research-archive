import { type ReactNode } from "react";
import { PhIcon } from "./PhIcon";

export type SidebarItem = {
  id: string;
  icon: string;        // Phosphor icon name (e.g. "diamond", "folder")
  iconWeight?: "regular" | "fill" | "bold";
  label: string;
  onClick?: () => void;
};

export type SidebarGroup = {
  label: string;       // Mono ALL-CAPS section header (PAGES, SAVES, …)
  items: SidebarItem[];
};

export function Sidebar({
  groups,
  recent,
  active,
  user,
  onNav,
  width = 220,
  children,
}: {
  groups: SidebarGroup[];
  recent?: { id: string; label: string }[];
  active?: string;
  user?: { name: string; avatarUrl?: string };
  onNav?: (id: string) => void;
  width?: number;
  children?: ReactNode;
}) {
  return (
    <aside
      className="flex h-full flex-col bg-ga-sidebar font-sans"
      style={{ width, padding: "18px 14px" }}
    >
      {groups.map((group) => (
        <div key={group.label}>
          <div className="ga-mono-label" style={{ margin: "14px 10px 8px" }}>
            {group.label}
          </div>
          {group.items.map((item) => {
            const isActive = active === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  item.onClick?.();
                  onNav?.(item.id);
                }}
                className="flex w-full items-center gap-2.5 rounded-md text-left transition-colors"
                style={{
                  padding: "6px 10px",
                  fontSize: 14,
                  fontWeight: 500,
                  letterSpacing: "0.01em",
                  color: isActive ? "var(--ga-fg1)" : "var(--ga-fg2)",
                  background: isActive ? "var(--ga-hover)" : "transparent",
                  border: 0,
                  cursor: "pointer",
                }}
              >
                <PhIcon
                  name={item.icon}
                  weight={item.iconWeight ?? "regular"}
                  size={18}
                  color={isActive ? "var(--ga-fg1)" : "var(--ga-fg2)"}
                />
                {item.label}
              </button>
            );
          })}
        </div>
      ))}

      {recent && recent.length > 0 && (
        <>
          <div className="ga-mono-label" style={{ margin: "14px 10px 8px" }}>
            RECENT JOBS
          </div>
          {recent.map((r) => (
            <button
              key={r.id}
              type="button"
              className="w-full truncate text-left transition-colors hover:text-ga-fg1"
              style={{
                padding: "6px 10px",
                fontSize: 14,
                color: "var(--ga-fg2)",
                background: "transparent",
                border: 0,
                cursor: "pointer",
              }}
            >
              {r.label}
            </button>
          ))}
        </>
      )}

      {children}

      {user && (
        <div
          className="mt-auto flex items-center gap-2.5"
          style={{ padding: "8px 10px" }}
        >
          <div
            className="inline-flex items-center justify-center overflow-hidden rounded-full"
            style={{
              width: 28,
              height: 28,
              background: "var(--ga-border)",
              color: "var(--ga-fg2)",
            }}
          >
            {user.avatarUrl ? (
              <img
                src={user.avatarUrl}
                alt={user.name}
                className="h-full w-full object-cover"
              />
            ) : (
              <PhIcon name="user" size={14} color="var(--ga-fg2)" />
            )}
          </div>
          <span style={{ fontSize: 13, color: "var(--ga-fg1)" }}>
            {user.name}
          </span>
          <PhIcon
            name="gear-six"
            size={14}
            color="var(--ga-fg2)"
            style={{ marginLeft: "auto", cursor: "pointer" }}
          />
        </div>
      )}
    </aside>
  );
}
