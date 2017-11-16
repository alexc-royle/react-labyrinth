import { combineReducers } from 'redux';
import { v4 } from 'node-uuid';


const boardsById = (state = {}, action) => {
	switch(action.type) {
		case "FETCH_NEW_BOARD_REQUEST_SUCCESS":
			return {
				...state,
				...action.response.entities.boards
			};
		default: 
			return state;
	}
}

const rowsById = (state = {}, action) => {
	switch(action.type) {
		case "FETCH_NEW_BOARD_REQUEST_SUCCESS":
			return {
				...state,
				...action.response.entities.rows
			};
		default: 
			return state;
	}
}

const itemsById = (state = {}, action) => {
	switch(action.type) {
		case "FETCH_NEW_BOARD_REQUEST_SUCCESS":
		case "ROTATE_SPARE_SQUARE_REQUEST_SUCCESS":
			return {
				...state,
				...action.response.entities.items
			};
		default: 
			return state;
	}
}

const cardsById = (state = {}, action) => {
	switch(action.type) {
		case "FETCH_NEW_BOARD_REQUEST_SUCCESS":
			return {
				...state,
				...action.response.entities.cards
			};
		default: 
			return state;
	}
}

const playersById = (state = {}, action) => {
	switch(action.type) {
		case "FETCH_NEW_BOARD_REQUEST_SUCCESS":
		case "MOVE_CURRENT_PLAYER_SUCCESS":
			return {
				...state,
				...action.response.entities.players
			}

		default:
			return state;
	}
}
const playersInOrder = (state = [], action) => {
	switch(action.type) {
		case 'FETCH_NEW_BOARD_REQUEST_SUCCESS':
			var boardId = action.response.result;
			var players = action.response.entities.boards[boardId].players;
			return [
				...state,
				...players
			];
		default:
			return state;
	}
}
const currentPlayer = (state = {current: -1, max: 0}, action) => {
	switch(action.type) {
		case 'FETCH_NEW_BOARD_REQUEST_SUCCESS':
			var boardId = action.response.result;
			var players = action.response.entities.boards[boardId].players;
			return { current: 0, max: players.length};
		case 'END_CURRENT_PLAYER_TURN':
			if(state.current + 1 === state.max) {
				return {...state, current: 0};
			} else {
				return {...state, current: state.current + 1};
			}
		default:
			return state;
	}
}
const rowIdsByBoardId = (state={}, action) => {
	switch(action.type) {
		case "FETCH_NEW_BOARD_REQUEST_SUCCESS":
			var boardId = action.response.result;
			var rowIds = action.response.entities.boards[boardId].rows;
			return {
				...state,
				[boardId]: rowIds
			}
		default:
			return state;

	}
}

const itemIdsByRowId = (state={}, action) => {
	switch(action.type) {
		case "FETCH_NEW_BOARD_REQUEST_SUCCESS":
		case "INSERT_SPARE_SQUARE_REQUEST_SUCCESS":
			var rows = action.response.entities.rows;
			let itemsToRows = {};
			for(var row in rows) {
				itemsToRows[row] = rows[row].items;
			}
			return {
				...state,
				...itemsToRows
			}
		default:
			return state;

	}
}

const cardIdsByItemId = (state = {}, action) => {
	switch(action.type) {
		case "FETCH_NEW_BOARD_REQUEST_SUCCESS":
			var items = action.response.entities.items;
			var cardsToItems = {};
			for(var itemId in items) {
				const item = items[itemId];
				if(item.data && item.data.image)
					cardsToItems[itemId] = item.data.image;
			}
			return {
				...state,
				...cardsToItems
			}
		default:
			return state;
	}
}

const playerIdsByItemId = (state = {}, action) => {
	switch(action.type) {
		case "FETCH_NEW_BOARD_REQUEST_SUCCESS":
		case "MOVE_CURRENT_PLAYER_SUCCESS":
			var players = action.response.entities.players;
			var playersToSquares = {};
			for(var playerId in players) {
				const player = players[playerId];
				const squareId = player.squareId;
				if(playersToSquares[squareId]) {
					playersToSquares[squareId].push(playerId);
				} else {
					playersToSquares[squareId] = [playerId];
				}
			}
			return {
				...playersToSquares
			}
		default:
			return state;
	}
}

