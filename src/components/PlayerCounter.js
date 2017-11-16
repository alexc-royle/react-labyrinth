import React from 'react';
import '../css/PlayerCounter.css';

const PlayerCounter = ({
	player
}) => {	
	return (
		<div className={'playerCounter '} style={{backgroundColor: player.colour}}></div>
	);
}
export default PlayerCounter;