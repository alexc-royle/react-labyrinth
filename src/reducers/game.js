const boardsById = (state = {}, action, gameState) => {
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

const rowsById = (state = {}, action, gameState) => {
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

const itemsById = (state = {}, action, gameState) => {
	switch(action.type) {
		case "FETCH_NEW_BOARD_REQUEST_SUCCESS":
			return {
				...state,
				...action.response.entities.items
			};
		case "ROTATE_SQUARE":
			const id = action.id;
			const item = state[id];
			return {
				...state,
				[id]: itemById(item, action)
			}
		default: 
			return state;
	}
}

const itemById = (state = {}, action) => {
	switch(action.type) {
		case "ROTATE_SQUARE":
			var orientation = state.data.orientation;
			var newOrientation = Object.assign({}, orientation, {
				up: orientation.left,
				right: orientation.up,
				down: orientation.right,
				left: orientation.down
			});
			return {...state, data: {...state.data, orientation: newOrientation}};
		default:
			return state;
	}
}

const cardsById = (state = {}, action, gameState) => {
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

const playersById = (state = {}, action, gameState) => {
	switch(action.type) {
		case "FETCH_NEW_BOARD_REQUEST_SUCCESS":
			return {
				...state,
				...action.response.entities.players
			}
		default:
			return state;
	}
}
/*
export const getItemIdsByRowForBoard = (state, boardId) => {
export const getItemCoordinates = (boardArray, itemId) => {
export const getNewPositionFromOldPositionAndDirection = (oldPosition, direction) => {
export const isPositionWithinGameLimits = (position) => {
const isBetween = (value, lower, upper) => {
const getItemIdFromCoordinates = (boardArray, position) => {
const canPlayerMoveBetweenOrientations = (direction, from, to) => {
*/

const playersInOrder = (state = [], action, gameState) => {
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
const currentPlayer = (state = {current: -1, max: 0}, action, gameState) => {
	switch(action.type) {
		case 'FETCH_NEW_BOARD_REQUEST_SUCCESS':
			var boardId = action.response.result;
			var players = action.response.entities.boards[boardId].players;
			return { current: 0, max: players.length};
		case 'END_PLAYER_TURN':
			if(state.current + 1 === state.max) {
				return {...state, current: 0};
			} else {
				return {...state, current: state.current + 1};
			}
		default:
			return state;
	}
}
const rowIdsByBoardId = (state={}, action, gameState) => {
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

const itemIdsByRowId = (state={}, action, gameState) => {
	switch(action.type) {
		case "FETCH_NEW_BOARD_REQUEST_SUCCESS":
			const rowsToAdd = action.response.entities.rows;
			let itemsToRows = {};
			for(const row in rowsToAdd) {
				itemsToRows[row] = rowsToAdd[row].items;
			}
			return {
				...state,
				...itemsToRows
			}
		case "INSERT_SPARE_SQUARE":
			const pressedButton = getItem(gameState.itemsById, action.buttonId);
			const direction = pressedButton.data.direction;
			const itemNumber = pressedButton.data.itemNumber;
			const spareSquare = gameState.spareSquare;
			const rows = gameState.rowIdsByBoardId[gameState.currentBoard.id];
			let items, squares, newSquares;
			switch(direction) {
				case "up":
				case "down":
					items = getItemsForColumn(gameState, itemNumber);
					squares = getSquareIdsFromItemIds(gameState, items);
					switch(direction) {
						case "up":
							newSquares = [...squares.slice(1), spareSquare];
							break;
						case "down":
							newSquares = [spareSquare, ...squares.slice(0, 6)]
							break;
						default:
							break;
					}
					let newItems = [items[0], ...newSquares, items[8]];
					let newRows = {};
					let rowNum = 0;
					for(let rowId of rows) {
						newRows[rowId] = [...state[rowId]];
						newRows[rowId][itemNumber] = newItems[rowNum];
						rowNum++;
					}
					return newRows
				case "left":
				case "right":
					const rowId = rows[itemNumber];
					items = state[rowId];
					squares = getSquareIdsFromItemIds(gameState, items);
					switch(direction) {
						case "left":
							squares.shift();
							squares.push(spareSquare);
							break;
						case "right":
							squares.pop();
							squares.unshift(spareSquare);
							break;
						default:
							break;
					}
					return {
						...state,
						[rowId]: [items[0], ...squares, items[8]]
					}
				default:
					return state;
			}
		default:
			return state;

	}
}

const cardIdsByItemId = (state = {}, action, gameState) => {
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
const startingPositionItemIdByPlayerId = (state = {}, action, gameState) => {
	switch(action.type) {
		case "FETCH_NEW_BOARD_REQUEST_SUCCESS":
			const players = action.response.entities.players;
			let squaresToPlayers = {};
			for(const playerId in players) {
				const player = players[playerId];
				const squareId = player.squareId;
				squaresToPlayers[playerId] = squareId;
			}
		default:
			return state;
	}
}
const playerIdsByItemId = (state = {}, action, gameState) => {
	switch(action.type) {
		case "FETCH_NEW_BOARD_REQUEST_SUCCESS":
			var players = action.response.entities.players;
			var playersToSquares = {};
			for(const playerId in players) {
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
		case 'MOVE_PLAYER':
			const direction = action.direction;
			const playerId = action.id;
			const boardArray = getItemIdsByRowForBoard(gameState, gameState.currentBoard.id);
			const squareId = getItemIdFromPlayerId(state, playerId);
			const currentCoordinates = getItemCoordinates(boardArray, squareId);
			const newCoordinates = getNewPositionFromOldPositionAndDirection(currentCoordinates, direction);
			if(isPositionWithinGameLimits(newCoordinates)) {
				const currentSquare = getItem(gameState.itemsById, getItemIdFromCoordinates(boardArray, currentCoordinates));
				const newSquare = getItem(gameState.itemsById, getItemIdFromCoordinates(boardArray, newCoordinates));
				if(canPlayerMoveBetweenOrientations(direction, currentSquare.data.orientation, newSquare.data.orientation)) {
					const oldSquareState = state[squareId].filter(e => e !== playerId);
					const newSquareId = newSquare.id;
					const newSquareState = (newSquareId in state) ? [...state[newSquareId], playerId] : [playerId];
					return {
						...state, 
						[squareId]: oldSquareState,
						[newSquareId]: newSquareState
					}
				}
			}
			return state;
		case 'INSERT_SPARE_SQUARE':
			const pressedButton = getItem(gameState.itemsById, action.buttonId);
			const insertDirection = pressedButton.data.direction;
			const itemNumber = pressedButton.data.itemNumber;
			const spareSquare = getSpareSquare(gameState);
			let row, column;
			switch(insertDirection) {
				case 'up':
					row = 1;
					column = itemNumber;
					break;
				case 'down':
					row = 7;
					column = itemNumber;
					break;
				case 'left':
					row = itemNumber;
					column = 1;
					break;
				case 'right':
					row = itemNumber;
					column = 7;
			}
			const affectedItemId = getItemByRowAndColumn(gameState, row, column);
			const affectedPlayers = state[affectedItemId];
			if(affectedPlayers && affectedPlayers.length > 0) {
				const newItemId = spareSquare.id;
				const newItemState = (newItemId in state) ? [...state[newItemId], ...affectedPlayers] : [...affectedPlayers];
				return {
					...state,
					[affectedItemId]: [],
					[newItemId]: newItemState
				}
			}
			return state;
		default:
			return state;
	}
}

const cardIdsByPlayerId = (state = {}, action, gameState) => {
	switch(action.type) {
		case "FETCH_NEW_BOARD_REQUEST_SUCCESS":
			var players = action.response.entities.players;
			var cardsToPlayers = {};
			for(const playerId in players) {
				const player = players[playerId];
				cardsToPlayers[playerId] = player.cards;
			}
			return cardsToPlayers;
		case "END_PLAYER_TURN":
			const playerId = action.id;
			const itemId = getItemIdFromPlayerId(gameState.playerIdsByItemId, playerId);
			const itemCard = getCardByItemId(gameState, itemId);
			if(itemCard && itemCard.id === state[playerId][0]) {
				let cardsByPlayer = [...state[playerId]];
				cardsByPlayer.shift();
				return {
					...state,
					[playerId]: cardsByPlayer
				}
			}
			return state;
		default:
			return state;
	}
}

const currentBoard = (state={}, action, gameState) => {
	switch(action.type) {
		case "FETCH_NEW_BOARD_REQUEST_SUCCESS":
			const rows = 7;
			const squares = 7;
			return {
				id: action.response.result,
				numberOfRows: rows,
				numberOfColumns: squares
			}
		default:
			return state;
	}
}

const spareSquare = (state=null, action, gameState) => {
	switch(action.type) {
		case "FETCH_NEW_BOARD_REQUEST_SUCCESS":
			var boardId = action.response.result;
			return action.response.entities.boards[boardId].spare;
		case "INSERT_SPARE_SQUARE":
			const pressedButton = getItem(gameState.itemsById, action.buttonId);
			const direction = pressedButton.data.direction;
			const itemNumber = pressedButton.data.itemNumber;
			switch(direction) {
				case "up":
					return getItemByRowAndColumn(gameState, 1, itemNumber);
				case "down":
					return getItemByRowAndColumn(gameState, 7, itemNumber);
				case "left":
					return getItemByRowAndColumn(gameState, itemNumber, 1);
				case "right":
					return getItemByRowAndColumn(gameState, itemNumber, 7);
				default:
					return state;
			}
		default:
			return state;
	}
}

const canInsertSpareSquare = (state = false, action, gameState) => {
	switch(action.type) {
		case "FETCH_NEW_BOARD_REQUEST_SUCCESS":
			return true;
		case "INSERT_SPARE_SQUARE":
			return false;
		case 'END_PLAYER_TURN':
			return true;
		default:
			return state;
	}
}

const canMoveCounter = (state = false, action, gameState) => {
	switch(action.type) {
		case "INSERT_SPARE_SQUARE":
			return true;
		case 'END_PLAYER_TURN':
			return false;
		default:
			return state;
	}
}

const lastBoardButtonPressed = (state = false, action, gameState) => {
	switch(action.type) {
		case 'INSERT_SPARE_SQUARE':
			return action.buttonId;
		default:
			return state;
	}
}

const boardButtonIdsByOppositeBoardButtonId = (state = {}, action, gameState) => {
	switch(action.type) {
		case "FETCH_NEW_BOARD_REQUEST_SUCCESS":
			var items = action.response.entities.items;
			let boardButtonIds = {};
			let boardButtonDirections = {'up': {}, 'down': {}, 'left': {}, 'right': {}};
			const mappedDirections = {'up': 'down', 'left': 'right'};
			for(var itemId in items) {
				const currentItem = items[itemId];
				if(currentItem.type === 'boardButton') {
					const direction = currentItem.data.direction;
					const itemNumber = currentItem.data.itemNumber;
					boardButtonDirections[direction][itemNumber] = currentItem.id;
				}
			}
			for(var currentDirection in mappedDirections) {
				const oppositeDirection = mappedDirections[currentDirection];
				const currentButtonDirection = boardButtonDirections[currentDirection];
				const oppositeButtonDirection = boardButtonDirections[oppositeDirection];
				for(var itemNumber in currentButtonDirection) {
					const currentItemId = currentButtonDirection[itemNumber];
					const oppositeItemId = oppositeButtonDirection[itemNumber];
					boardButtonIds[currentItemId] = oppositeItemId;
					boardButtonIds[oppositeItemId] = currentItemId;
				}
			}
			return boardButtonIds;
		default:
			return state;
	}
}

const game = (state = {}, action) => {
	return {
		boardsById: boardsById(state.boardsById, action, state),
		rowsById: rowsById(state.rowsById, action, state),
		itemsById: itemsById(state.itemsById, action, state),
		cardsById: cardsById(state.cardsById, action, state),
		playersById: playersById(state.playersById, action, state),
		rowIdsByBoardId: rowIdsByBoardId(state.rowIdsByBoardId, action, state),
		itemIdsByRowId: itemIdsByRowId(state.itemIdsByRowId, action, state),
		cardIdsByItemId: cardIdsByItemId(state.cardIdsByItemId, action, state),
		cardIdsByPlayerId: cardIdsByPlayerId(state.cardIdsByPlayerId, action, state),
		playerIdsByItemId: playerIdsByItemId(state.playerIdsByItemId, action, state),
		startingPositionItemIdByPlayerId: startingPositionItemIdByPlayerId(state.startingPositionItemIdByPlayerId, action, state),
		currentBoard: currentBoard(state.currentBoard, action, state),
		spareSquare: spareSquare(state.spareSquare, action, state),
		playersInOrder: playersInOrder(state.playersInOrder, action, state),
		currentPlayer: currentPlayer(state.currentPlayer, action, state),
		canInsertSpareSquare: canInsertSpareSquare(state.canInsertSpareSquare, action, state),
		canMoveCounter: canMoveCounter(state.canMoveCounter, action, state),
		boardButtonIdsByOppositeBoardButtonId: boardButtonIdsByOppositeBoardButtonId(state.boardButtonIdsByOppositeBoardButtonId, action, state),
		lastBoardButtonPressed: lastBoardButtonPressed(state.lastBoardButtonPressed, action, state)
	}
}

export default game;


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
export const getItemsForColumn = (state, columnNumber) => {
	const rows = getRowsForBoard(state, state.currentBoard.id);
	return rows.map(row => {
		const items = getItemsForRow(state, row.id);
		return items[columnNumber].id;
	})
}

export const getItemByRowAndColumn = (state, rowNumber, columnNumber) => {
	const rows = getRowsForBoard(state, state.currentBoard.id);
	const rowId = rows[rowNumber].id;
	const items = getItemsForRow(state, rowId);
	return items[columnNumber].id;
}
export const getItemIdsByRowForBoard = (state, boardId) => {
	return state.rowIdsByBoardId[boardId].map(
		rowId => [...state.itemIdsByRowId[rowId]]
	);
}
export const getItemCoordinates = (boardArray, itemId) => {
	let currentRow = -1;
	return boardArray.reduce((previous, row) => {
		currentRow++;
		const index = row.findIndex(id => id === itemId);
		if(index > -1) {
			return [currentRow, index];
		}
		return previous;
	}, [-1, -1])
}
export const getNewPositionFromOldPositionAndDirection = (oldPosition, direction) => {
	const row = oldPosition[0];
	const column = oldPosition[1];
	switch(direction) {
		case "up":
			return [row - 1, column];
		case "down":
			return [row + 1, column];
		case "left":
			return [row, column - 1];
		case "right":
			return [row, column + 1];
		default:
			return oldPosition;
	}
}
export const isPositionWithinGameLimits = (position) => {
	const row = position[0];
	const column = position[1];
	return (isBetween(row, 0, 8) && isBetween(column, 0, 8))
}
const isBetween = (value, lower, upper) => {
	return (value > lower && value < upper);
}
const getItemIdFromCoordinates = (boardArray, position) => {
	const row = position[0];
	const column = position[1];
	return boardArray[row][column];
}
const canPlayerMoveBetweenOrientations = (direction, from, to) => {
	switch(direction) {
		case "up":
			return from.up && to.down;
		case "down":
			return from.down && to.up;
		case "left":
			return from.left && to.right;
		case "right":
			return from.right && to.left;
		default:
			return false;
	}
}
export const getItemIdFromPlayerId = (state, playerId) => {
	for(let squareId in state) {
		if(state[squareId].indexOf(playerId) > -1) {
			return squareId;
		}
	}
	return false;
}

/*
export const getRowByItemId = (state, itemId) => {
	for(let [key, value] of state.itemIdsByRowId.entries()) {
		const found = value.findIndex(element => itemId === element);
		if(found > -1) {
			return key;
		}
	}
	return false;
}
*/
export const getItem = (state, id) => state[id];

export const getNumberOfRows = (state) => state.currentBoard.numberOfRows;

export const getNumberOfColumns = (state) => state.currentBoard.numberOfColumns;

export const getSquareIdsFromItemIds = (state, items) => {
	return items.filter(itemId => {
		const item = getItem(state.itemsById, itemId);
		return item.type === 'square';
	})
}

export const getSpareSquare = (state) => getItem(state.itemsById, state.spareSquare);

export const getCard = (state, id) => state[id];
export const getCardByItemId = (state, itemId) => {
	const cardId = state.cardIdsByItemId[itemId];
	if(cardId) {
		return getCard(state.cardsById, cardId)
	}
	return false;
}



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
	return state.playersInOrder.map(playerId => {
		const player = getPlayer(state.playersById, playerId);
		return player;
	})
}
export const getCanInsertSpareSquare = (state) => state.canInsertSpareSquare;
export const getCanMoveCounter = (state) => state.canMoveCounter;
export const getDisabledBoardButtonId = (state) => {
	if(state.lastBoardButtonPressed !== false) {
		return state.boardButtonIdsByOppositeBoardButtonId[state.lastBoardButtonPressed];
	}
	return false;
}

export const getNextCardByPlayerId = (state, playerId) => {
	const playerCards = state.cardIdsByPlayerId[playerId];
	if(playerCards && playerCards.length > 0) {
		const nextCardId = playerCards[0];
		return getCard(state.cardsById, nextCardId);
	}
}
export const getNextCardForCurrentPlayer = state => {
	const currentPlayer = getCurrentPlayer(state);
	if(currentPlayer) {
		return getNextCardByPlayerId(state, currentPlayer.id);
	}
	return false;
}