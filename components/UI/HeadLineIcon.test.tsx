import { render, screen } from "@testing-library/react";
import HeadLineIcon from "./HeadLineIcon";

describe("HeadLineIcon", () => {
  test("Should return icon element based on prop value", () => {
    render(<HeadLineIcon name={"Business"}/>);
    let iconElement = screen.getByTestId("Business");
    expect(iconElement).toBeInTheDocument();

    render(<HeadLineIcon name={"Entertainment"}/>);
     iconElement = screen.getByTestId("Entertainment");
    expect(iconElement).toBeInTheDocument();

    render(<HeadLineIcon name={"Health"}/>);
     iconElement = screen.getByTestId("Health");
    expect(iconElement).toBeInTheDocument();

    render(<HeadLineIcon name={"Science"}/>);
     iconElement = screen.getByTestId("Science");
    expect(iconElement).toBeInTheDocument();

    render(<HeadLineIcon name={"Sports"}/>);
     iconElement = screen.getByTestId("Sports");
     expect(iconElement).toBeInTheDocument();

     render(<HeadLineIcon name={"Technology"}/>);
     iconElement = screen.getByTestId("Technology");
     expect(iconElement).toBeInTheDocument();

     render(<HeadLineIcon name={undefined}/>);
  });
});
