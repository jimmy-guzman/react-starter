import type { VariantProps } from "class-variance-authority";

import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { forwardRef } from "react";

import { cn } from "@/lib/cn";

const buttonVariants = cva("dsy-btn", {
  defaultVariants: {
    color: "default",
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
    size: {
      default: "dsy-btn-md",
      lg: "dsy-btn-lg",
      sm: "dsy-btn-sm",
      xs: "dsy-btn-xs",
    },
    variant: {
      default: "",
      ghost: "dsy-btn-ghost",
      link: "dsy-btn-link",
      outline: "dsy-btn-outline",
    },
  },
});

interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { asChild = false, className, color, size, variant, ...props }: ButtonProps,
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ className, color, size, variant }))}
        ref={ref}
        type="button"
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button };
