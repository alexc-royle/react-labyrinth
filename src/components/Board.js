import React from 'react';
import RowListContainer from '../containers/RowListContainer';
import BoardButtonListContainer from '../containers/BoardButtonListContainer';
import '../css/Board.css';
const Board = ({
	id
}) => (
		<div className="boardContainer">
			<div className="board">
				<div className="boardInner">
					<RowListContainer boardId={id}/>
				</div>
			</div>
		</div>
);
export default Board;