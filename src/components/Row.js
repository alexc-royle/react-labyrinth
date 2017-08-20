import React, { Component } from 'react';
import SquareListContainer from '../containers/SquareListContainer';
import '../css/Row.css';

const Row = ({
	rowId
}) => (
	<div className="row">
		<SquareListContainer rowId={rowId}/>
		<div className="clearBoth"/>
	</div>
)

export default Row;