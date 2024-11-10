import type { Meta, StoryObj } from "@storybook/react";

import { NotFound as NotFoundComponent } from "./not-found";

const meta = {
  component: NotFoundComponent,
  title: "Pages/NotFound",
} satisfies Meta<typeof NotFound>;

export default meta;

type Story = StoryObj<typeof NotFoundComponent>;

export const NotFound: Story = {};
