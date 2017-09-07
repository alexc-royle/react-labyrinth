import {calculateType, calculateOrientation} from './createSquare';
jest.mock('../constants/getRandomArrayItem');
import getRandomArrayItem from '../constants/getRandomArrayItem';

test('calculateType returns "tjunction" when given the string "tjunction"', () => {
	getRandomArrayItem.mockImplementation(() => '')
	expect(calculateType('tjunction')).toBe('tjunction');
	expect(getRandomArrayItem).not.toBeCalled();
	getRandomArrayItem.mockReset();
});
test('calculateType return "tjunction" when given the string "tjunction"', () => {
	getRandomArrayItem.mockImplementation(() => '')
	expect(calculateType('tjunction')).toBe('tjunction');
	expect(getRandomArrayItem).not.toBeCalled();
	getRandomArrayItem.mockReset();
});
test('calculateType return "straight" when given the string "straight"', () => {
	getRandomArrayItem.mockImplementation(() => '')
	expect(calculateType('straight')).toBe('straight');
	expect(getRandomArrayItem).not.toBeCalled();
	getRandomArrayItem.mockReset();
});
test('calculateType makes a call to getRandomArrayItem for any given type not in base.shapes', () => {
	getRandomArrayItem.mockImplementation(() => 'straight')
	expect(calculateType('any')).toBe('straight');
	expect(calculateType('hello')).toBe('straight');
	expect(calculateType(null)).toBe('straight');
	expect(calculateType(true)).toBe('straight');
	expect(calculateType({})).toBe('straight');
	expect(calculateType([])).toBe('straight');
	expect(getRandomArrayItem).toBeCalled();
	expect(getRandomArrayItem.mock.calls.length).toBe(6);
	getRandomArrayItem.mockReset();
});

test('calculateOrientation should return the correct orientation when supplied straight and 0', () => {
	getRandomArrayItem.mockImplementation(() => '');
	const testObject = { up: true, right: false, down: true, left: false };
	expect(calculateOrientation('straight', 0)).toMatchObject(testObject);
	expect(getRandomArrayItem).not.toBeCalled();
	getRandomArrayItem.mockReset();
});

test('calculateOrientation should return the correct orientation when supplied straight and 1', () => {
	getRandomArrayItem.mockImplementation(() => '');
	const testObject = { up: false, right: true, down: false, left: true };
	expect(calculateOrientation('straight', 1)).toMatchObject(testObject);
	expect(getRandomArrayItem).not.toBeCalled();
	getRandomArrayItem.mockReset();
});

test('calculateOrientation should return the correct orientation when supplied bend and 0', () => {
	getRandomArrayItem.mockImplementation(() => '');
	const testObject = { up: false, right: true, down: true, left: false };
	expect(calculateOrientation('bend', 0)).toMatchObject(testObject);
	expect(getRandomArrayItem).not.toBeCalled();
	getRandomArrayItem.mockReset();
});

test('calculateOrientation should return the correct orientation when supplied bend and 1', () => {
	getRandomArrayItem.mockImplementation(() => '');
	const testObject = { up: false, right: false, down: true, left: true };
	expect(calculateOrientation('bend', 1)).toMatchObject(testObject);
	expect(getRandomArrayItem).not.toBeCalled();
	getRandomArrayItem.mockReset();
});

test('calculateOrientation should return the correct orientation when supplied bend and 2', () => {
	getRandomArrayItem.mockImplementation(() => '');
	const testObject = { up: true, right: false, down: false, left: true };
	expect(calculateOrientation('bend', 2)).toMatchObject(testObject);
	expect(getRandomArrayItem).not.toBeCalled();
	getRandomArrayItem.mockReset();
});

test('calculateOrientation should return the correct orientation when supplied bend and 3', () => {
	getRandomArrayItem.mockImplementation(() => '');
	const testObject = { up: true, right: true, down: false, left: false };
	expect(calculateOrientation('bend', 3)).toMatchObject(testObject);
	expect(getRandomArrayItem).not.toBeCalled();
	getRandomArrayItem.mockReset();
});

test('calculateOrientation should return the correct orientation when supplied tjunction and 0', () => {
	getRandomArrayItem.mockImplementation(() => '');
	const testObject = { up: true, right: true, down: true, left: false };
	expect(calculateOrientation('tjunction', 0)).toMatchObject(testObject);
	expect(getRandomArrayItem).not.toBeCalled();
	getRandomArrayItem.mockReset();
});

test('calculateOrientation should return the correct orientation when supplied tjunction and 1', () => {
	getRandomArrayItem.mockImplementation(() => '');
	const testObject = { up: false, right: true, down: true, left: true };
	expect(calculateOrientation('tjunction', 1)).toMatchObject(testObject);
	expect(getRandomArrayItem).not.toBeCalled();
	getRandomArrayItem.mockReset();
});

test('calculateOrientation should return the correct orientation when supplied tjunction and 2', () => {
	getRandomArrayItem.mockImplementation(() => '');
	const testObject = { up: true, right: false, down: true, left: true };
	expect(calculateOrientation('tjunction', 2)).toMatchObject(testObject);
	expect(getRandomArrayItem).not.toBeCalled();
	getRandomArrayItem.mockReset();
});

test('calculateOrientation should return the correct orientation when supplied tjunction and 3', () => {
	getRandomArrayItem.mockImplementation(() => '');
	const testObject = { up: true, right: true, down: false, left: true };
	expect(calculateOrientation('tjunction', 3)).toMatchObject(testObject);
	expect(getRandomArrayItem).not.toBeCalled();
	getRandomArrayItem.mockReset();
});

test('calculateOrientation should return the base.orientations.error object for a given type that does not exist', () => {
	getRandomArrayItem.mockImplementation(() => '');
	const baseOrientationsError = { up: false, right: false, down: false, left: false };
	expect(calculateOrientation('any', 0)).toMatchObject(baseOrientationsError);
	expect(calculateOrientation('hello', 2)).toMatchObject(baseOrientationsError);
	expect(calculateOrientation(null, 'hello')).toMatchObject(baseOrientationsError);
	expect(getRandomArrayItem).not.toBeCalled();
	getRandomArrayItem.mockReset();
});