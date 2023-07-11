import React from 'react';
import {ICoin} from "../../../shared/types/coins.ts";
import {useCoinsFilters} from "../../../shared/hooks/useCoinsFilters.ts";

interface ICoinsListItem {
	data: ICoin,
}

const CoinsListItem: React.FC<ICoinsListItem> = ({ data }) => {

	const { currency } = useCoinsFilters();

	return (
		<tr className={'CoinsListItem'}>
			<td>#{data.market_cap_rank}</td>
			<td className={"name"}>
				<img src={data.image} alt={data.symbol}/>
				<span><b>{data.name}</b> ({data.symbol?.toUpperCase()})</span>
			</td>
			<td>{currency?.toUpperCase()} {data.current_price?.toLocaleString()}</td>
			<td>{data.price_change_percentage_1h_in_currency?.toFixed(2)}%</td>
			<td>{data.price_change_percentage_24h_in_currency?.toFixed(2)}%</td>
			<td>{data.price_change_percentage_7d_in_currency?.toFixed(2)}%</td>
			<td>
				{currency?.toUpperCase()}
				<span className={"mx-2"}>{data.market_cap?.toLocaleString()}</span>
				({data.market_cap_change_percentage_24h?.toFixed(2)}%)
			</td>
		</tr>
	);
};

export default CoinsListItem;
