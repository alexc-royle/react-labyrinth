import { v4 } from 'node-uuid';
import createSquares from './createSquares';
const createRow = (row, squareList, cardList) => ({ id: v4(), squares: createSquares(row, squareList, cardList)});
export default createRow;