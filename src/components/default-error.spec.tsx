import { render, screen } from "@/testing/utils";

import { DefaultError } from "./default-error";

describe("<DefaultError />", () => {
  it("should render error alert", async () => {
    await render(
      <DefaultError
        error={new Error("Something went Wrong!")}
        reset={vi.fn()}
      />,
    );

    expect(
      screen.getByRole("alert", {
        description: /something went wrong!/i,
        name: /error/i,
      }),
    ).toBeInTheDocument();
  });

  it("should reset", async () => {
    const reset = vi.fn();

    const { user } = await render(
      <DefaultError error={new Error("Something went Wrong!")} reset={reset} />,
    );

    await user.click(screen.getByRole("button", { name: /reset/i }));

    expect(reset).toHaveBeenCalledExactlyOnceWith(expect.anything());
  });
});
