import { render, screen } from "@/testing/utils";

import { Home } from "./home";

describe("<Home />", () => {
  it('should render "React Starter" heading', async () => {
    await render(<Home />);

    await expect(
      screen.findByRole("heading", { name: "React Starter", level: 1 }),
    ).resolves.toBeInTheDocument();
  });
});
