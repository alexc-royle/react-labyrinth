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
		{type: 'bend', orientation: 0, hasImage: false},
		null,
		{type: 'tjunction', orientation: 1, hasImage: true},
		null,
		{type: 'tjunction', orientation: 1, hasImage: true},
		null,
		{type: 'bend', orientation: 1, hasImage: false}
	],
	Array(7).fill(null),
	[
		{type: 'tjunction', orientation: 0, hasImage: true},
		null,
		{type: 'tjunction', orientation: 0, hasImage: true},
		null,
		{type: 'tjunction', orientation: 1, hasImage: true},
		null,
		{type: 'tjunction', orientation: 2, hasImage: true}
	],
	Array(7).fill(null),
	[
		{type: 'tjunction', orientation: 0, hasImage: true},
		null,
		{type: 'tjunction', orientation: 3, hasImage: true},
		null,
		{type: 'tjunction', orientation: 2, hasImage: true},
		null,
		{type: 'tjunction', orientation: 2, hasImage: true}
	], 
	Array(7).fill(null), 
	[
		{type: 'bend', orientation: 3, hasImage: false},
		null,
		{type: 'tjunction', orientation: 3, hasImage: true},
		null,
		{type: 'tjunction', orientation: 3, hasImage: true},
		null,
		{type: 'bend', orientation: 2, hasImage: false}
	]
];

export const squareData = [
	...Array(6).fill({type: 'bend', orientation: 'any', hasImage: true}),
	...Array(10).fill({type: 'bend', orientation: 'any', hasImage: false}),
	...Array(6).fill({'type': 'tjunction', orientation: 'any', hasImage: true}),
	...Array(12).fill({'type': 'straight', orientation: 'any', hasImage: false})
];

export const cardData = [
	{name: "Alligator", desc: "Alligator", className: "alligator"},
	{name: "Ant", desc: "Ant", className: "ant"},
	{name: "Bat", desc: "Bat", className: "bat"},
	{name: "Bear", desc: "Bear", className: "bear"},
	{name: "Bug", desc: "Bug", className: "bug"},
	{name: "Bull", desc: "Bull", className: "bull"},
	{name: "Coins", desc: "Coins", className: "coins"},
	{name: "Ring", desc: "Ring", className: "ring"},
	{name: "Diamond", desc: "Diamond", className: "diamond"},
	{name: "Dinosaur", desc: "Dinosaur", className: "dinosaur"},
	{name: "Emerald", desc: "Emerald", className: "emerald"},
	{name: "Crown", desc: "Crown", className: "crown"},
	{name: "Falcon", desc: "Falcon", className: "falcon"},
	{name: "Genie", desc: "Genie", className: "genie"},
	{name: "Ghost", desc: "Ghost", className: "ghost"},
	{name: "Leprechaun", desc: "Leprechaun", className: "leprechaun"},
	{name: "Money bag", desc: "Money bag", className: "money-bag"},
	{name: "Ruby", desc: "Ruby", className: "ruby"},
	{name: "Skull", desc: "Skull", className: "skull"},
	{name: "Helmet", desc: "Helmet", className: "helmet"},
	{name: "Spider", desc: "Spider", className: "spider"},
	{name: "Sword", desc: "Sword", className: "sword"},
	{name: "Dragon", desc: "Dragon", className: "dragon"},
	{name: "Topaz", desc: "Topaz", className: "topaz"},
	{name: "Chest", desc: "Chest", className: "chest"},
	{name: "Map", desc: "Map", className: "map"},
	{name: "Unicorn", desc: "Unicorn", className: "unicorn"},
	{name: "Wasp", desc: "Wasp", className: "wasp"},
	{name: "Witch", desc: "Witch", className: "witch"},
	{name: "Wolf", desc: "Wolf", className: "wolf"},
	{name: "Rat", desc: "Rat", className: "rat"},
	{name: "Snake", desc: "Snake", className: "snake"}
];