import deepFreeze from 'deep-freeze';

const rotateSquare = (state, action) => {
	switch(action.type) {
		case 'ROTATE_SQUARE':
			return Object.assign({}, state, {
				up: state.left,
				right: state.up,
				down: state.right,
				left: state.down
			});
		default:
			return state;
	}
}

test('rotate square', () => {
	const squareBefore = {
		up: false,
		right: false,
		down: true,
		left: true
	};
	const squareAfter = {
		up: true,
		right: false,
		down: false,
		left: true
	}
	const action = {
		type: 'ROTATE_SQUARE'
	}
	deepFreeze(squareBefore);
	deepFreeze(squareAfter);
	expect(
		rotateSquare(squareBefore, action)
	).toEqual(squareAfter);
});

const moveCounter = (state, action) => {
	return state;
}