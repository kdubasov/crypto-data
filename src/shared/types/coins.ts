export enum ECurrency {
	USD = 'usd',
	EUR = 'eur',
	JPY = 'jpy',
	RUB = 'rub',
	IDR = 'idr',
	TWD = 'twd',
	CNY = 'cny',
	KRW = 'krw',
	TRY = 'try',
	GBP = 'gbp',
}

export enum EPerPage {
	SM = '25',
	DEF = '50',
	LG = '100',
	XXL = '250',
}

export interface ICoin {
	id: string,
	symbol: string,
	name: string,
	image: string,
	current_price: number,
	market_cap: number,
	market_cap_rank: number,
	fully_diluted_valuation: number,
	total_volume: number,
	high_24h: number,
	low_24h: number,
	price_change_24: number,
	price_change_percentage_1h_in_currency: number,
	price_change_percentage_7d_in_currency: number,
	price_change_percentage_24h: number,
	price_change_percentage_24h_in_currency: number,
	market_cap_change_24h: number,
	market_cap_change_percentage_24h: number,
	circulating_supply: number,
	total_supply: number,
	max_supply: number,
	ath: number,
	ath_change_percentage: number,
	ath_date: string,
	atl: number,
	atl_change_percentage: number,
	atl_date: string,
	last_updated: string,
	sparkline_in_7d: ISparkline
}

export interface ISparkline {
	price: number[]
}
