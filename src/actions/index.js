import { normalize } from 'normalizr';
import * as api from '../api';
import * as schema from './schema';

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