import React, { Component } from 'react';
import BoardSquareList from '../containers/BoardSquareList';
//import './Column.css';

const Column = ({
	id
}) => (
	<BoardSquareList columnId={id}/>
)

export default Column;