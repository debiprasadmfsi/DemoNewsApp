import { TopHeadlines } from "@/mock/newsMock";
import { getServerSideProps } from "@/pages/index";
import { getSettings } from "@/pages/api/settings";
import axios from "axios";
import { GetServerSidePropsContext } from "next";
import { ParsedUrlQuery } from "querystring";
jest.mock("@/pages/api/settings");
jest.mock("axios");

describe("index page", () => {
  test('render correctly', () => {

  });
  test("should get news headlines and settings", async() => {
    (getSettings as jest.Mock).mockReturnValue({
      language: "en",
      country: "in",
    });
    (axios.get as jest.Mock).mockReturnValueOnce({
      data: TopHeadlines,
    });
    const context = {
      query: { topic: "test" } as ParsedUrlQuery,
    };
    const res = await getServerSideProps(context as GetServerSidePropsContext);
    expect(res).toEqual({
      props: {
        newsData: TopHeadlines,
        settings: {
          language: "en",
          country: "in",
        },
      },
    });
  });
});
