import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store/store.ts";

//css
import 'bootstrap/dist/css/bootstrap.min.css';
import "../shared/styles/index.css";
import {LINKS_LIST} from "../shared/constants/router.tsx";

const Providers: React.FC = () => {

	const router = createBrowserRouter(LINKS_LIST);

	return (
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	);
};

export default Providers;
