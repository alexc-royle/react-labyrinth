import React from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';
import { getSquare } from '../reducers';
import Square from '../components/Square';

class SquareContainer extends React.Component {
	componentDidMount() {
		//this.fetchData();

	}

	componentDidUpdate(prevProps) {}

	render() {
		const orientation = this.props.square.orientation
		return (
			<Square
				orientationClasses={
					(orientation.up ? 'up ' : '') +
					(orientation.right ? 'right ' : '') +
					(orientation.down ? 'down ' : '') +
					(orientation.left ? 'left' : '')
				}
				{...this.props.square}
			/>
		);
	}
}


const mapStateToProps = (state, props) => {
	return {
		square: getSquare(state.squaresById, props.squareId),
	}
};

SquareContainer = connect(
	mapStateToProps,
	actions
)(SquareContainer);

export default SquareContainer