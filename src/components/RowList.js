import React from 'react';
import Row from './Row';

const RowList = ({
	rows
}) => (
	<div className="rows">
		{rows.map(row =>
			<Row
				key={row.id}
				rowId={row.id}
			/>
		)}
	</div>
)

export default RowList;