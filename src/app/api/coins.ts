import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {API_URL} from "../../shared/constants/api.ts";
import {ICoin} from "../../shared/types/coins.ts";


// Define a service using a base URL and expected endpoints
export const coinsListApi = createApi({
	reducerPath: 'coinsListApi',
	baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
	endpoints: (builder) => ({
		getCoinList: builder.query<ICoin[], string>({
			query: (query) => query,
		}),
	}),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCoinListQuery } = coinsListApi
