import { combineReducers } from 'redux';


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

const squaresById = (state = {}, action) => {
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

const squareIdsByRowId = (state={}, action) => {
	switch(action.type) {
		case "FETCH_NEW_BOARD_REQUEST_SUCCESS":
		case "INSERT_SPARE_SQUARE_REQUEST_SUCCESS":
			var rows = action.response.entities.rows;
			var squaresToRows = {};
			for(var row in rows) {
				squaresToRows[row] = rows[row].squares;
			}
			return {
				...state,
				...squaresToRows
			}
		default:
			return state;

	}
}

const currentBoard = (state={}, action) => {
	switch(action.type) {
		case "FETCH_NEW_BOARD_REQUEST_SUCCESS":
			var boardId = action.response.result;
			var rows = action.response.entities.boards[boardId].rows;
			var squares = action.response.entities.rows[rows[0]].squares;
			return {
				id: action.response.result,
				numberOfRows: rows.length,
				numberOfColumns: squares.length
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



const game = combineReducers({
	boardsById,
	rowsById,
	squaresById,
	rowIdsByBoardId,
	squareIdsByRowId,
	currentBoard,
	spareSquare
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
export const getSquaresForRow = (state, rowId) => {
	return state.squareIdsByRowId[rowId].map(
		id => getSquare(
			state.squaresById,
			id
		)
	)
}

export const getSquare = (state, id) => state[id];

export const getNumberOfRows = (state) => state.currentBoard.numberOfRows;

export const getNumberOfColumns = (state) => state.currentBoard.numberOfColumns;

export const getSpareSquare = (state) => getSquare(state.squares, state.spareSquare);