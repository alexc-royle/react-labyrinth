import { combineReducers } from 'redux';
import * as data from '../api/data';


const board = (state, filter) => {
	return data.board;
}

const game = combineReducers({
	board
});

export default game;

//export const getRow = (state, id) => 
