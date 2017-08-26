import React from 'react';
import BoardButton from './BoardButton';

const BoardButtonList = ({
	items,
	orientation,
	type,
	onButtonClick
}) => {
	const boardButtons = [];
	for(var i = 0; i < items; i++) {
		const itemId = i;
		boardButtons.push(
			<BoardButton 
				key={orientation + itemId}
				show={ itemId%2 !== 0} 
				orientation={orientation}
				onButtonClick={() => onButtonClick(orientation, type, itemId)}
			/>
		)
	}
	return (
		<div className={'boardButtonList ' + type}>
			{boardButtons}
			<div className="clearBoth"/>
		</div>
	)
}

export default BoardButtonList;