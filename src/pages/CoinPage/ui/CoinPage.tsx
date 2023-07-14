import React from 'react';
import {useGetCoinQuery} from "../../../app/api/coins.ts";
import {Link, useParams} from "react-router-dom";
import {Badge, Spinner} from "react-bootstrap";
import {ELinks} from "../../../shared/types/router.ts";

const CoinPage: React.FC = () => {

	const { id } = useParams();
	const { data, isLoading, error } = useGetCoinQuery(id as string);

	if (isLoading) return <Spinner />;
	if (error || !data) return <Badge bg={'danger'}>Error!</Badge>

	return (
		<div className={'CoinPage'}>

			<Link to={ELinks.HOME}>Go back</Link>

			<header>
				<img src={data.image.large} alt={data.name} />
				<div className="text">
					<Badge bg={"secondary"}>Mkt cap rank - #{data.market_cap_rank}</Badge>
					<h1><b>{data.name}</b> ({data.symbol?.toUpperCase()})</h1>
				</div>
			</header>
		</div>
	);
};

export default CoinPage;
