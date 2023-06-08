import { TopHeadlines } from "@/mock/newsMock";
import Home, { getServerSideProps } from "@/pages/index";
import { getSettings } from "@/pages/api/settings";
import axios from "axios";
import { GetServerSidePropsContext } from "next";
import settingsMock from "@/mock/settingsMock";
import { ParsedUrlQuery } from "querystring";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "@/store/state";

jest.mock("@/pages/api/settings");
jest.mock("axios");
const mockHeaderComponent = jest.fn();
jest.mock("@/components/UI/Header", () => (props: any) => {
  mockHeaderComponent(props);
  return <div></div>;
});
const mockNewsHomeComponent = jest.fn();
jest.mock("@/components/News/NewsHome", () => () => {
  mockNewsHomeComponent()
  return <div></div>;
});

describe("index page", () => {
  test("render correctly", () => {
    render(
      <Provider store={store}>
        <Home newsData={TopHeadlines} settings={settingsMock} />
      </Provider>
    );

    expect(mockHeaderComponent).toHaveBeenCalled();
    expect(mockNewsHomeComponent).toHaveBeenCalled();
  });
  test("should get news headlines and settings", async () => {
    (getSettings as jest.Mock).mockReturnValue(settingsMock);
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
        settings: settingsMock,
      },
    });
  });

  test('Redirect to page not found when news headline api fails', async () => {
    (getSettings as jest.Mock).mockRejectedValue(new Error('error'));
    (axios.get as jest.Mock).mockRejectedValue(new Error('error'));
    const context = {
      query: {} as ParsedUrlQuery,
    };
    const res = await getServerSideProps(context as GetServerSidePropsContext);
    expect(res).toEqual({
      notFound: true,
    });

  })

});
