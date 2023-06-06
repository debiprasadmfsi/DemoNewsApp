import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { Fragment } from "react";
import Head from "next/head";
import HeadLineIcon from "../UI/HeadLineIcon";
import Weather from "../Weather/Weather";


const NewsTitle = () => {
  const router = useRouter();
  const newsTopic = router.query.topic as string;
  
  return (
    <Fragment>
      <Head>
        {newsTopic && <title>{newsTopic}</title>}
        {!newsTopic && <title>News Today</title>}
      </Head>
      <Box className="w-[60%] flex mx-auto mt-4 py-4">
        <Box className="w-5/6 mr-auto">
          <Box className="flex">
            <HeadLineIcon name={newsTopic} />
            <Typography variant="h4" component="div">
              {newsTopic ? newsTopic.toLocaleUpperCase() : "YOUR BRIEFING"}
            </Typography>
          </Box>
          <p className="text-slate-500 text-sm">{new Date().toDateString()}</p>
        </Box>
        <Weather/>
      </Box>
    </Fragment>
  );
};

export default NewsTitle;
