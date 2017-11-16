import React from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';
import { getSpareSquare } from '../reducers';
import SpareSquare from '../components/SpareSquare';

class SpareSquareContainer extends React.Component {

	render() {
		if(this.props.square) {
			const { rotateSpareSquare } = this.props;
			return (
				<SpareSquare square={this.props.square} onButtonClick={rotateSpareSquare}/>
			);
		} else {
			return <span/>; 
		}
		
	}
}

const mapStateToProps = (state, props) => {
	return {
		square: getSpareSquare(state)
	}
};

SpareSquareContainer = connect(
	mapStateToProps,
	actions
)(SpareSquareContainer);

export default SpareSquareContainer