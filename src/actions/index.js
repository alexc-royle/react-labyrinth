import { normalize } from 'normalizr';
import * as api from '../api';
import * as schema from './schema';
import {getCurrentBoard} from '../reducers';

export const fetchNewBoard = () => (dispatch, getState) => {
	dispatch({
		type: 'FETCH_NEW_BOARD_REQUEST'
	});
	return api.fetchNewBoard().then(
		response => {
			dispatch({
				type: 'FETCH_NEW_BOARD_REQUEST_SUCCESS',
				response: normalize(response, schema.boardSchema)
			})
		}
	)
}

export const insertSpareSquare = (orientation, itemType, itemNumber) => (dispatch, getState) => {
	const currentState = getState();
	const board = getCurrentBoard(currentState);
	dispatch({
		type: 'INSERT_SPARE_SQUARE_REQUEST'
	})
	return api.insertSpareSquare(
		board.id, 
		orientation, 
		itemType, 
		itemNumber
	).then(response => {
		dispatch({
			type: 'INSERT_SPARE_SQUARE_REQUEST_SUCCESS',
			response: normalize(response, schema.boardSchema)
		})
	})
}