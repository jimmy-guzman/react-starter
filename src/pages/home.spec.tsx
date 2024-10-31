import { render, screen } from "@/testing/utils";

import { Home } from "./home";

describe("<Home />", () => {
  it('should render "React Starter" heading', async () => {
    await render(<Home />);

    expect(
      screen.getByRole("heading", { level: 1, name: "React Starter" }),
    ).toBeInTheDocument();
  });
});
