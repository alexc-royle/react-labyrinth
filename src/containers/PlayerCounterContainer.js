import React from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';
import { getPlayersByItemId } from '../reducers';
import PlayerCounterList from '../components/PlayerCounterList';

class PlayerCounterContainer extends React.Component {
	componentDidMount() {
		//this.fetchData();

	}

	componentDidUpdate(prevProps) {}

	render() {
		if(this.props.players) {
			return (
				<PlayerCounterList
					players={this.props.players}
				/>
			);
		} else {
			return (<div></div>);
		}
		
	}
}


const mapStateToProps = (state, props) => {
	return {
		players: getPlayersByItemId(state, props.squareId),
	}
};

PlayerCounterContainer = connect(
	mapStateToProps,
	actions
)(PlayerCounterContainer);

export default PlayerCounterContainer