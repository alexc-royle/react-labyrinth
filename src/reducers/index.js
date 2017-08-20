import { combineReducers } from 'redux';


const boards = (state = {}, action) => {
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

const rows = (state = {}, action) => {
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

const squares = (state = {}, action) => {
	switch(action.type) {
		case "FETCH_NEW_BOARD_REQUEST_SUCCESS":
			return {
				...state,
				...action.response.entities.squares
			};
		default: 
			return state;
	}
}

const currentBoard = (state=null, action) => {
	switch(action.type) {
		case "FETCH_NEW_BOARD_REQUEST_SUCCESS":
			return action.response.result;
		default:
			return state;
	}
}



const game = combineReducers({
	boards,
	rows,
	squares,
	currentBoard
});

export default game;

//export const getRow = (state, id) => 

export const getCurrentBoard = (state) => state.boards[state.currentBoard];
export const getRowsForBoard = (state, boardId) => {
	var board = state.boards[boardId];
	if(board) {
		return board.rows.map(
			id => getRow(
				state.rows,
				id
			)
		)
	}
}

export const getRow = (state, id) => state[id];
export const getSquaresForRow = (state, rowId) => {
	var row = state.rows[rowId];
	if(row) {
		return row.squares.map(
			id => getSquare(
				state.squares,
				id
			)
		)
	}
}

export const getSquare = (state, id) => state[id];