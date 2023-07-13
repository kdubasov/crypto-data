import React from 'react';
import {useCoinsFilters} from "../../../shared/hooks/useCoinsFilters.ts";
import {useGetCoinListQuery} from "../../../app/api/coins.ts";
import {COINS_LIST} from "../../../shared/constants/api.ts";
import CoinsListItem from "../../CoinsListItem";
import {Table} from "react-bootstrap";

const CoinsList: React.FC = () => {

	const { currency, page, per_page } = useCoinsFilters();
	const { data } = useGetCoinListQuery(COINS_LIST(currency, per_page, page));

	if (!data) return;

	return (
		<Table striped bordered hover responsive className={'CoinsList'}>
			<thead>
				<tr>
					<th>#</th>
					<th>Coin</th>
					<th>Price</th>
					<th>1h</th>
					<th>24h</th>
					<th>7d</th>
					<th>Mkt Cap</th>
					<th>Last 7 Days</th>
				</tr>
			</thead>
			<tbody>
				{data.map(coin => <CoinsListItem key={coin.id} data={coin} />)}
			</tbody>
		</Table>
	);
};

export default CoinsList;
