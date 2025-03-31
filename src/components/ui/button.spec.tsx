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

    const link = screen.getByRole("link", { name: "Link" });

    expect(link).toBeInTheDocument();
  });

  it("should render button with modifier", async () => {
    await render(<Button modifier="block">Click Me</Button>);

    const button = screen.getByRole("button", { name: "Click Me" });

    expect(button).toHaveClass("dsy-btn-block");
  });

  it("should render button with color", async () => {
    await render(<Button color="primary">Click Me</Button>);

    const button = screen.getByRole("button", { name: "Click Me" });

    expect(button).toHaveClass("dsy-btn-primary");
  });

  it("should render button with variant", async () => {
    await render(<Button variant="outline">Click Me</Button>);

    const button = screen.getByRole("button", { name: "Click Me" });

    expect(button).toHaveClass("dsy-btn-outline");
  });

  it("should render button with size", async () => {
    await render(<Button size="sm">Click Me</Button>);

    const button = screen.getByRole("button", { name: "Click Me" });

    expect(button).toHaveClass("dsy-btn-sm");
  });
});
