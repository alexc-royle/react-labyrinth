import { v4 } from 'node-uuid';

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
	{id: v4(), name: "Alligator", desc: "Alligator", className: "alligator"},
	{id: v4(), name: "Ant", desc: "Ant", className: "ant"},
	{id: v4(), name: "Bat", desc: "Bat", className: "bat"},
	{id: v4(), name: "Bear", desc: "Bear", className: "bear"},
	{id: v4(), name: "Bug", desc: "Bug", className: "bug"},
	{id: v4(), name: "Bull", desc: "Bull", className: "bull"},
	{id: v4(), name: "Coins", desc: "Coins", className: "coins"},
	{id: v4(), name: "Ring", desc: "Ring", className: "ring"},
	{id: v4(), name: "Diamond", desc: "Diamond", className: "diamond"},
	{id: v4(), name: "Dinosaur", desc: "Dinosaur", className: "dinosaur"},
	{id: v4(), name: "Emerald", desc: "Emerald", className: "emerald"},
	{id: v4(), name: "Crown", desc: "Crown", className: "crown"},
	{id: v4(), name: "Falcon", desc: "Falcon", className: "falcon"},
	{id: v4(), name: "Genie", desc: "Genie", className: "genie"},
	{id: v4(), name: "Ghost", desc: "Ghost", className: "ghost"},
	{id: v4(), name: "Leprechaun", desc: "Leprechaun", className: "leprechaun"},
	{id: v4(), name: "Money bag", desc: "Money bag", className: "money-bag"},
	{id: v4(), name: "Ruby", desc: "Ruby", className: "ruby"},
	{id: v4(), name: "Skull", desc: "Skull", className: "skull"},
	{id: v4(), name: "Helmet", desc: "Helmet", className: "helmet"},
	{id: v4(), name: "Spider", desc: "Spider", className: "spider"},
	{id: v4(), name: "Sword", desc: "Sword", className: "sword"},
	{id: v4(), name: "Dragon", desc: "Dragon", className: "dragon"},
	{id: v4(), name: "Topaz", desc: "Topaz", className: "topaz"},
	{id: v4(), name: "Chest", desc: "Chest", className: "chest"},
	{id: v4(), name: "Map", desc: "Map", className: "map"},
	{id: v4(), name: "Unicorn", desc: "Unicorn", className: "unicorn"},
	{id: v4(), name: "Wasp", desc: "Wasp", className: "wasp"},
	{id: v4(), name: "Witch", desc: "Witch", className: "witch"},
	{id: v4(), name: "Wolf", desc: "Wolf", className: "wolf"},
	{id: v4(), name: "Rat", desc: "Rat", className: "rat"},
	{id: v4(), name: "Snake", desc: "Snake", className: "snake"}
];