import { v4 } from 'node-uuid';
import * as base from './baseData';
import getRandomArrayItem from '../constants/getRandomArrayItem';

export const calculateType = (type) => {
	if(base.shapes.includes(type) === false) return getRandomArrayItem(base.shapes);
	return type;
}

export const calculateOrientation = (type, orientation) => {
	if(base.orientations.hasOwnProperty(type) === false) return base.orientations.error;
	if(orientation !== 'any') return base.orientations[type][orientation];
	return getRandomArrayItem(base.orientations[type]);
}


const createSquare = (type, orientation) => {
	const squareType = calculateType(type);
	const squareOrientation = calculateOrientation(squareType, orientation);
	return {id: v4(), type: squareType, orientation: squareOrientation}
}
export default createSquare;

export const createSingleSquare = (squareData) => createSquare(squareData.type, squareData.orientation)