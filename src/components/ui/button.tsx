import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

/**
 * Button — General Agents canonical keycap spec.
 * Variants map to .ga-btn-* classes defined in src/index.css
 * (lifted from preview/comp-buttons.html).
 *
 *   primary   → black gradient + inset highlight + bottom rim (32h · r7)
 *   secondary → white keycap + inset rim
 *   ghost     → no chrome, hover bg
 *   destructive → red text only (rare — used only for delete)
 *   outline   → alias of secondary for shadcn API parity
 *   link      → underline only
 *
 * Sizes: default (32h), sm (28h), lg (40h), icon (square).
 */
const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center font-sans transition-all outline-none disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:   "ga-btn ga-btn-primary",
        secondary: "ga-btn ga-btn-secondary",
        outline:   "ga-btn ga-btn-secondary",
        ghost:     "ga-btn ga-btn-ghost",
        destructive:
          "ga-btn ga-btn-secondary !text-[var(--ga-danger)] hover:!text-[var(--ga-danger)]",
        link:
          "text-foreground underline-offset-2 hover:underline px-0 h-auto",
      },
      size: {
        default:    "",
        xs:         "!h-6 !px-2 !text-xs [&_svg:not([class*='size-'])]:size-3",
        sm:         "!h-7 !px-2.5 !text-[13px] [&_svg:not([class*='size-'])]:size-3.5",
        lg:         "!h-10 !px-4 !text-[15px]",
        icon:       "!w-8 !p-0 [&_svg:not([class*='size-'])]:size-[18px]",
        "icon-xs":  "!w-6 !p-0 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":  "!w-7 !p-0 [&_svg:not([class*='size-'])]:size-4",
        "icon-lg":  "!w-10 !p-0 [&_svg:not([class*='size-'])]:size-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
