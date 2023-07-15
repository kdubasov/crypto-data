import {ECurrency, EPerPage} from "../types/coins.ts";

export const API_URL = 'https://api.coingecko.com/api/v3/';
export const API_COINS = 'coins';

export const COINS_LIST = (currency:ECurrency, per_page:EPerPage, page:number) => {
	return `/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${per_page}&page=${page}&sparkline=true&price_change_percentage=1h%2C24h%2C7d&locale=en&sparkline=true`;
}
