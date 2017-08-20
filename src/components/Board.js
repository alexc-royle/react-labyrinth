import React, { Component } from 'react';
import RowListContainer from '../containers/RowListContainer';
import '../css/Board.css';
const Board = ({
	id
}) => (
		<div className='board'>
			<RowListContainer boardId={id}/>
		</div>
);
export default Board;