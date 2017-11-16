import React from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';
import { getCurrentBoard, getCanMoveCounter} from '../reducers';
import Button from '../components/Button';

class DirectionArrowContainer extends React.Component {
	componentDidMount() {
		//this.fetchData();

	}

	componentDidUpdate(prevProps) {}

	render() {
		if(this.props.board) {
			const { moveCurrentPlayer, canMove } = this.props;
			return (
				<div className="arrowsContainer">
	                	<Button onClick={() => moveCurrentPlayer('up')} displayText={'Up'} classNames={'directionKey up'} glyphIcon={'glyphicon-circle-arrow-up'} disabled={!canMove}/>
	                	<Button onClick={() => moveCurrentPlayer('down')} displayText={'Down'} classNames={'directionKey down'} glyphIcon={'glyphicon-circle-arrow-down'} disabled={!canMove}/>
	                	<Button onClick={() => moveCurrentPlayer('left')} displayText={'Left'} classNames={'directionKey left'} glyphIcon={'glyphicon-circle-arrow-left'} disabled={!canMove}/>
	                	<Button onClick={() => moveCurrentPlayer('right')} displayText={'Right'} classNames={'directionKey right'} glyphIcon={'glyphicon-circle-arrow-right'} disabled={!canMove}/>
	                </div>
			);
		} else return null;
		
	}
}


const mapStateToProps = (state, props) => {
	return {
		board: getCurrentBoard(state),
		canMove: getCanMoveCounter(state),
	}
};

DirectionArrowContainer = connect(
	mapStateToProps,
	actions
)(DirectionArrowContainer);

export default DirectionArrowContainer