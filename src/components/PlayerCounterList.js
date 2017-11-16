import React from 'react';
import PlayerCounter from './PlayerCounter';

const PlayerCounterList = ({
	players
}) => {
	if(players) {
		return (
			<div className={'counterHolder ' + players.length + '_counters'}>
				{players.map(player =>
					<PlayerCounter
						key={player.id}
						player={player}
					/>
				)}
			</div>
		)
	} else {
		return (<div className="counterHolder"></div>);
	}
	
}


export default PlayerCounterList;