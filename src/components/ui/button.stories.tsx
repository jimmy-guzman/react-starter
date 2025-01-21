import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./button";

const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Components/UI/Button",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "daisyUI",
  },
};

export const Primary: Story = {
  args: {
    children: "Primary",
    color: "primary",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline",
    variant: "outline",
  },
};

export const Link: Story = {
  args: {
    asChild: true,
    children: <a href="#link">Link</a>,
    variant: "link",
  },
};
