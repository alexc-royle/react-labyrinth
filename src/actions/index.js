import { normalize } from 'normalizr';
import * as api from '../api';
import * as schema from './schema';
import {getCurrentBoard, getSpareSquare, getSquareIdFromRowAndColumn, getSquaresAroundSquareFromRowAndColumn, getCurrentPlayer} from '../reducers';

export const fetchNewBoard = () => (dispatch, getState) => {
	dispatch({
		type: 'FETCH_NEW_BOARD_REQUEST'
	});
	const state = getState();
	const playersInForm = state.playersInFormList;
	return api.fetchNewBoard(playersInForm).then(
		response => {
			dispatch({
				type: 'FETCH_NEW_BOARD_REQUEST_SUCCESS',
				response: normalize(response, schema.boardSchema)
			})
		}
	)
}

export const insertSpareSquare = (direction, itemNumber) => (dispatch, getState) => {
	const currentState = getState();
	const board = getCurrentBoard(currentState);
	dispatch({
		type: 'INSERT_SPARE_SQUARE_REQUEST'
	})
	return api.insertSpareSquare(
		board.id, 
		direction, 
		itemNumber
	).then(response => {
		dispatch({
			type: 'INSERT_SPARE_SQUARE_REQUEST_SUCCESS',
			response: normalize(response, schema.boardSchema)
		})
	})
}

export const rotateSpareSquare = () => (dispatch, getState) => {
	const currentState = getState();
	const square = getSpareSquare(currentState);
	dispatch({
		type: 'ROTATE_SPARE_SQUARE_REQUEST'
	});
	
	return api.rotateSquare(square).then(response => {
		dispatch({
			type: 'ROTATE_SPARE_SQUARE_REQUEST_SUCCESS',
			response: normalize(response, schema.itemSchema)
		})
	});
	
}

export const fetchPlayerForm = () => {
	return {'type': 'PLAYER_FORM_INITIALISE'};
};

export const addPlayerToPlayerForm = () => (dispatch, getState) => {
	const currentState = getState();
	const players = currentState.playerChoiceForm.playersInFormList;
	if(players.length < 4) {
		dispatch({
			type: 'PLAYER_FORM_ADD_PLAYER'
		})
	}
}

export const removePlayerFromPlayerForm = (playerIndex) => {
	return { 
		'type': 'PLAYER_FORM_REMOVE_PLAYER',
		playerIndex
	}
}

export const playerNameUpdated = (playerIndex, playerName) => {
	return { 
		'type': 'PLAYER_FORM_NAME_UPDATE',
		playerIndex,
		playerName
	}
}
export const playerPositionUpdated = (playerIndex, playerPosition) => {
	return { 
		'type': 'PLAYER_FORM_POSITION_UPDATE',
		playerIndex,
		playerPosition
	}
}
export const playerColourUpdated = (playerIndex, playerColour) => {
	return { 
		'type': 'PLAYER_FORM_COLOUR_UPDATE',
		playerIndex,
		playerColour
	}
}

export const playerFormSubmitted = () => (dispatch, getState) => {
	const currentState = getState();
	const playersInForm = currentState.playerChoiceForm.playersInFormList;
	dispatch({
		type: 'PLAYER_FORM_SUBMITTED'
	});
	dispatch({
		type: 'FETCH_NEW_BOARD_REQUEST'
	});
	return api.fetchNewBoard(playersInForm).then(
		response => {
			dispatch({
				type: 'FETCH_NEW_BOARD_REQUEST_SUCCESS',
				response: normalize(response, schema.boardSchema)
			})
		}
	)
}
export const moveCurrentPlayer = (direction) => (dispatch, getState) => {
	dispatch({
		type: 'MOVE_CURRENT_PLAYER_REQUEST',
		direction
	});
	const state = getState();
	const currentPlayer = getCurrentPlayer(state);
	const board = getCurrentBoard(state);
	return api.movePlayer(board.id, currentPlayer, direction).then(
		response => {
			dispatch({
				type: 'MOVE_CURRENT_PLAYER_SUCCESS',
				response: normalize(response, schema.boardSchema)
			})
		}
	)
}

export const endCurrentTurn = () => {
	return {
		type: 'END_CURRENT_PLAYER_TURN'
	}
}