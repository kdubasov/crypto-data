import {useAppDispatch, useAppSelector} from "../../app/store/store.ts";
import {setCurrency, setPage, setPerPage} from "../../app/store/slices/coinsFiltersSlice.ts";
import {ECurrency, EPerPage} from "../types/coins.ts";

export const useCoinsFilters = () => {
	const dispatch = useAppDispatch();
	const data = useAppSelector(state => state.coinsFilters);

	return {
		page: data.page,
		currency: data.currency,
		per_page: data.per_page,
		setCurrency: (value: ECurrency) => dispatch(setCurrency(value)),
		setPerPage: (value: EPerPage) => dispatch(setPerPage(value)),
		setPage: (value: number) => dispatch(setPage(value)),
	}
}
