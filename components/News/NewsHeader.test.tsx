import { render, screen } from "@testing-library/react";
import NewsHeader from "./NewsHeader";

jest.mock("./NewsSearch", () => () => {
    return <input type="text"/>;
});

describe('News Header', () => {

    test('render correctly', () => {
        render(<NewsHeader/>);
        const title = screen.getByText('News App');
        expect(title).toBeInTheDocument();

    });

});