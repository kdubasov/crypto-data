import React from "react";

export enum ELinks {
	HOME = "/"
}

export interface ILinksListItem {
	path: ELinks,
	element: React.ReactNode,
}
