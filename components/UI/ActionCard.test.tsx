import { render, screen } from "@testing-library/react";
import ActionCard from "./ActionCard";
import { TopHeadlines } from "@/mock/newsMock";

describe('ActionCard', () => {

    test('render a card component based on props', () => {
        const {title, description} = TopHeadlines.articles[0]
        render(<ActionCard data={TopHeadlines.articles[0]}/>);
        const imgElemet = screen.getByRole('img');
        const titleElemet = screen.getByText(title);
        const descriptionElemet = screen.getByText(description);

        expect(imgElemet).toBeInTheDocument();
        expect(titleElemet).toBeInTheDocument();
        expect(descriptionElemet).toBeInTheDocument();
    })

});