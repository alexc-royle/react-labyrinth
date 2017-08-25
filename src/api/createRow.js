import { v4 } from 'node-uuid';
import createSquares from './createSquares';
const createRow = (row, squareList) => ({ id: v4(), squares: createSquares(row, squareList)});
export default createRow;