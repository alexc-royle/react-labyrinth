
import * as base from './baseData';
import getRandomArrayItem from '../constants/getRandomArrayItem';
import { v4 } from 'node-uuid';

export const calculateType = (squareData) => {
	let shape = squareData.shape;
	if(shape==='any') return getRandomArrayItem(base.shapes);
	if(base.shapes.includes(shape) === false) return false;
	return shape;
}

export const calculateOrientation = (squareData) => {
	let shape = squareData.shape;
	let orientation = squareData.orientation;
	if(base.orientations.hasOwnProperty(shape) === false) return false;
	if(orientation==='any') return getRandomArrayItem(base.orientations[shape]);
	if(typeof base.orientations[shape][orientation] === 'undefined') return false;
	return base.orientations[shape][orientation];
}

export const calculateImage = (squareData, cardList) => {
	if(squareData.hasImage) {
		return cardList.pop();
	}
	return false;
}


const createSquare = (square, cardList) => {
	if(square && square.data) {
		let squareData = {...square.data};
		const squareType = calculateType(squareData);
		const squareOrientation = calculateOrientation(squareData);
		if(squareType && squareOrientation) {
			const squareImage = calculateImage(squareData, cardList);
			if(squareImage) squareData.image = squareImage;
			squareData.type = squareType;
			squareData.orientation = squareOrientation;
		} else {
			squareData.error = true;
		}
		return {...square, data: squareData};
	} else {
		return {error: true};
	}
}
export default createSquare;

export const createSingleSquare = (squareData, cardList) => {
	let square = {id: v4(), type: 'square', data: {...squareData}}
	return createSquare(square, cardList)
}