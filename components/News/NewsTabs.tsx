import { SuggestedTopics } from "@/constants/news";
import { Tab, Tabs } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";

const NewsTabs = () => {
  const router = useRouter();
  const currentTopic = (router.query.topic || 'All') as string;
  const [value, setValue] = useState(SuggestedTopics.indexOf(currentTopic));

  const handleChange = (event: React.SyntheticEvent, value: number) => {
    setValue(value);
    router.replace({
      query:
        SuggestedTopics[value] === "All"
          ? {}
          : { ...router.query, topic: SuggestedTopics[value] },
    });
  };
  return (
    <Tabs
      value={value}
      className="shadow-md"
      onChange={handleChange}
      aria-label="disabled tabs example"
      centered
    >
      {SuggestedTopics.map((topic) => (
        <Tab key={topic} label={topic} />
      ))}
    </Tabs>
  );
};

export default NewsTabs;
