import React from 'react';
import RowListContainer from '../containers/RowListContainer';
import BoardButtonListContainer from '../containers/BoardButtonListContainer';
import '../css/Board.css';
const Board = ({
	id
}) => (
		<div className='outerBoard'>
			<BoardButtonListContainer boardId={id} orientation={'down'} type={'column'}/>
			<div className="innerBoard">
				<BoardButtonListContainer boardId={id} orientation={'right'} type={'row'}/>
				<div className="board">
					<RowListContainer boardId={id}/>
				</div>
				<BoardButtonListContainer boardId={id} orientation={'left'} type={'row'}/>
			</div>
			
			<BoardButtonListContainer boardId={id} orientation={'up'}  type={'column'}/>
		</div>
);
export default Board;