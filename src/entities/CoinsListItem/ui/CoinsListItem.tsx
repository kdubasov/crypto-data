import React, {ReactElement} from 'react';
import {ICoin} from "../../../shared/types/coins.ts";
import {useCoinsFilters} from "../../../shared/hooks/useCoinsFilters.ts";
import SmallGraph from "../../../shared/ui/SmallGraph";
import {EBsColors} from "../../../shared/types/colors.ts";

interface ICoinsListItem {
	data: ICoin,
}

const CoinsListItem: React.FC<ICoinsListItem> = ({ data }) => {

	const { currency } = useCoinsFilters();

	const getColorText = (value: number | string, currency?: string): ReactElement => {
		if (!value) return <> ? </>;
		const color = Number(value) > 0 ? EBsColors.GREEN : EBsColors.RED;
		return <span color={color} style={{ color: color }}>{value}{currency}</span>
	}

	return (
		<tr className={'CoinsListItem'}>
			<td>#{data.market_cap_rank}</td>
			<td className={"name"}>
				<img src={data.image} alt={data.symbol}/>
				<span><b>{data.name}</b> ({data.symbol?.toUpperCase()})</span>
			</td>
			<td>{currency?.toUpperCase()} {data.current_price?.toLocaleString()}</td>
			<td>{getColorText(data.price_change_percentage_1h_in_currency?.toFixed(2), '%')}</td>
			<td>{getColorText(data.price_change_percentage_24h_in_currency?.toFixed(2), '%')}</td>
			<td>{getColorText(data.price_change_percentage_7d_in_currency?.toFixed(2), '%')}</td>
			<td>
				{currency?.toUpperCase()}
				<span className={"mx-2"}>{data.market_cap?.toLocaleString()}</span>
				({getColorText(data.market_cap_change_percentage_24h?.toFixed(2), '%')})
			</td>
			<td>
				<SmallGraph data={data.sparkline_in_7d} />
			</td>
		</tr>
	);
};

export default CoinsListItem;
