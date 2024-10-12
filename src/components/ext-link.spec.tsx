import { render, screen } from "@/testing/utils";

import { ExtLink } from "./ext-link";

describe("ExtLink", () => {
  it.each([
    "Vite",
    "React",
    "TypeScript",
    "tailwindcss",
    "GitHub",
    "Deploy",
    "Bun",
  ] as const)("should render %s link", async (to) => {
    await render(<ExtLink to={to}>{to}</ExtLink>);

    await expect(
      screen.findByRole("link", { name: to }),
    ).resolves.toBeInTheDocument();
  });
});
