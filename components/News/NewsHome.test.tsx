import { TopHeadlines } from "@/mock/newsMock";
import { useAppSelector } from "@/store/state";
import { render, screen } from "@testing-library/react";
import NewsHome from "./NewsHome";

jest.mock("@/store/state");

jest.mock("../UI/ActionCard", () => () => {
  return <div data-testid="news-card">News Details</div>;
});

jest.mock("./NewsTabs", () => () => {
    return <div data-testid="news-tab">News Tab</div>;
});
jest.mock("./NewsTitle", () => () => {
    return <div data-testid="news-title">News Title</div>;
});

describe("NewsHome", () => {
  test("renders correctly", async () => {
    (useAppSelector as jest.Mock).mockReturnValue(TopHeadlines.articles);
    render(<NewsHome />);
    const homePage = screen.getByTestId("news-home");
    expect(homePage).toBeInTheDocument();
    const newsItems = await screen.findAllByTestId("news-card");
    expect(newsItems.length).toBe(1);
  });
});
