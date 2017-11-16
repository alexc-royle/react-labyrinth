import React from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';
import { getItemsForRow } from '../reducers';
import ItemList from '../components/ItemList';

class ItemListContainer extends React.Component {
	componentDidMount() {
		//this.fetchData();

	}

	componentDidUpdate(prevProps) {}

	render() {
		return (
			<ItemList items={this.props.items}/>
		);
	}
}


const mapStateToProps = (state, props) => {
	return {
		items: getItemsForRow(state, props.rowId),
	}
};

ItemListContainer = connect(
	mapStateToProps,
	actions
)(ItemListContainer);

export default ItemListContainer