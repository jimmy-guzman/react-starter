import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "./button";

const meta = {
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Components/UI/Button",
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Colors: Story = {
  render: (args) => {
    return (
      <div className="flex flex-wrap gap-2">
        {(
          [
            "primary",
            "secondary",
            "accent",
            "info",
            "success",
            "warning",
            "error",
            "neutral",
            "default",
          ] as const
        ).map((color) => {
          return (
            <Button key={color} {...args} color={color}>
              {color}
            </Button>
          );
        })}
      </div>
    );
  },
};

export const Sizes: Story = {
  render: (args) => {
    return (
      <div className="flex flex-wrap items-end gap-2">
        {(["xs", "sm", "default", "lg", "xl"] as const).map((size) => {
          return (
            <Button key={size} {...args} size={size}>
              {size}
            </Button>
          );
        })}
      </div>
    );
  },
};

export const Variants: Story = {
  render: (args) => {
    return (
      <div className="flex flex-wrap gap-2">
        {(["default", "ghost", "link", "outline", "soft"] as const).map(
          (variant) => {
            return (
              <Button key={variant} {...args} variant={variant}>
                {variant}
              </Button>
            );
          },
        )}
      </div>
    );
  },
};

export const Modifiers: Story = {
  render: (args) => {
    return (
      <div className="flex flex-wrap gap-2">
        {(["default", "block", "wide", "circle", "square"] as const).map(
          (modifier) => {
            return (
              <Button key={modifier} {...args} modifier={modifier}>
                {modifier}
              </Button>
            );
          },
        )}
      </div>
    );
  },
};
