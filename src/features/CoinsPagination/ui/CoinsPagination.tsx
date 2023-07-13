import React from 'react';
import {Button, ButtonGroup} from "react-bootstrap";
import {useCoinsFilters} from "../../../shared/hooks/useCoinsFilters.ts";

const CoinsPagination: React.FC = () => {

	const { page, setPage } = useCoinsFilters();

	return (
		<ButtonGroup className={"CoinsPagination"}>
			<Button
				onClick={() => setPage(page - 1)}
				disabled={page <= 1}
			>
				Prev page
			</Button>

			<Button disabled>{page}</Button>

			<Button onClick={() => setPage(page + 1)}>
				Next page
			</Button>
		</ButtonGroup>
	);
};

export default CoinsPagination;
