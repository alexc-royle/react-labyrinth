import React from 'react';
import SquareImageContainer from '../containers/SquareImageContainer';
import PlayerCounterContainer from '../containers/PlayerCounterContainer';
import '../css/Square.css';

const Square = ({
	id,
	type,
	data
}) => {
	const orientationClasses=
		(data.orientation.up ? 'up ' : '') +
		(data.orientation.right ? 'right ' : '') +
		(data.orientation.down ? 'down ' : '') +
		(data.orientation.left ? 'left' : '')
	
	return (
		<div id={id} className={'boardItem square ' + orientationClasses}>
			<div className="innerSquare">
				<div className="wallContainer">
					<div className="walls top">
						<div className="wall left"></div>
						<div className="wall centre"></div>
						<div className="wall right"></div>
					</div>
					<div className="walls middle">
						<div className="wall left"></div>
						<div className="wall centre">
							<SquareImageContainer squareId={id}/>
						</div>
						<div className="wall right"></div>
					</div>
					<div className="walls bottom">
						<div className="wall left"></div>
						<div className="wall centre"></div>
						<div className="wall right"></div>
					</div>
				</div>
				<PlayerCounterContainer squareId={id}/>
			</div>
		</div>
	);
}
export default Square;