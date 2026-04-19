export function ZigDivider({
  label,
  width = 320,
}: {
  label?: string;
  width?: number;
}) {
  const zig = (
    <svg
      viewBox="0 0 200 8"
      preserveAspectRatio="none"
      style={{ flex: 1, height: 8 }}
      aria-hidden
    >
      <path
        d="M0 4 Q 5 0 10 4 T 20 4 T 30 4 T 40 4 T 50 4 T 60 4 T 70 4 T 80 4 T 90 4 T 100 4 T 110 4 T 120 4 T 130 4 T 140 4 T 150 4 T 160 4 T 170 4 T 180 4 T 190 4 T 200 4"
        fill="none"
        stroke="var(--ga-divider, #E9E9E9)"
        strokeWidth="1"
      />
    </svg>
  );

  if (!label) {
    return (
      <div style={{ width, margin: "0 auto" }}>{zig}</div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        width,
        margin: "0 auto",
      }}
    >
      {zig}
      <span
        style={{
          fontFamily: "var(--ga-font-mono)",
          fontSize: 12,
          color: "var(--ga-fg3)",
          letterSpacing: ".02em",
          textTransform: "uppercase",
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </span>
      {zig}
    </div>
  );
}
