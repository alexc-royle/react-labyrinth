import React from 'react';

const PlayerInfo = ({
	id,
	colour,
	name,
	currentPlayerId
}) => {
	const extraClasses = (id === currentPlayerId) ? 'currentPlayer' : '';
	
	return (
		<div id={id} className={'playerInfo ' + extraClasses}>
			Name: <span className='playerName'>{name}</span>
		</div>
	);
}
export default PlayerInfo;