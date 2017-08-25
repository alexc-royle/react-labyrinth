import createRow from './createRow';
const createRows = (baseBoard, squareList) => baseBoard.map(row => createRow(row, squareList));
export default createRows;