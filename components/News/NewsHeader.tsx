import { Avatar, IconButton, Typography } from "@mui/material";
import { Fragment } from "react";
import NewspaperIcon from '@mui/icons-material/Newspaper';
import SettingsIcon from '@mui/icons-material/Settings';
import Link from "next/link";
import NewsSearch from "./NewsSearch";

const NewsHeader = () => {
  return (
    <Fragment>
      <Typography variant="h6" color="black" component="div">
        <NewspaperIcon color="primary" sx={{ fontSize: 30 }} />
        <span className="mx-2">News App</span>
      </Typography>
      <NewsSearch />
      <Link href={"settings"}>
        <IconButton>
          <SettingsIcon className="text-3xl" />
        </IconButton>
      </Link>

      {/* <Avatar alt="Debiprasad" /> */}
    </Fragment>
  );
};

export default NewsHeader;
