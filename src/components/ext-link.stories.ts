import type { Meta, StoryObj } from "@storybook/react";

import { ExtLink } from "./ext-link";

const meta = {
  title: "Components/ExtLink",
  component: ExtLink,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ExtLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    to: "daisyUI",
    children: "daisyUI",
  },
};

export const Primary: Story = {
  args: {
    to: "React",
    color: "primary",
    children: "React",
  },
};

export const Secondary: Story = {
  args: {
    to: "Vite",
    color: "secondary",
    children: "Vite",
  },
};

export const Accent: Story = {
  args: {
    to: "tailwindcss",
    color: "accent",
    children: "tailwindcss",
  },
};

export const Button: Story = {
  args: {
    to: "TypeScript",
    variant: "button",
    children: "TypeScript",
  },
};
