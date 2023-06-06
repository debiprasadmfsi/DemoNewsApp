import { Settings } from "@/models/settings";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
const initialState = {
  settings: {
    language: "en",
    country: "in",
  },
};
const settingsSlice = createSlice({
  name: "settingsData",
  initialState: initialState,
  reducers: {
    updateLanguage(state, actions: PayloadAction<string>) {
      state.settings.language = actions.payload;
    },
    updateCountry(state, actions: PayloadAction<string>) {
      state.settings.country = actions.payload;
    },
    updateSettings(state, actions: PayloadAction<Settings>) {
      state.settings = actions.payload;
    }
  },
});


export const {updateCountry, updateLanguage, updateSettings} = settingsSlice.actions;

export default settingsSlice.reducer;