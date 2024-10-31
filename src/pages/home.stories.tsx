import type { Meta, StoryObj } from "@storybook/react";

import { Home as HomeComponent } from "./home";

const meta = {
  component: HomeComponent,
  title: "Pages/Home",
} satisfies Meta<typeof Home>;

export default meta;

type Story = StoryObj<typeof HomeComponent>;

export const Home: Story = {};
