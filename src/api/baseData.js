export const shapes = ["bend", "tjunction", "straight"]
export const orientations = {
	bend: [
		{ up: false, right: true, down: true, left: false },
		{ up: false, right: false, down: true, left: true },
		{ up: true, right: false, down: false, left: true },
		{ up: true, right: true, down: false, left: false }
	],
	tjunction: [
		{ up: true, right: true, down: true, left: false },
		{ up: false, right: true, down: true, left: true },
		{ up: true, right: false, down: true, left: true },
		{ up: true, right: true, down: false, left: true }
	],
	straight: [
		{ up: true, right: false, down: true, left: false },
		{ up: false, right: true, down: false, left: true },
	]
};

export const board = [
	[
		{type: 'bend', orientation: 0},
		null,
		{type: 'tjunction', orientation: 1},
		null,
		{type: 'tjunction', orientation: 1},
		null,
		{type: 'bend', orientation: 1}
	],
	Array(7).fill(null),
	[
		{type: 'tjunction', orientation: 0},
		null,
		{type: 'tjunction', orientation: 0},
		null,
		{type: 'tjunction', orientation: 1},
		null,
		{type: 'tjunction', orientation: 2}
	],
	Array(7).fill(null),
	[
		{type: 'tjunction', orientation: 0},
		null,
		{type: 'tjunction', orientation: 3},
		null,
		{type: 'tjunction', orientation: 2},
		null,
		{type: 'tjunction', orientation: 2}
	], 
	Array(7).fill(null), 
	[
		{type: 'bend', orientation: 3},
		null,
		{type: 'tjunction', orientation: 3},
		null,
		{type: 'tjunction', orientation: 3},
		null,
		{type: 'bend', orientation: 2}
	]
]