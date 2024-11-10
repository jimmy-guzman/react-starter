import type { Meta, StoryObj } from "@storybook/react";

import { Error as ErrorComponent } from "./error";

const meta = {
  component: ErrorComponent,
  title: "Pages/Error",
} satisfies Meta<typeof ErrorComponent>;

export default meta;

type Story = StoryObj<typeof ErrorComponent>;

export const Error: Story = {
  args: {
    error: { message: "Something went wrong!", name: "Error" },
  },
};
