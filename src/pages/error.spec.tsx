import { render, screen } from "@/testing/utils";

import { Error as ErrorPage } from "./error";

describe("<Error />", () => {
  it('should render "Something went Wrong!" message', async () => {
    await render(
      <ErrorPage reset={vi.fn()} error={new Error("Something went Wrong!")} />,
    );

    expect(screen.getByText("Something went Wrong!")).toBeInTheDocument();
  });
});
