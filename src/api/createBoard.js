import { v4 } from 'node-uuid';
import createRows from './createRows';
import { createSingleSquare } from './createSquare';
import { board } from './baseData';

const createBoard = (squareList, cardList) => ({
	id: v4(), 
	rows: createRows(board, squareList, cardList), 
	spare: createSingleSquare(squareList.pop(), cardList)
});

export default createBoard;