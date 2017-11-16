import { schema } from 'normalizr';

export const playerSchema = new schema.Entity('players');
//export const playerArraySchema = new schema.Array(playerSchema);
export const cardSchema = new schema.Entity('cards');
export const itemSchema = new schema.Entity('items', {data: {image: cardSchema}});
export const rowSchema  = new schema.Entity('rows', {items: [itemSchema]});
export const boardSchema  = new schema.Entity('boards', {rows: [rowSchema], spare: itemSchema, players: [playerSchema]});
export const boardArraySchema  = new schema.Array(boardSchema);

/*
boardSchema.define({
	rows: schema.Array(rowSchema)
});
rowSchema.define({
	squares: schema.Array(squareSchema)
})
*/
//export const arrayOfRows = schema.Array(row);