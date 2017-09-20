import createRow from './createRow';
const createRows = (baseBoard, squareList, cardList) => baseBoard.map(row => createRow(row, squareList, cardList));
export default createRows;