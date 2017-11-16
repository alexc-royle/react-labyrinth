import React from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';
import { getCurrentPlayer, getPlayersInOrder } from '../reducers';
import PlayerInfoList from '../components/PlayerInfoList';

class PlayerInfoListContainer extends React.Component {
	componentDidMount() {
		//this.fetchData();

	}

	componentDidUpdate(prevProps) {}

	render() {
		const {currentPlayer, players} = this.props;
		if(players) {
			return <PlayerInfoList players={players} currentPlayer={currentPlayer}/>
		}
		return null;
	}
}


const mapStateToProps = (state, props) => {
	return {
		currentPlayer: getCurrentPlayer(state),
		players: getPlayersInOrder(state)
	}
};

PlayerInfoListContainer = connect(
	mapStateToProps,
	actions
)(PlayerInfoListContainer);

export default PlayerInfoListContainer