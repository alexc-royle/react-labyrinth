import React from 'react';
import Button from './Button';
import '../css/BoardButton.css';


const BoardButton = ({
	type,
	data,
	onButtonClick,
	disabled
}) => {
	const glyphIcon = 'glyphicon-chevron-' + data.text;
	const content = <Button onClick={() => onButtonClick(data.direction, data.itemNumber)} displayText={data.text} classNames={''} glyphIcon={glyphIcon} disabled={disabled}/>;
	return (
		<div className={'boardItem boardButton ' + data.classNames}>
			{content}
		</div>
	)
};
export default BoardButton;