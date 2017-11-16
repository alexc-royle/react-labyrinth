import React from 'react';
import Button from './Button';
import '../css/BoardButton.css';

const RotateSpareSquareButton = ({
	onButtonClick
}) => (
	<div className={'rotateSpareSquareHolder'}>
		<Button onClick={onButtonClick} displayText={'Rotate'} classNames={'rotateSpareSquareButton'} glyphIcon={'glyphicon-repeat'}/>
	</div>
);
export default RotateSpareSquareButton;