import { useId } from "react";

export function Sparkle({
  size = 28,
  className,
}: {
  size?: number;
  className?: string;
}) {
  const id = useId();
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient
          id={id}
          x1="0"
          y1="0"
          x2="24"
          y2="24"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="var(--ga-sparkle-from, #A78BFA)" />
          <stop offset="100%" stopColor="var(--ga-sparkle-to, #6366F1)" />
        </linearGradient>
      </defs>
      <path
        d="M12 2 C13 8 16 11 22 12 C16 13 13 16 12 22 C11 16 8 13 2 12 C8 11 11 8 12 2 Z"
        fill={`url(#${id})`}
      />
    </svg>
  );
}
