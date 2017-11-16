import React from 'react';
import BoardContainer from '../containers/BoardContainer';
import SpareSquareContainer from '../containers/SpareSquareContainer';
import DirectionArrowContainer from '../containers/DirectionArrowContainer';
import EndTurnContainer from '../containers/EndTurnContainer';
import PlayerInfoListContainer from '../containers/PlayerInfoListContainer';

const GameContainer = () => (
	<div className="gameContainer">
		<div className="playerList">
			<h3>Players:</h3>
			<PlayerInfoListContainer/>
		</div>
		<BoardContainer/>
		<SpareSquareContainer/>
		<DirectionArrowContainer/>
		<EndTurnContainer/>
	</div>
)

export default GameContainer;