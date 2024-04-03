import type { ReactNode } from "react";

import { externalLinks } from "@/config/external-links";
import { cn } from "@/lib/cn";

type Variant = "accent" | "primary" | "secondary";

interface XLinkProps {
  className?: string;
  to: keyof typeof externalLinks;
  variant?: Variant;
  /**
   * Wether or no to show link as a button
   */
  isButton?: boolean;
  children: ReactNode;
}

/**
 * Pre-configured Abstraction of [daisyUI's Link](https://daisyui.com/components/link) for externals links
 * * Update `src/components/XLink.config.ts` to add more links
 * @example
 * <XLink to='tailwindcss'>tailwindcss</XLink> // https://tailwindcss.com
 */
export const XLink = ({
  to,
  className,
  variant,
  isButton = false,
  children,
}: XLinkProps) => {
  return (
    <a
      href={externalLinks[to]}
      target="_blank"
      rel="noreferrer"
      className={cn(
        isButton
          ? [
              "dsy-btn",
              {
                "dsy-btn-primary": variant === "primary",
                "dsy-btn-secondary": variant === "secondary",
                "dsy-btn-accent": variant === "accent",
              },
            ]
          : [
              "dsy-link-hover dsy-link",
              {
                "dsy-link-primary": variant === "primary",
                "dsy-link-secondary": variant === "secondary",
                "dsy-link-accent": variant === "accent",
              },
            ],
        className,
      )}
    >
      {children}
    </a>
  );
};
