import { combineReducers } from 'redux';


const initialised = (state=false, action) => {
	switch(action.type) {
		case "PLAYER_FORM_INITIALISE":
			return true;
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
				console.log(action);
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
			return {'id': action.id, 'name': '', 'position': '', colour: ''};
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
				{"text": "light green", "value": "#8bc34a"},
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


const playerChoiceForm = combineReducers({
	playersInFormList,
	coloursList,
	positionsList,
	initialised,
	playerFormCompleted
});
export default playerChoiceForm;

export const getCurrentPlayerForm = (state) => state;