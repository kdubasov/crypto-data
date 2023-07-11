import React from 'react';
import Form from 'react-bootstrap/Form';
import {useCoinsFilters} from "../../../shared/hooks/useCoinsFilters.ts";
import {ECurrency} from "../../../shared/types/coins.ts";

const CurrencySelect: React.FC = () => {

	const { currency, setCurrency } = useCoinsFilters();

	return (
		<Form.Select
			className={'CurrencySelect'}
			value={currency.toUpperCase()}
			onChange={e => setCurrency(e.target.value as ECurrency)}
		>
			<option>{currency.toUpperCase()}</option>
			{
				Object.values(ECurrency)
					.filter(curr => curr !== currency)
					.map(curr => (
					<option key={curr} value={curr}>{curr.toUpperCase()}</option>
				))
			}
		</Form.Select>
	);
};

export default CurrencySelect;
