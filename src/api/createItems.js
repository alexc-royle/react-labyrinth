import createSquare from './createSquare';
import { v4 } from 'node-uuid';

const handleSquareData = (item, itemList, cardList) => {
	let newItem = {...item, id: v4()};
	if(newItem.data === false) {
		newItem.data = itemList.pop();
	}
	return createSquare(newItem, cardList);
}

const handleEmptyData = item =>  ({...item, id: v4()})
const handleBoardButtonData = item => ({...item, id: v4()})

const createItems = (row, itemList, cardList) => {
	return row.map(item => {
		let newItem = false;
		if(item) {
			switch(item.type) {
				case 'square':
					newItem = handleSquareData(item, itemList, cardList);
					break;
				case 'empty':
					newItem = handleEmptyData(item);
					break;
				case 'boardButton':
					newItem = handleBoardButtonData(item);
					break;
				default:
					break;
			}
		}
		return newItem
	});
}
export default createItems;