import type { ReactNode } from "react";

import { externalLinks } from "@/config/external-links";
import { cn } from "@/lib/cn";

type Color = "accent" | "primary" | "secondary";
type Variant = "default" | "button";

interface LinkProps {
  className?: string;
  to: keyof typeof externalLinks;
  color?: Color;
  variant?: Variant;
  children: ReactNode;
}

/**
 * Pre-configured Abstraction of [daisyUI's Link](https://daisyui.com/components/link) for externals links
 * * Update `src/config/external-links.ts` to add more links
 * @example
 * <ExtLink to='tailwindcss'>tailwindcss</ExtLink> // https://tailwindcss.com
 */
export const ExtLink = ({
  to,
  className,
  color,
  variant = "default",
  children,
}: LinkProps) => {
  return (
    <a
      href={externalLinks[to]}
      target="_blank"
      rel="noreferrer"
      className={cn(
        {
          "dsy-link-hover dsy-link": variant === "default",
          "dsy-btn": variant === "button",
          "dsy-btn-primary": color === "primary",
          "dsy-btn-secondary": color === "secondary",
          "dsy-btn-accent": color === "accent",
        },
        className,
      )}
    >
      {children}
    </a>
  );
};
