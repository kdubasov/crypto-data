import React from 'react';
import CoinsList from "../../../entities/CoinsList";
import CoinsSelectPerPage from "../../../features/CoinsSelectPerPage";

const CoinsListWidgets: React.FC = () => {
	return (
		<div className={'CoinsListWidgets'}>
			<CoinsSelectPerPage />
			<CoinsList />
		</div>
	);
};

export default CoinsListWidgets;
