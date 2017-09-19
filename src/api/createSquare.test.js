import createSquare, {calculateType, calculateOrientation} from './createSquare';
jest.mock('../constants/getRandomArrayItem');
import getRandomArrayItem from '../constants/getRandomArrayItem';
jest.mock('node-uuid');
import { v4 } from 'node-uuid';

describe('createSquare.js', () => {
	describe('calculateType', () => {
		test('given_bend_returns_bend', () => {
			expect(calculateType('bend')).toBe('bend');
		});
		test('given_tjunction_returns_tjunction', () => {
			expect(calculateType('tjunction')).toBe('tjunction');
		});
		test('given_straight_returns_straight', () => {
			expect(calculateType('straight')).toBe('straight');
		});
		test('given_any_calls_getRandomArrayItem', () => {
			getRandomArrayItem.mockImplementation(() => 'straight')
			calculateType('any');
			expect(getRandomArrayItem).toBeCalled();
			getRandomArrayItem.mockReset();
		});
		test('given_null_returns_false', () => {
			expect(calculateType(null)).toBe(false);
		});
		test('given_hello_returns_false', () => {
			expect(calculateType('hello')).toBe(false);
		});
	})
	describe('calculateOrientation', () => {
		test('given_straight/0_returns_object', () => {
			//
			const testObject = { up: true, right: false, down: true, left: false };
			expect(calculateOrientation('straight', 0)).toMatchObject(testObject);
		});
		test('given_straight/1_returns_object', () => {
			//
			const testObject = { up: false, right: true, down: false, left: true };
			expect(calculateOrientation('straight', 1)).toMatchObject(testObject);
		});
		test('given_bend/0_returns_object', () => {
			const testObject = { up: false, right: true, down: true, left: false };
			expect(calculateOrientation('bend', 0)).toMatchObject(testObject);
		});
		test('given_bend/3_returns_object', () => {
			const testObject = { up: true, right: true, down: false, left: false };
			expect(calculateOrientation('bend', 3)).toMatchObject(testObject);
		});
		test('given_tjunction/0_returns_object', () => {
			const testObject = { up: true, right: true, down: true, left: false };
			expect(calculateOrientation('tjunction', 0)).toMatchObject(testObject);
		});
		test('given_tjunction/3_returns_object', () => {
			const testObject = { up: true, right: true, down: false, left: true };
			expect(calculateOrientation('tjunction', 3)).toMatchObject(testObject);
		});
		test('given_straight/any_returns_object', () => {
			const testObject = { up: false, right: true, down: false, left: true };
			getRandomArrayItem.mockImplementation(() => testObject);
			expect(calculateOrientation('straight', 'any')).toMatchObject(testObject);
			expect(getRandomArrayItem).toBeCalled();
			getRandomArrayItem.mockReset();
		});
		test('given_straight/-1_returns_false', () => {
			expect(calculateOrientation('straight', -1)).toBe(false);
		});
		test('given_straight/2_returns_false', () => {
			expect(calculateOrientation('straight', 2)).toBe(false);
		});
		test('given_null/null_returns_false', () => {
			expect(calculateOrientation(null, null)).toBe(false);
		});
		test('given_straight/null_returns_false', () => {
			expect(calculateOrientation('straight', null)).toBe(false);
		});
	});
	describe('createSquare', () => {
		test('given_correct_object_returns square object', () => {
			v4.mockImplementation(() => 'abc123');
			const given = {'type': 'straight', 'orientation': 0};
			const expected = {"id": "abc123", "orientation": {"down": true, "left": false, "right": false, "up": true}, "type": "straight"}
			expect(createSquare(given)).toMatchObject(expected);
		})
		test('given_{}_returns error object', () => {
			v4.mockImplementation(() => 'abc123');
			const given = {};
			const expected = {"id": "abc123", "error": true};
			expect(createSquare(given)).toMatchObject(expected);
		});
		test('given_false_returns error object', () => {
			v4.mockImplementation(() => 'abc123');
			const given = false;
			const expected = {"id": "abc123", "error": true};
			expect(createSquare(given)).toMatchObject(expected);
		});
		
	})
});








