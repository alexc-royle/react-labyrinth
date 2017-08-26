import React from 'react';
import '../css/Square.css';

const Square = ({
	id,
	type,
	orientation
}) => {
	const orientationClasses=
		(orientation.up ? 'up ' : '') +
		(orientation.right ? 'right ' : '') +
		(orientation.down ? 'down ' : '') +
		(orientation.left ? 'left' : '')
	
	return (
		<div className={'square ' + orientationClasses}>
			<div className="walls-top">
				<div className="wall-left"></div>
				<div className="wall-centre"></div>
				<div className="wall-right"></div>
			</div>
			<div className="walls-middle">
				<div className="wall-left"></div>
				<div className="wall-centre"></div>
				<div className="wall-right"></div>
			</div>
			<div className="walls-bottom">
				<div className="wall-left"></div>
				<div className="wall-centre"></div>
				<div className="wall-right"></div>
			</div>
		</div>
	);
}
export default Square;