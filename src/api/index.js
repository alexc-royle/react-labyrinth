import { v4 } from 'node-uuid';
import * as base from './baseData';



const shuffleArray = (array) => [...array].sort(() => (Math.random() - 0.5))
const getRandomArrayElement = (array) => {
	const length = array.length;
	if(length === 0) return false;
	if(length === 1) return array[0];
	return array[Math.ceil(Math.random() * length ) - 1];
}

export const squareData = shuffleArray([
	...Array(16).fill({type: 'bend', orientation: 'any'}),
	...Array(6).fill({'type': 'tjunction', orientation: 'any'}),
	...Array(12).fill({'type': 'straight', orientation: 'any'})
]);

const getType = (type) => {
	if(type !== 'any') return type;
	return getRandomArrayElement(base.shapes);
}

const getOrientation = (type, orientation) => {
	if(orientation !== 'any') return base.orientations[type][orientation];
	return getRandomArrayElement(base.orientations[type]);
}


const createSquare = (type, orientation) => {
	const squareType = getType(type);
	const squareOrientation = getOrientation(squareType, orientation);
	return {id: v4(), type: squareType, orientation: squareOrientation}
}
const createSquares = (row) => {
	return row.map((square, squareNumber) => {
		if(!square) {
			square = squareData.pop();
		}
		return createSquare(square.type, square.orientation);
	});
}

const createSingleSquare = (squareData) => createSquare(squareData.type, squareData.orientation)

const createRow = (row) => ({ id: v4(), squares: createSquares(row)});

const createRows = (baseBoard) => baseBoard.map((row, number) => createRow(row));

const createBoard = () => ({
	id: v4(), 
	rows: createRows(base.board), 
	spare: createSingleSquare(squareData.pop())
});

let boards = {};


export const fetchNewBoard = () => new Promise(
	resolve => {
		var newBoard = createBoard();
		boards = {...boards, [newBoard.id]: newBoard};
		resolve(newBoard)
	}
);