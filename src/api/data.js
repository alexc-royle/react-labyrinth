import { v4 } from 'node-uuid';


const baseShapes = ["bend", "tjunction", "straight"]
const baseSquareOrientations = {
	bend: [
		{ up: false, right: true, down: true, left: false },
		{ up: false, right: false, down: true, left: true },
		{ up: true, right: false, down: false, left: true },
		{ up: true, right: true, down: false, left: false }
	],
	tjunction: [
		{ up: true, right: true, down: true, left: false },
		{ up: false, right: true, down: true, left: true },
		{ up: true, right: false, down: true, left: true },
		{ up: true, right: true, down: false, left: true }
	],
	straight: [
		{ up: true, right: false, down: true, left: false },
		{ up: false, right: true, down: false, left: true },
	]
};

var baseBoard = [
	[
		{type: 'bend', orientation: 0},
		null,
		{type: 'tjunction', orientation: 1},
		null,
		{type: 'tjunction', orientation: 1},
		null,
		{type: 'bend', orientation: 1}
	],
	Array(7).fill(null),
	[
		{type: 'tjunction', orientation: 0},
		null,
		{type: 'tjunction', orientation: 0},
		null,
		{type: 'tjunction', orientation: 1},
		null,
		{type: 'tjunction', orientation: 2}
	],
	Array(7).fill(null),
	[
		{type: 'tjunction', orientation: 0},
		null,
		{type: 'tjunction', orientation: 3},
		null,
		{type: 'tjunction', orientation: 2},
		null,
		{type: 'tjunction', orientation: 2}
	], 
	Array(7).fill(null), 
	[
		{type: 'bend', orientation: 3},
		null,
		{type: 'tjunction', orientation: 3},
		null,
		{type: 'tjunction', orientation: 3},
		null,
		{type: 'bend', orientation: 2}
	]
]

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
	return getRandomArrayElement(baseShapes);
}

const getOrientation = (type, orientation) => {
	if(orientation !== 'any') return baseSquareOrientations[type][orientation];
	return getRandomArrayElement(baseSquareOrientations[type]);
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
const createRow = (row) => ({ id: v4(), squares: createSquares(row)});

const createRows = (baseboard) => baseBoard.map((row, number) => createRow(row));

const boards = {
	boards: [
		{id: v4(), rows: createRows(baseBoard)}
	]
};


export const fetchNewBoard = () => boards;