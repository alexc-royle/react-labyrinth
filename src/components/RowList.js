import React from 'react';
import Row from './Row';

const RowList = ({
	rows
}) => {
	return rows.map(row =>
			<Row
				key={row.id}
				rowId={row.id}
			/>
		)
}
export default RowList;