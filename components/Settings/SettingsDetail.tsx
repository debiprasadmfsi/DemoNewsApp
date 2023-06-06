import {
  Box,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import AppSelect from "../UI/AppSelect";
import { Countries, Languages} from "@/constants/settings";
import { useEffect } from "react";
import { useAppSelector } from "@/store/state";
import { useDispatch } from "react-redux";
import {
  updateCountry,
  updateLanguage,
} from "@/store/settingsSlice";
import axios from "axios";

const SettingsDetails = () => {
  const appSettings = useAppSelector((state) => state.settings.settings);
  const dispatch = useDispatch();

  useEffect(() => {
    const updateSettings = async () => {
      try {
        const settings = await axios.post("/api/settings", appSettings);
      } catch (err) {
        console.log(err);
      }
    }
    updateSettings();

  }, [appSettings])

  const setCountryHandler = (country: string) => {
    dispatch(updateCountry(country));
  };

  const setLanguageHandler = (language: string) => {
    dispatch(updateLanguage(language));
  };

  return (
    <Box className="w-full flex h-screen p-4 justify-center">
      <Card className="w-[50%] h-3/6">
        <CardContent>
          <List className="mt-4">
            <ListItem className="border-b-2 p-5">
              <h1 className="text-3xl">General</h1>
            </ListItem>
            <ListItem className="border-b-2 p-5">
              <ListItemText primary="Language" />
              <AppSelect
                list={Languages}
                selected={appSettings.language}
                selectionChange={setLanguageHandler}
              />
            </ListItem>
            <ListItem className="border-b-2 p-5">
              <ListItemText primary="Country" />
              <AppSelect
                list={Countries}
                selected={appSettings.country}
                selectionChange={setCountryHandler}
              />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SettingsDetails;
