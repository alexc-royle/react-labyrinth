import { v4 } from 'node-uuid';
import createItems from './createItems';
const createRow = (row, squareList, cardList) => ({ id: v4(), items: createItems(row, squareList, cardList)});
export default createRow;