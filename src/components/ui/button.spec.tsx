import { render, screen } from "@/testing/utils";

import { Button } from "./button";

describe("Button", () => {
  it("should render button", async () => {
    await render(<Button>Click Me</Button>);

    const button = screen.getByRole("button", { name: "Click Me" });

    expect(button).toBeInTheDocument();
  });

  it("should render button as child", async () => {
    await render(
      <Button asChild variant="link">
        <a href="#link">Link</a>
      </Button>,
    );

    const button = screen.getByRole("link", { name: "Link" });

    expect(button).toBeInTheDocument();
  });
});
