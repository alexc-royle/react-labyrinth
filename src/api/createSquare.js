import { v4 } from 'node-uuid';
import * as base from './baseData';
import getRandomArrayItem from '../constants/getRandomArrayItem';

export const calculateType = (type) => {
	if(type==='any') return getRandomArrayItem(base.shapes);
	if(base.shapes.includes(type) === false) return false;
	return type;
}

export const calculateOrientation = (type, orientation) => {
	if(base.orientations.hasOwnProperty(type) === false) return false;
	if(orientation==='any') return getRandomArrayItem(base.orientations[type]);
	if(typeof base.orientations[type][orientation] === 'undefined') return false;
	return base.orientations[type][orientation];
}


const createSquare = (squareData) => {
	if(typeof squareData === 'object') {
		const type = squareData.type;
		const orientation = squareData.orientation;
		const squareType = calculateType(type);
		const squareOrientation = calculateOrientation(squareType, orientation);
		
		if(squareType && squareOrientation) {
			return {id: v4(), type: squareType, orientation: squareOrientation}
		}
	}
	return {id: v4(), error: true}
}
export default createSquare;

export const createSingleSquare = (squareData) => createSquare(squareData.type, squareData.orientation)