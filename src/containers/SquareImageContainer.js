import React from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';
import { getCard } from '../reducers';
import SquareImage from '../components/SquareImage';

class SquareImageContainer extends React.Component {
	componentDidMount() {
		//this.fetchData();

	}

	componentDidUpdate(prevProps) {}

	render() {
		return (
			<SquareImage
				{...this.props.image}
			/>
		);
	}
}


const mapStateToProps = (state, props) => {
	return {
		image: getCard(state.cardsById, props.imageId),
	}
};

SquareImageContainer = connect(
	mapStateToProps,
	actions
)(SquareImageContainer);

export default SquareImageContainer