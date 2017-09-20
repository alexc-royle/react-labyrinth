import { v4 } from 'node-uuid';
import * as base from './baseData';
import getRandomArrayItem from '../constants/getRandomArrayItem';

export const calculateType = (squareData) => {
	let type = squareData.type;
	if(type==='any') return getRandomArrayItem(base.shapes);
	if(base.shapes.includes(type) === false) return false;
	return type;
}

export const calculateOrientation = (squareData) => {
	let type = squareData.type;
	let orientation = squareData.orientation;
	if(base.orientations.hasOwnProperty(type) === false) return false;
	if(orientation==='any') return getRandomArrayItem(base.orientations[type]);
	if(typeof base.orientations[type][orientation] === 'undefined') return false;
	return base.orientations[type][orientation];
}

export const calculateImage = (squareData, cardList) => {
	if(squareData.hasImage) {
		return cardList.pop();
	}
	return false;
}


const createSquare = (squareData, cardList) => {
	let returnData = { id: v4()};
	if(typeof squareData === 'object') {
		const squareType = calculateType(squareData);
		const squareOrientation = calculateOrientation(squareData);
		if(squareType && squareOrientation) {
			const squareImage = calculateImage(squareData, cardList);
			if(squareImage) returnData.image = squareImage;
			returnData.type = squareType;
			returnData.orientation = squareOrientation;
		} else {
			returnData.error = true;
		}
	}
	return returnData;
}
export default createSquare;

export const createSingleSquare = (squareData, cardList) => createSquare(squareData, cardList)