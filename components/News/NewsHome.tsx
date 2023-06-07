import ActionCard from "../UI/ActionCard";
import { v4 as uuidv4 } from "uuid";
import { useAppSelector } from "@/store/state";
import NewsTitle from "./NewsTitle";
import NewsTabs from "./NewsTabs";

const NewsHome = () => {
  const articles = useAppSelector((state) => state.news.articles);
  return (
    <div className="w-full">
      <NewsTabs />
      <div className="w-full overflow-y-auto">
        <NewsTitle />
        <div className="justify-center  h-[96vh]">
          <div className="w-[60%] mx-auto rounded-md shadow-lg p-2">
            {articles &&
              articles.map((article, i) => (
                <ActionCard key={uuidv4()} data={article} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsHome;
