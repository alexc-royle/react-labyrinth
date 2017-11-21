import { squareData, cardData } from './baseData';
import createBoard from './createBoard';
import shuffle from '../constants/shuffleArray';

let boards = {};

const getBoard = boardId => boards[boardId];

export const fetchNewBoard = (playerList = []) => new Promise(
	resolve => {
		const squareList = shuffle(squareData);
		const cardList = shuffle(cardData);
		let newBoard = createBoard(squareList, cardList);
		newBoard.players = addPlayersToBoard(newBoard, playerList);
		boards = {...boards, [newBoard.id]: newBoard};
		resolve(newBoard)
	}
);
const addPlayersToBoard = (board, playerList) => {
	let newPlayers = []
	for(const player of playerList) {
		const position = convertTextualPositionToNumerical(player.position);
		const square = getSquareFromPosition(board, position);
		let newPlayer = {...player, squareId: square.id};
		newPlayers.push(newPlayer);
	}
	return newPlayers;
};
const convertTextualPositionToNumerical = (textPosition) => {
	switch(textPosition) {
		case "top-left":
			return {'row': 1, 'column': 1};
		case "top-right":
			return {'row': 1, 'column': 7};
		case "bottom-left":
			return {'row': 7, 'column': 1};
		case "bottom-right":
			return {'row': 7, 'column': 7};
		default:
			return {'row': 1, 'column': 1};
	}
}
const getSquareFromPosition = (board, position) => {
	return board.rows[position.row].items[position.column];
}
const getPositionFromItemId = (board, itemId) => {
	let startingPosition = {'row': -1, 'column': -1};
	let success = false;
	const itemPosition = board.rows.reduce((previousPosition, row) => {
		if(success) return previousPosition;
		let newPosition = {...previousPosition };
		newPosition.row = newPosition.row + 1;
		const found = row.items.findIndex(item => item.id === itemId );
		if(found > -1) {
			success = true;
			newPosition.column = found;
		}
		return newPosition;
	}, startingPosition);
	if(success) return itemPosition;
	return false;
}
const insertSpareSquareIntoRow = (board, orientation, itemNumber) => {
	let items = [...board.rows[itemNumber].items];
	let squares = items.filter(item => item.type === 'square');
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
	let newItems = [items[0], ...squares, items[8]]
	board.rows[itemNumber].items = newItems;
	board.spare = newSpareSquare;
	return board;
}
const insertSpareSquareIntoColumn = (board, orientation, itemNumber) => {
	let items = board.rows.map(row => row.items[itemNumber]);
	let squares = items.filter(item => item.type === 'square');
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
	let newItems = [items[0], ...squares, items[8]]
	let rowNum = 0;
	for(let item of newItems) {
		board.rows[rowNum].items.splice(itemNumber, 1, item);
		rowNum++;
	}
	board.spare = newSpareSquare;
	return board;
}

export const insertSpareSquare = (boardId, direction, itemNumber) => new Promise(
	resolve => {
		let board = getBoard(boardId);
		switch(direction) {
			case "left":
			case "right":
				board = insertSpareSquareIntoRow(board, direction, itemNumber)
				break;
			case "up":
			case "down":
				board = insertSpareSquareIntoColumn(board, direction, itemNumber);
				break;
			default:
				break;	
		}
		boards = {...boards, [board.id]: board};
		resolve(board);
	}
	
);

export const rotateSpareSquare = (boardId, square) => new Promise(
	resolve => {
		let board = getBoard(boardId);
		var orientation = square.data.orientation;
		var newOrientation = Object.assign({}, orientation, {
			up: orientation.left,
			right: orientation.up,
			down: orientation.right,
			left: orientation.down
		});
		const rotatedSquare = {...square, data: {...square.data, orientation: newOrientation}};
		board.spare = rotatedSquare;
		boards = {...boards, [board.id]: board};
		resolve(rotatedSquare);
	}
)

export const movePlayer = (boardId, player, direction) => new Promise(
	resolve => {
		const board = getBoard(boardId);
		let newBoard = {...board};
		console.log(newBoard);
		const currentPosition = getPositionFromItemId(board, player.squareId);
		let newPosition;
		switch(direction) {
			case "up":
				newPosition = {...currentPosition, row: currentPosition.row - 1};
				break;
			case "down":
				newPosition = {...currentPosition, row: currentPosition.row + 1};
				break;
			case "left":
				newPosition = {...currentPosition, column: currentPosition.column - 1};
				break;
			case "right":
				newPosition = {...currentPosition, column: currentPosition.column + 1};
				break;
			default:
				newPosition = {...currentPosition};
		}
		console.log(currentPosition, newPosition)
		if(newPosition.row > 0 && newPosition.row < 8 && newPosition.column > 0 && newPosition.column < 8) {
			console.log(currentPosition, newPosition);
			const currentSquare = newBoard.rows[currentPosition.row].items[currentPosition.column];
			const newSquare = newBoard.rows[newPosition.row].items[newPosition.column];
			console.log(currentSquare, newSquare);
			const currentOrientation = currentSquare.data.orientation;
			const newOrientation = newSquare.data.orientation;
			let canPlayerMove = false;
			switch(direction) {
				case "up":
					if(currentOrientation.up && newOrientation.down) {
						canPlayerMove = true;
					}
					break;
				case "down":
					if(currentOrientation.down && newOrientation.up) {
						canPlayerMove = true;
					}
					break;
				case "left":
					if(currentOrientation.left && newOrientation.right) {
						canPlayerMove = true;
					}
					break;
				case "right":
					if(currentOrientation.right && newOrientation.left) {
						canPlayerMove = true;
					}
					break;	
				default:
					break;
			}
			console.log(canPlayerMove);
			if(canPlayerMove) {
				newBoard.players = newBoard.players.map(currentPlayer => {
					if(currentPlayer.id != player.id) {
						return {...currentPlayer}
					} else {
						return {...currentPlayer, squareId: newSquare.id}
					}
				});

			}
		}
		boards = {...boards, [newBoard.id]: newBoard};
		resolve(newBoard);
	}
) 