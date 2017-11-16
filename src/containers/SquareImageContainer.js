import React from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';
import { getCardByItemId } from '../reducers';
import SquareImage from '../components/SquareImage';

class SquareImageContainer extends React.Component {
	componentDidMount() {
		//this.fetchData();

	}

	componentDidUpdate(prevProps) {}

	render() {
		if(this.props.image) {
			return (
				<SquareImage
					{...this.props.image}
				/>
			);
		}
		return null;
	}
}


const mapStateToProps = (state, props) => {
	return {
		image: getCardByItemId(state, props.squareId),
	}
};

SquareImageContainer = connect(
	mapStateToProps,
	actions
)(SquareImageContainer);

export default SquareImageContainer