import React from 'react';
import Button from './Button';
import '../css/BoardButton.css';

const BoardButton = ({
	show,
	orientation,
	onButtonClick
}) => {
	let content = <Button onClick={onButtonClick} displayText={orientation} classNames={''}/>;
	if(!show) {
		content = <span/>;
	}
	return (
		<div className={'boardButton ' + orientation}>
			{content}
		</div>
	)
};
export default BoardButton;