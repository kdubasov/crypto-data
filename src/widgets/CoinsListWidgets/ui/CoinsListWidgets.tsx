import React from 'react';
import CoinsList from "../../../entities/CoinsList";
import CoinsSelectPerPage from "../../../features/CoinsSelectPerPage";
import CoinsPagination from "../../../features/CoinsPagination";

const CoinsListWidgets: React.FC = () => {
	return (
		<div className={'CoinsListWidgets'}>
			<CoinsSelectPerPage />
			<CoinsList />
			<CoinsPagination />
		</div>
	);
};

export default CoinsListWidgets;
