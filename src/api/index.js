import { squareData } from './baseData';
import createBoard from './createBoard';
import shuffle from '../constants/shuffleArray';

let boards = {};

const getBoard = boardId => boards[boardId];

export const fetchNewBoard = () => new Promise(
	resolve => {
		const squareList = shuffle(squareData);
		const newBoard = createBoard(squareList);
		boards = {...boards, [newBoard.id]: newBoard};
		resolve(newBoard)
	}
);
const insertSpareSquareIntoRow = (board, orientation, itemNumber) => {
	let squares = [...board.rows[itemNumber].squares];
	let currentSpareSquare = board.spare;
	let newSpareSquare;
	switch(orientation) {
		case "left":
			newSpareSquare = squares.shift();
			squares.push(currentSpareSquare);
			break;
		case "right":
			newSpareSquare = squares.pop();
			squares.unshift(currentSpareSquare);
			break;
		default:
			break;
	}
	board.rows[itemNumber].squares = squares;
	board.spare = newSpareSquare;
	return board;
}
const insertSpareSquareIntoColumn = (board, orientation, itemNumber) => {
	let squares = board.rows.map(row => row.squares[itemNumber]);
	let currentSpareSquare = board.spare;
	let newSpareSquare;
	switch(orientation) {
		case "up":
			newSpareSquare = squares.shift();
			squares.push(currentSpareSquare);
			break;
		case "down":
			newSpareSquare = squares.pop();
			squares.unshift(currentSpareSquare);
			break;
		default:
			break;
	}
	let rowNum = 0;
	for(let square of squares) {
		board.rows[rowNum].squares.splice(itemNumber, 1, square);
		rowNum++;
	}
	board.spare = newSpareSquare;
	return board;
}
export const insertSpareSquare = (boardId, orientation, itemType, itemNumber) => new Promise(
	resolve => {
		let board = getBoard(boardId);
		switch(itemType) {
			case "row":
				board = insertSpareSquareIntoRow(board, orientation, itemNumber)
				break;
			case "column":
				board = insertSpareSquareIntoColumn(board, orientation, itemNumber);
				break;
			default:
				break;	
		}
		boards = {...boards, [board.id]: board};
		resolve(board);
	}
	
);

export const rotateSquare = (square) => new Promise(
	resolve => {
		var orientation = square.orientation;
		var newOrientation = Object.assign({}, orientation, {
			up: orientation.left,
			right: orientation.up,
			down: orientation.right,
			left: orientation.down
		});
		resolve({...square, orientation: newOrientation})
	}
)