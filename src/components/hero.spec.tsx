import { render, screen } from "@/testing/utils";

import { Hero } from "./hero";

describe("<Hero />", () => {
  it('should render "React Starter" heading', async () => {
    await render(<Hero />);

    expect(
      screen.getByRole("heading", { level: 1, name: "React Starter" }),
    ).toBeInTheDocument();
  });
});
