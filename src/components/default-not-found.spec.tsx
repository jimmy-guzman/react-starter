import { render, screen } from "@/testing/utils";

import { DefaultNotFound } from "./default-not-found";

describe("<DefaultNotFound />", () => {
  it('should render "Not Found" alert', async () => {
    await render(<DefaultNotFound />);

    expect(
      screen.getByRole("alert", {
        description: /we couldn’t find that page./i,
        name: /page not found/i,
      }),
    ).toBeInTheDocument();
  });
});
