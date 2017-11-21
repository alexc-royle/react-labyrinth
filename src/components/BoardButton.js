import React from 'react';
import Button from './Button';
import '../css/BoardButton.css';


const BoardButton = ({
	id,
	type,
	data,
	onButtonClick,
	disabled
}) => {
	const glyphIcon = 'glyphicon-chevron-' + data.text;
	const content = <Button onClick={() => onButtonClick(id)} displayText={data.text} classNames={''} glyphIcon={glyphIcon} disabled={disabled}/>;
	return (
		<div className={'boardItem boardButton ' + data.classNames}>
			{content}
		</div>
	)
};
export default BoardButton;