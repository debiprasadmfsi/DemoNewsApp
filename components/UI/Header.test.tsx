import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  test("should render chilren props in hearder", () => {
    render(
      <Header>
        <h1>Test</h1>
      </Header>
    );
    const headerTitle = screen.getByRole("heading", {
      level: 1,
    });

    expect(headerTitle).toBeInTheDocument();
  });
});
