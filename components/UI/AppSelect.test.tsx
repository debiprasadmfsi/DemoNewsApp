import { render, screen } from "@testing-library/react";
import AppSelect from "./AppSelect";
import { Countries } from "@/constants/settings";


const mockSelectionChange = jest.fn();



describe("AppSelect", () => {
  test("should render and mat select and emit selection change event", () => {
    render(
      <AppSelect list={Countries} selected={'in'} selectionChange={mockSelectionChange} />
    );
    
    const select = screen.getByTestId("app-select");
    expect(select).toBeInTheDocument();
  });
});
