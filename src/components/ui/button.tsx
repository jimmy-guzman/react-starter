import type { VariantProps } from "class-variance-authority";
import type * as React from "react";

import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/cn";

const buttonVariants = cva("dsy-btn", {
  defaultVariants: {
    color: "default",
    modifier: "default",
    size: "default",
    variant: "default",
  },
  variants: {
    color: {
      accent: "dsy-btn-accent",
      default: "",
      error: "dsy-btn-error",
      info: "dsy-btn-info",
      neutral: "dsy-btn-neutral",
      primary: "dsy-btn-primary",
      secondary: "dsy-btn-secondary",
      success: "dsy-btn-success",
      warning: "dsy-btn-warning",
    },
    modifier: {
      block: "dsy-btn-block",
      circle: "dsy-btn-circle",
      default: "",
      square: "dsy-btn-square",
      wide: "dsy-btn-wide",
    },
    size: {
      default: "dsy-btn-md",
      lg: "dsy-btn-lg",
      sm: "dsy-btn-sm",
      xl: "dsy-btn-xl",
      xs: "dsy-btn-xs",
    },
    variant: {
      default: "",
      ghost: "dsy-btn-ghost",
      link: "dsy-btn-link",
      outline: "dsy-btn-outline",
      soft: "dsy-btn-soft",
    },
  },
});

type HtmlButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "color"
>;

type ButtonVariants = VariantProps<typeof buttonVariants>;

interface ButtonProps extends ButtonVariants, HtmlButtonProps {
  asChild?: boolean;
}

const Button = ({
  asChild = false,
  className,
  color,
  modifier,
  ref,
  size,
  variant,
  ...props
}: ButtonProps & { ref?: React.RefObject<HTMLButtonElement | null> }) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(
        buttonVariants({
          className,
          color,
          modifier,
          size,
          variant,
        }),
      )}
      ref={ref}
      type="button"
      {...props}
    />
  );
};

Button.displayName = "Button";

export { Button };
