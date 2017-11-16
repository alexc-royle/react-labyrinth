import React from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';
import { getCurrentBoard, getPlayerFormCompleted } from '../reducers';
import Board from '../components/Board';

class BoardContainer extends React.Component {
	componentDidMount() {}

	componentDidUpdate(prevProps) {}

	render() {
		if(this.props.board) {
			return (
				<Board id={this.props.board.id}/>
			);
		} else {
			return <p>Loading...</p>; 
		}
		
	}
}


const mapStateToProps = (state, props) => {
	return {
		board: getCurrentBoard(state),
	}
};

BoardContainer = connect(
	mapStateToProps,
	actions
)(BoardContainer);

export default BoardContainer