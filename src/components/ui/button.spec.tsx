import { render, screen } from "@testing-library/react";

import { Button } from "./button";

describe("Button", () => {
  it("should render button", () => {
    render(<Button>Click Me</Button>);

    const button = screen.getByRole("button", { name: "Click Me" });

    expect(button).toMatchInlineSnapshot(`
      <button
        class="dsy-btn dsy-btn-md"
        type="button"
      >
        Click Me
      </button>
    `);
  });

  it("should render button as child", () => {
    render(
      <Button asChild variant="link">
        <a href="#link">Link</a>
      </Button>,
    );

    const link = screen.getByRole("link", { name: "Link" });

    expect(link).toBeInTheDocument();
  });

  it("should render button with modifier", () => {
    render(<Button modifier="block">Click Me</Button>);

    const button = screen.getByRole("button", { name: "Click Me" });

    expect(button).toHaveClass("dsy-btn-block");
  });

  it("should render button with color", () => {
    render(<Button color="primary">Click Me</Button>);

    const button = screen.getByRole("button", { name: "Click Me" });

    expect(button).toHaveClass("dsy-btn-primary");
  });

  it("should render button with variant", () => {
    render(<Button variant="outline">Click Me</Button>);

    const button = screen.getByRole("button", { name: "Click Me" });

    expect(button).toHaveClass("dsy-btn-outline");
  });

  it("should render button with size", () => {
    render(<Button size="sm">Click Me</Button>);

    const button = screen.getByRole("button", { name: "Click Me" });

    expect(button).toHaveClass("dsy-btn-sm");
  });
});
