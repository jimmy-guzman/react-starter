import { render, screen } from "@/testing/utils";

import { NotFound } from "./not-found";

describe("<NotFound />", () => {
  it('should render "Not Found" message', async () => {
    await render(<NotFound />);

    expect(screen.getByText("Not Found")).toBeInTheDocument();
  });
});
