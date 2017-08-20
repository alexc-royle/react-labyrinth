import React from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';
import { getSquaresForRow } from '../reducers';
import SquareList from '../components/SquareList';

class SquareListContainer extends React.Component {
	componentDidMount() {
		//this.fetchData();

	}

	componentDidUpdate(prevProps) {}

	render() {
		return (
			<SquareList squares={this.props.squares}/>
		);
	}
}


const mapStateToProps = (state, props) => {
	return {
		squares: getSquaresForRow(state, props.rowId),
	}
};

SquareListContainer = connect(
	mapStateToProps,
	actions
)(SquareListContainer);

export default SquareListContainer