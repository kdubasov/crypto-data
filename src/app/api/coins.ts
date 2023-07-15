import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {API_COINS, API_URL} from "../../shared/constants/api.ts";
import {ICoin, ICoinPage} from "../../shared/types/coins.ts";


// Define a service using a base URL and expected endpoints
export const coinsListApi = createApi({
	reducerPath: 'coinsListApi',
	baseQuery: fetchBaseQuery({ baseUrl: API_URL + API_COINS }),
	endpoints: (builder) => ({
		getCoinList: builder.query<ICoin[], string>({
			query: (query) => query,
		}),
		getCoin: builder.query<ICoinPage, string>({
			query: (coinId) => coinId,
		})
	}),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
	useGetCoinListQuery,
	useGetCoinQuery
} = coinsListApi;
