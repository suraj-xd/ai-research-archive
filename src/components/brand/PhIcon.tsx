import { type CSSProperties } from "react";

type Weight = "regular" | "fill" | "bold";

export function PhIcon({
  name,
  size = 18,
  weight = "regular",
  color = "currentColor",
  className,
  style,
}: {
  name: string;
  size?: number;
  weight?: Weight;
  color?: string;
  className?: string;
  style?: CSSProperties;
}) {
  const cls = weight === "regular" ? "ph" : `ph-${weight}`;
  return (
    <i
      className={`${cls} ph-${name}${className ? ` ${className}` : ""}`}
      style={{ fontSize: size, color, lineHeight: 1, ...style }}
      aria-hidden
    />
  );
}
