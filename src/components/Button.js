import React from 'react';

const disabledAction = () => {}

const Button = ({
	displayText,
	classNames,
	glyphIcon,
	onClick,
	disabled = false
}) => {
	if(disabled) {
		onClick = disabledAction;
		classNames += ' disabled';
	}
	return (
		<button className={'btn btn-primary ' + classNames} onClick={onClick}><span className={`glyphicon ${glyphIcon}`}/><span className="sr-only">{displayText}</span></button>
	)
};
export default Button;