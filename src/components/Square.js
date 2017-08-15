import React, { Component } from 'react';
import './Square.css';

const Square = ({
	id,
	type,
	orientation
}) => (
		<div className={
			'square ' +
			(orientation.top ? 'top ' : '') +
			(orientation.right ? 'right ' : '') +
			(orientation.bottom ? 'bottom ' : '') +
			(orientation.left ? 'left' : '')
			}
		>
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
export default Square;