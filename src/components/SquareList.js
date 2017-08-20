import React from 'react';
import SquareContainer from '../containers/SquareContainer';

const SquareList = ({
	squares
}) => (
	<div className="squares">
		{squares.map(square =>
			<SquareContainer
				key={square.id}
				squareId={square.id}
			/>
		)}
	</div>
)

export default SquareList;