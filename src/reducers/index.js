import { combineReducers } from 'redux';
import game, * as fromGame from './game';
import players, * as fromPlayers from './players';


const labyrinth = combineReducers({
	players,
	game
})
export default labyrinth;

//export const getRow = (state, id) => 

export const getCurrentPlayer = (state) => fromGame.getCurrentPlayer(state.game);
export const getCurrentBoard = (state) => fromGame.getCurrentBoard(state.game);
export const getItemsForRow = (state, rowId) => fromGame.getItemsForRow(state.game, rowId);
export const getSpareSquare = (state) => fromGame.getSpareSquare(state.game);
export const getCardByItemId = (state, itemId) => fromGame.getCardByItemId(state.game, itemId);
export const getPlayersInOrder = (state) => fromGame.getPlayersInOrder(state.game);
export const getNumberOfColumns = (state) => fromGame.getNumberOfColumns(state.game);
export const getNumberOfRows = (state) => fromGame.getNumberOfRows(state.game);
export const getRowsForBoard = (state, boardId) => fromGame.getRowsForBoard(state.game, boardId);
export const getPlayersByItemId = (state, itemId) => fromGame.getPlayersByItemId(state.game, itemId);
export const getItem = (state, id) => fromGame.getItem(state.game.itemsById, id);
export const getCanInsertSpareSquare = (state) => fromGame.getCanInsertSpareSquare(state.game);
export const getDisabledBoardButtonId = (state) => fromGame.getDisabledBoardButtonId(state.game);
export const getCanMoveCounter = (state) => fromGame.getCanMoveCounter(state.game);
export const getNextCardByPlayerId = (state, playerId) => fromGame.getNextCardByPlayerId(state.game, playerId);
export const getNextCardForCurrentPlayer = (state) => fromGame.getNextCardForCurrentPlayer(state.game);
/*
export const getRow = (state, id) => fromGame.getRow(state.game, id);

export const getSpareSquare = (state) => fromGame.getSpareSquare(state.game);
export const getCard = (state, id) => fromGame.getCard(state.game, id);
*/
export const getCurrentPlayerForm = (state) => fromPlayers.getCurrentPlayerForm(state.players);