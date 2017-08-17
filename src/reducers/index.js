import { combineReducers } from 'redux';


const board = (state = [], filter) => {
	return state;
}

const game = combineReducers({
	board
});

export default game;

//export const getRow = (state, id) => 
