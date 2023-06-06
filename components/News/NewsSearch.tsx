import {
  Autocomplete,
  InputAdornment,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { NEWS_SEARCH, TOP_HEAD_LINES } from "@/constants/endpoints";
import { Article, HeadLinesResponse } from "@/models/news";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { parameterizedString } from "@/utils";
import { useAppSelector } from "@/store/state";
import { addCache } from "@/store/searchCacheSlice";
import { addNews } from "@/store/newsSlice";

const NewsSearch = () => {
  const router = useRouter();
  const currentTopic = (router.query.topic as string) || "general";
  const [searchText, setSearchText] = useState<string>("");
  const [searchTopic, setSearchTopic] = useState<Article[]>([]);
  const selectedCountry = useAppSelector((state) => state.settings.settings.country);
  const selectedLanguage = useAppSelector((state) => state.settings.settings.language);
  const searchCache = useAppSelector((state) => state.searchCache.cache);
  const dispatch = useDispatch();

  const getSuggestedTopicHandler = useCallback(async (searchQuery: string) => {
    if(searchCache[searchQuery]) {
        setSearchTopic(searchCache[searchQuery])
    } else {
      try {
        const url = parameterizedString(NEWS_SEARCH.replace('[%query%]', searchQuery), currentTopic.toLowerCase(), selectedLanguage, selectedCountry);
        const resp = await axios.get<HeadLinesResponse>(url);
        setSearchTopic(resp.data.articles);
        dispatch(addCache({name: searchQuery, data: resp.data.articles}));
      } catch(err) {
        console.log(err);
      }
    }
  }, [currentTopic, dispatch, searchCache, selectedCountry, selectedLanguage]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchText) {
        getSuggestedTopicHandler(searchText);
      } else {
        setSearchTopic([]);
      }
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [getSuggestedTopicHandler, searchText]);

  const autoCompleteChangeHandler = async ( article: Article) => {
    if(article) {
      dispatch(addNews([article]));
    } else {
      const url = parameterizedString(TOP_HEAD_LINES, currentTopic, selectedLanguage, selectedCountry);
      const newsData =  await axios.get<HeadLinesResponse>(url);
      dispatch(addNews(newsData.data.articles));
      setSearchTopic([]);
    }
  }

  return (
    <div className="w-[50%] mx-auto">
      <Autocomplete
        value={searchText}
        id="free-solo-demo"
        freeSolo
        onChange={(event, newValue) => {
          const searchArticle = newValue as Article;
          autoCompleteChangeHandler(searchArticle);
        }}
        placeholder="Search for author, title & source"
        options={searchTopic}
        getOptionLabel={(option) => {
          if (typeof option === 'string') {
            return option;
          }
          
          return option.title;
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Search for author, title & source"
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <>
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                  {params.InputProps.startAdornment}
                </>
              )
            }}
          />
        )}
      />
    </div>
  );
};


export default NewsSearch;
