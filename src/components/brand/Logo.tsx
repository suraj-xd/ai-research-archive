/**
 * Project logo — the "research archive" pink-cards mark.
 * Rendered directly (no wrapper chrome) since the mark has its own visual
 * identity. The image lives at /public/logo.png and is also the favicon.
 */
export function Logo({ size = 28 }: { size?: number }) {
  return (
    <img
      src="/logo.png"
      width={size}
      height={size}
      alt="AI Researcher Hub"
      style={{
        width: size,
        height: size,
        objectFit: "contain",
        display: "block",
        flexShrink: 0,
      }}
    />
  );
}
