import createSquare from './createSquare';
const createSquares = (row, squareList) => {
	return row.map(square => {
		if(!square) {
			square = squareList.pop();
		}
		return createSquare(square.type, square.orientation);
	});
}
export default createSquares;