import NewsHeader from "@/components/News/NewsHeader";
import NewsHome from "@/components/News/NewsHome";
import Header from "@/components/UI/Header";
import { TOP_HEAD_LINES } from "@/constants/endpoints";
import { AppResponse } from "@/models/app";
import { HeadLinesResponse } from "@/models/news";
import { Settings } from "@/models/settings";
import { updateSettings } from "@/store/settingsSlice";
import { useAppDispatch } from "@/store/state";
import { parameterizedString } from "@/utils";
import axios from "axios";
import type { GetServerSideProps } from "next";
import { Fragment, useEffect } from "react";
import { getSettings } from "./api/settings";
import { addNews } from "@/store/newsSlice";

export default function Home(props: AppResponse) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(addNews(props.newsData.articles));
    dispatch(updateSettings(props.settings));
  }, [dispatch, props]);


  return (
    <Fragment>
      <Header>
        <NewsHeader />
      </Header>
      <NewsHome />
    </Fragment>
  );
}

export const getServerSideProps: GetServerSideProps<AppResponse> = async (
  ctx
) => {
  const topic = (ctx.query.topic as string) || "general";
  try {
    const settings = (await getSettings()) as Settings;
    const url = parameterizedString(
      TOP_HEAD_LINES,
      topic.toLowerCase(),
      settings.language,
      settings.country
    );
    const newsData = await axios.get<HeadLinesResponse>(url);
    return {
      props: { newsData: newsData.data, settings },
    };
  } catch (err) {
    
    return {
      notFound: true,
    };
  }
};
