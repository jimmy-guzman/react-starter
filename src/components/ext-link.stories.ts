import type { Meta, StoryObj } from "@storybook/react";

import { ExtLink } from "./ext-link";

const meta = {
  component: ExtLink,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Components/ExtLink",
} satisfies Meta<typeof ExtLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "daisyUI",
    to: "daisyUI",
  },
};

export const Primary: Story = {
  args: {
    children: "React",
    color: "primary",
    to: "React",
  },
};

export const Secondary: Story = {
  args: {
    children: "Vite",
    color: "secondary",
    to: "Vite",
  },
};

export const Accent: Story = {
  args: {
    children: "tailwindcss",
    color: "accent",
    to: "tailwindcss",
  },
};

export const Button: Story = {
  args: {
    children: "TypeScript",
    to: "TypeScript",
    variant: "button",
  },
};
