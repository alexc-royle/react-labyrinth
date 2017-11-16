import React from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';
import { getCurrentBoard } from '../reducers';
import Button from '../components/Button';

class EndturnContainer extends React.Component {
	componentDidMount() {
		//this.fetchData();

	}

	componentDidUpdate(prevProps) {}

	render() {
		if(this.props.board) {
			const { endCurrentTurn } = this.props;
			return (
				<div className="endTurnContainer">
	                	<Button onClick={() => endCurrentTurn()} displayText={'End Turn'} classNames={'endTurn'} glyphIcon={'glyphicon-thumbs-up'}/>
	            </div>
			);
		} else return null;
		
	}
}


const mapStateToProps = (state, props) => {
	return {
		board: getCurrentBoard(state),
	}
};

EndturnContainer = connect(
	mapStateToProps,
	actions
)(EndturnContainer);

export default EndturnContainer