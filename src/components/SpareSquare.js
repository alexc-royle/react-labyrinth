import React from 'react';
import Square from './Square';
import RotateSpareSquareButton from './RotateSpareSquareButton';

const SpareSquare = ({
	square,
	onButtonClick
}) => (
	<div className="spareSquareHolder">
		<div className="spareSquare">
			<Square {...square}/>
		</div>
		<RotateSpareSquareButton onButtonClick={() => onButtonClick()}/>
		</div>	
);
export default SpareSquare;