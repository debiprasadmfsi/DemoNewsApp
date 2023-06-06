import { Article } from "@/models/news";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: { cache: { [key: string]: Article[] } } = { cache: {} };
const searchCacheSlice = createSlice({
  name: "newsData",
  initialState: initialState,
  reducers: {
    addCache: (
      state,
      actions: PayloadAction<{ name: string; data: Article[] }>
    ) => {
      const key = actions.payload.name;
      const value = actions.payload.data;
      state.cache[key] = value;
    },
  },
});

export const { addCache } = searchCacheSlice.actions;

export default searchCacheSlice.reducer;
