import React from 'react';
import PlayerInfo from './PlayerInfo';

const PlayerInfoList = ({
	players,
	currentPlayer
}) => {
	console.log(currentPlayer, players);
	return players.map(player =>
			<PlayerInfo
				key={player.id}
				{...player}
				currentPlayerId = {currentPlayer.id}
			/>
		)
}
export default PlayerInfoList;