import React from 'react';
import ItemListContainer from '../containers/ItemListContainer';
import '../css/Row.css';

const Row = ({
	rowId
}) => (
	<div className="row">
		<ItemListContainer rowId={rowId}/>
	</div>
)

export default Row;