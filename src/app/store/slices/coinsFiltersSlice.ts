import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ECurrency, EPerPage} from "../../../shared/types/coins.ts";

interface IInitial {
	page: number,
	currency: ECurrency,
	per_page: EPerPage,
}

const initialState: IInitial = {
	page: 1,
	currency: ECurrency.USD,
	per_page: EPerPage.DEF,
}

export const coinsFiltersSlice = createSlice({
	name:'coinsFilters',
	initialState,
	reducers:{
		setPage: (state, action: PayloadAction<number>) => {
			state.page = action.payload;
		},
		setCurrency: (state, action: PayloadAction<ECurrency>) => {
			state.currency = action.payload;
		},
		setPerPage: (state, action: PayloadAction<EPerPage>) => {
			state.per_page = action.payload;
		},
	},
})

export const { setPage, setCurrency, setPerPage } = coinsFiltersSlice.actions;
export default coinsFiltersSlice.reducer;
