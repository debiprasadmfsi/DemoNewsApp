import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from './settingsSlice';
import newsReducer from './newsSlice';
import cacheSlice from './searchCacheSlice';

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const store = configureStore({
  reducer: { news: newsReducer, settings: settingsReducer, searchCache: cacheSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
