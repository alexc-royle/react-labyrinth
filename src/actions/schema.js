import { schema } from 'normalizr';

export const squareSchema = new schema.Entity('squares');
export const rowSchema  = new schema.Entity('rows');
export const boardSchema  = new schema.Entity('board');
export const loadedBoardSchema  = new schema.Array(boardSchema);

boardSchema.define({
	rows: schema.Array(rowSchema)
});
rowSchema.define({
	squares: schema.Array(squareSchema)
})

//export const arrayOfRows = schema.Array(row);