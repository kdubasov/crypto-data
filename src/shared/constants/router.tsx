 import {ELinks, ILinksListItem} from "../types/router.ts";
import HomePage from "../../pages/HomePage";
 import CoinPage from "../../pages/CoinPage";

export const LINKS_LIST: ILinksListItem[] = [
	{
		path: ELinks.HOME,
		element: <HomePage />,
	},
	{
		path: ELinks.COIN,
		element: <CoinPage />,
	},
];

export const COIN_PAGE_LINK = (coinId:string) => `/coin/${coinId}`;
