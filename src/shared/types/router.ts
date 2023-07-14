import React from "react";

export enum ELinks {
	HOME = "/",
	COIN = "/coin/:id"
}

export interface ILinksListItem {
	path: ELinks,
	element: React.ReactNode,
}
