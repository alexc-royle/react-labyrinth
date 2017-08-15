import React from 'react';
import Row from './Row';

const RowList = ({
	rows
}) => (
	<div>
		{rows.map(row =>
			<Row
				key={row.id}
				{...row}
			/>
		)}
	</div>
)

export default RowList;