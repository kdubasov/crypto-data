import {configureStore} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import coinsFiltersSlice from "./slices/coinsFiltersSlice.ts";
import {coinsListApi} from "../api/coins.ts";
import {setupListeners} from "@reduxjs/toolkit/query";

export const store = configureStore({
	reducer : {
		coinsFilters: coinsFiltersSlice,
		//query reducer
		[coinsListApi.reducerPath]: coinsListApi.reducer,
	},
	// Adding the api middleware enables caching, invalidation, polling,
	// and other useful features of `rtk-query`.
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(coinsListApi.middleware),
})

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

//hooks
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
