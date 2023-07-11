import {ELinks, ILinksListItem} from "../types/router.ts";
import HomePage from "../../pages/HomePage";

export const LINKS_LIST: ILinksListItem[] = [
	{
		path: ELinks.HOME,
		element: <HomePage />,
	}
];
