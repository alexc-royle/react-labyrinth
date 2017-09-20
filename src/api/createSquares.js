import createSquare from './createSquare';
const createSquares = (row, squareList, cardList) => {
	return row.map(square => {
		if(!square) {
			square = squareList.pop();
		}
		return createSquare(square, cardList);
	});
}
export default createSquares;