import React from 'react';
import Square from './Square';

const SquareList = ({
	squares
}) => (
	<div>
		{squares.map(square =>
			<Square
				key={square.id}
				{...square}
			/>
		)}
	</div>
)

export default SquareList;