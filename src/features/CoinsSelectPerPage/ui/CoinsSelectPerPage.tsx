import React from 'react';
import Form from 'react-bootstrap/Form';
import {EPerPage} from "../../../shared/types/coins.ts";
import {useCoinsFilters} from "../../../shared/hooks/useCoinsFilters.ts";
import {Badge} from "react-bootstrap";

const CoinsSelectPerPage: React.FC = () => {

	const { per_page, setPerPage } = useCoinsFilters();

	return (
		<div className={'CoinsSelectPerPage'}>
			<Badge>Coins per page:</Badge>

			<Form.Select
				value={per_page}
				onChange={e => setPerPage(e.target.value as EPerPage)}
			>
				<option>{per_page}</option>
				{
					Object.values(EPerPage)
						.filter(elem => elem !== per_page)
						.map(elem => (
							<option key={elem} value={elem}>{elem}</option>
						))
				}
			</Form.Select>
		</div>
	);
};

export default CoinsSelectPerPage;