const currentBoard = (state={}, action) => {
	switch(action.type) {
		case "FETCH_NEW_BOARD_REQUEST_SUCCESS":
			var boardId = action.response.result;
			var rows = 7;
			var squares = 7;
			return {
				id: action.response.result,
				numberOfRows: rows,
				numberOfColumns: squares
			}
		default:
			return state;
	}
}

const spareSquare = (state=null, action) => {
	switch(action.type) {
		case "FETCH_NEW_BOARD_REQUEST_SUCCESS":
		case "INSERT_SPARE_SQUARE_REQUEST_SUCCESS":
			var boardId = action.response.result;
			return action.response.entities.boards[boardId].spare;
		default:
			return state;
	}
}

const playersInFormList = (state=[], action) => {
	let index;
	switch(action.type) {
		case "PLAYER_FORM_INITIALISE":
		case "PLAYER_FORM_ADD_PLAYER":
			if(state.length < 5) {
				return [...state, playerInForm(null, action)]
			}
			return state;
		case "PLAYER_FORM_REMOVE_PLAYER":
			index = action.playerIndex;
			if(typeof state[index] !== "undefined") {
				return [
					...state.slice(0, index),
					...state.slice(index + 1)
				]
			}
			return state;
		case "PLAYER_FORM_NAME_UPDATE":
		case "PLAYER_FORM_POSITION_UPDATE":
		case "PLAYER_FORM_COLOUR_UPDATE":
			index = action.playerIndex;
			if(typeof state[index] !== "undefined") {
				return [
					...state.slice(0, index),
					playerInForm(state[index], action),
					...state.slice(index + 1)
				]
			}
			return state;
		default:
			return state;
	}
}

const playerInForm = (state={}, action) => {
	switch(action.type) {
		case 'PLAYER_FORM_INITIALISE':
		case "PLAYER_FORM_ADD_PLAYER":
			return {'id': v4(), 'name': '', 'position': '', colour: ''};
		case "PLAYER_FORM_NAME_UPDATE":
			if(typeof action.playerName === 'string') {
				return {...state, 'name': action.playerName}
			}
			return state;
		case "PLAYER_FORM_POSITION_UPDATE":
			if(typeof action.playerPosition === 'string') {
				return {...state, 'position': action.playerPosition}
			}
			return state;
		case "PLAYER_FORM_COLOUR_UPDATE":
			if(typeof action.playerColour === 'string') {
				return {...state, 'colour': action.playerColour}
			}
			return state;
		default:
			return state;
			
	}
}

const playerFormCompleted = (state=false, action) => {
	switch(action.type) {
		case "PLAYER_FORM_SUBMITTED":
			return true;
		default:
			return state;		
	}
}

const coloursList = (state=[], action) => {
	switch(action.type) {
		case "PLAYER_FORM_INITIALISE":
			return [
				{"text": "red", "value": "#f44336"},
				{"text": "pink", "value": "#e91e63"},
				{"text": "purple", "value": "#9c27b0"}, 
				{"text": "dark blue", "value": "#673ab7"}, 
				{"text": "light blue", "value": "#2196f3"},
				{"text": "dark green", "value": "#4caf50"},  
				{"text": "light green", "value": "8bc34a"},
				{"text": "yellow", "value": "#ffeb3b"}, 
				{"text": "orange", "value": "#ff9800"}, 
				{"text": "brown", "value": "#795548"}, 
				{"text": "grey", "value": "#607d8b"}
			]
		default:
			return state;
	}
}
const positionsList = (state=[], action) => {
	switch(action.type) {
		case "PLAYER_FORM_INITIALISE":
			return [
				{"text": "top left", "value": ["top-left"]}, 
				{"text": "top right", "value": "top-right"}, 
				{"text": "bottom left", "value": "bottom-left"}, 
				{"text": "bottom right", "value": "bottom-right"}
			]
		default:
			return state;
	}
}

const initialised = (state=false, action) => {
	switch(action.type) {
		case "PLAYER_FORM_INITIALISE":
			return true;
		default:
			return state;
	}
}

const canInsertSpareSquare = (state = false, action) => {
	switch(action.type) {
		case "FETCH_NEW_BOARD_REQUEST_SUCCESS":
			return true;
		case "INSERT_SPARE_SQUARE_REQUEST_SUCCESS":
			return false;
		case 'END_CURRENT_PLAYER_TURN':
			return true;
		default:
			return state;
	}
}

