import React from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';
import { getItem, getCanInsertSpareSquare } from '../reducers';
import Square from '../components/Square';
import BoardButton from '../components/BoardButton';

class ItemContainer extends React.Component {
	componentDidMount() {
		//this.fetchData();

	}

	componentDidUpdate(prevProps) {}

	render() {
		let itemToDisplay;
		switch(this.props.item.type) {
			case "square":
				itemToDisplay = <Square {...this.props.item} />
				break;
			case "boardButton":
				const { insertSpareSquare, canInsert } = this.props;
				itemToDisplay = <BoardButton {...this.props.item} onButtonClick={insertSpareSquare} disabled={!canInsert}/>
				break;
			default:
				itemToDisplay = <div className='boardItem'/>;
				break;
		}
		return itemToDisplay;
	}
}


const mapStateToProps = (state, props) => {
	return {
		item: getItem(state.itemsById, props.itemId),
		canInsert: getCanInsertSpareSquare(state),
	}
};

ItemContainer = connect(
	mapStateToProps,
	actions
)(ItemContainer);

export default ItemContainer