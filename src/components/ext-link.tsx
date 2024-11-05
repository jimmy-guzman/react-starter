import type { ReactNode } from "react";

import { externalLinks } from "@/config/external-links";
import { cn } from "@/lib/cn";

type Color = "accent" | "primary" | "secondary";
type Variant = "button" | "default";

interface ExtLinkProps {
  children: ReactNode;
  className?: string;
  color?: Color;
  to: keyof typeof externalLinks;
  variant?: Variant;
}

/**
 * Pre-configured Abstraction of [daisyUI's Link](https://daisyui.com/components/link) for externals links
 * * Update `src/config/external-links.ts` to add more links
 * @example
 * <ExtLink to='tailwindcss'>tailwindcss</ExtLink> // https://tailwindcss.com
 */
export const ExtLink = ({
  children,
  className,
  color,
  to,
  variant = "default",
}: ExtLinkProps) => {
  return (
    <a
      className={cn(
        {
          "dsy-btn-accent": color === "accent",
          "dsy-btn-primary": color === "primary",
          "dsy-btn-secondary": color === "secondary",
          "dsy-btn dsy-btn-sm": variant === "button",
          "dsy-link-hover dsy-link": variant === "default",
        },
        className,
      )}
      href={externalLinks[to]}
      rel="noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
};