const canMoveCounter = (state = false, action) => {
	switch(action.type) {
		case "INSERT_SPARE_SQUARE_REQUEST_SUCCESS":
			return true;
		case 'END_CURRENT_PLAYER_TURN':
			return false;
		default:
			return state;
	}
}

const playerChoiceForm = combineReducers({
	playersInFormList,
	coloursList,
	positionsList,
	initialised,
	playerFormCompleted
});


const game = combineReducers({
	boardsById,
	rowsById,
	itemsById,
	cardsById,
	rowIdsByBoardId,
	itemIdsByRowId,
	cardIdsByItemId,
	currentBoard,
	spareSquare,
	playerChoiceForm,
	playersById,
	playersInOrder,
	currentPlayer,
	playerIdsByItemId,
	canInsertSpareSquare,
	canMoveCounter
});

export default game;

//export const getRow = (state, id) => 

export const getCurrentBoard = (state) => state.boardsById[state.currentBoard.id];
export const getRowsForBoard = (state, boardId) => {
	return state.rowIdsByBoardId[boardId].map(
		id => getRow(
			state.rowsById,
			id
		)
	)
}

export const getRow = (state, id) => state[id];
export const getItemsForRow = (state, rowId) => {
	return state.itemIdsByRowId[rowId].map(
		id => getItem(
			state.itemsById,
			id
		)
	)
}

export const getItem = (state, id) => state[id];

export const getNumberOfRows = (state) => state.currentBoard.numberOfRows;

export const getNumberOfColumns = (state) => state.currentBoard.numberOfColumns;

export const getSpareSquare = (state) => getItem(state.itemsById, state.spareSquare);

export const getCard = (state, id) => state[id];
export const getCardByItemId = (state, itemId) => {
	const cardId = state.cardIdsByItemId[itemId];
	if(cardId) {
		return getCard(state.cardsById, cardId)
	}
	return false;
}

export const getCurrentPlayerForm = (state) => state.playerChoiceForm;

export const getSquareIdFromRowAndColumn = (state, rowCount, columnCount) => {
	const rows = getRowsForBoard(state, state.currentBoard.id);
	const row = rows[rowCount];
	if(row) {
		const squares = getItemsForRow(state, row.id);
		if(squares && squares[columnCount]) {
			return squares[columnCount].id;
		}
	
	}
	return false;

}

export const getSquaresAroundSquareFromRowAndColumn = (state, rowCount, columnCount) => {
	return {
		squareToTop: getSquareIdFromRowAndColumn(state, rowCount - 1, columnCount),
		squareToRight: getSquareIdFromRowAndColumn(state, rowCount, columnCount + 1),
		squareToBottom: getSquareIdFromRowAndColumn(state, rowCount + 1, columnCount),
		squareToLeft: getSquareIdFromRowAndColumn(state, rowCount, columnCount - 1)
	}
}

export const getRowAndColumnFromSquare = (state, id) => {
	const rows = getRowsForBoard(state.currentBoard.id);
	let rowIndex = -1;
	for(let row of rows) {
		rowIndex++;
		var squares = state.squaresByRowId[row.id];
		var squareIndex = squares.indexOf(id);
		if( squareIndex > -1 ) {
			return {'row': rowIndex, 'column': squareIndex};
		}
	}
	return false;
}

export const getPlayer = (state, id) => state[id];
export const getPlayersById = (state, ids) => ids.map(id => getPlayer(state.playersById, id));
export const getPlayersByItemId = (state, itemId) => {
	if(state.playerIdsByItemId[itemId]) {
		return state.playerIdsByItemId[itemId].map(
			id => {
				return getPlayer(
				state.playersById, id
			)
		});
	}
	return [];
}

export const getPlayerFormCompleted = (state) => state.playerChoiceForm.playerFormCompleted;

export const getCurrentPlayer = (state) => {
	const current = state.currentPlayer.current;
	if(current > -1) {
		const playerId = state.playersInOrder[current];
		return getPlayer(state.playersById, playerId)
	}
	return false;
}
export const getPlayersInOrder = (state) => {
	console.log(state.playersInOrder);
	return state.playersInOrder.map(playerId => {
		const player = getPlayer(state.playersById, playerId);
		console.log('playerId', playerId);
		return player;
	})
}
export const getCanInsertSpareSquare = (state) => state.canInsertSpareSquare
export const getCanMoveCounter = (state) => state.canMoveCounter