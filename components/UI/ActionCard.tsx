import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Article } from "@/models/news";
import { CardActionArea, Chip } from "@mui/material";
import Link from "next/link";
import ArticleIcon from "@mui/icons-material/Article";

const ActionCard = (props: { data: Article }) => {
  return (
    <Box className="w-full m-2 mx-auto border-b-2 border-b-gray-200 flex">
      <Card className="w-[40%] p-2 shadow-none">
        <CardActionArea>
          <CardMedia component="img" height="140" image={props.data.image} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.data.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className="w-[60%] shadow-none">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {new Date(props.data.publishedAt).toDateString()}
          </Typography>
          <Typography variant="h5" component="div">
            {props.data.source.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {props.data.description}
          </Typography>
          <Typography variant="body2">
            {props.data.content}
            <br />
          </Typography>
        </CardContent>
        <Box className="w-full flex">
          <Link href={props.data.url} target="_blank" className="ml-auto m-2">
            <Chip
              className="cursor-pointer"
              icon={<ArticleIcon color="primary" />}
              label="Full Coverage"
              variant="outlined"
            />
          </Link>
        </Box>
      </Card>
    </Box>
  );
};
export default ActionCard;
