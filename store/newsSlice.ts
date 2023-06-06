import { Article } from "@/models/news";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
const initialState: {articles: Article[]} = {articles: []}
const newsSlice = createSlice({
    name: 'newsData',
    initialState: initialState,
    reducers: {
        addNews: (state, actions: PayloadAction<Article[]>) => {
            return Object.assign({}, state, { articles: actions.payload } )
        }
    }
});

export const {addNews} = newsSlice.actions;

export default newsSlice.reducer;