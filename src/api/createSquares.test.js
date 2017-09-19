/*[
		{type: 'bend', orientation: 0, hasImage: false},
		null,
		{type: 'tjunction', orientation: 1, hasImage: true},
		null,
		{type: 'tjunction', orientation: 1, hasImage: true},
		null,
		{type: 'bend', orientation: 1, hasImage: false}
	]
	*/
import createSquares from './createSquares';

jest.mock('node-uuid');
import { v4 } from 'node-uuid';

jest.mock('../constants/getRandomArrayItem');
import getRandomArrayItem from '../constants/getRandomArrayItem';

describe('createSquares.js', () => {
	test('given_[null]/[object]_returns_[object]', () => {
		v4.mockImplementation(() => 'abc-123');
		getRandomArrayItem.mockImplementation(() => ({ "up": false, "right": true, "down": true, "left": true }));
		const inputRow = [null];
		const inputSquareList = [{type: 'tjunction', orientation: 'any', hasImage: true}];
		const expectedSquareList = [{"id": "abc-123", "orientation": { "up": false, "right": true, "down": true, "left": true }, "type": "tjunction"}];
		expect(createSquares(inputRow, inputSquareList)).toEqual(expectedSquareList)
		getRandomArrayItem.mockReset();
		v4.mockReset();
	});
	test('given_[null]/[]_returns_false', () => {
		v4.mockImplementation(() => 'abc-123');
		const inputRow = [null];
		const inputSquareList = [];
		const expectedSquareList = [{"id": 'abc-123', 'error': true}];
		expect(createSquares(inputRow, inputSquareList)).toEqual(expectedSquareList);
		v4.mockReset();
	});
})