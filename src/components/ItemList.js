import React from 'react';
import ItemContainer from '../containers/ItemContainer';

const ItemList = ({
	items
}) => {
	return items.map(item =>
		<ItemContainer
			key={item.id}
			itemId={item.id}
		/>
	)
}
export default ItemList;