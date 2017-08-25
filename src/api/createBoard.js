import { v4 } from 'node-uuid';
import createRows from './createRows';
import { createSingleSquare } from './createSquare';
import { board } from './baseData';

const createBoard = (squareList) => ({
	id: v4(), 
	rows: createRows(board, squareList), 
	spare: createSingleSquare(squareList.pop())
});

export default createBoard;