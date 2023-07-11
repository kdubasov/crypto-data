import React from 'react';
import CoinsListWidgets from "../../../widgets/CoinsListWidgets";
import CurrencySelect from "../../../features/CurrencySelect";

const HomePage: React.FC = () => {

	return (
		<div className={'HomePage'}>
			<CurrencySelect />
			<CoinsListWidgets />
		</div>
	);
};

export default HomePage;
