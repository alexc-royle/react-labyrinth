import React from 'react';

const Button = ({
	displayText,
	classNames,
	onClick
}) => (
		<button className={'button' + classNames} onClick={onClick}>{displayText}</button>
);
export default Button;