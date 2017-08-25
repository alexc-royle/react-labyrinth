import React from 'react';
import '../css/BoardButton.css';

const BoardButton = ({
	show,
	orientation,
	onClick
}) => {
	let content = show ? <button onClick={onClick}>{orientation}</button> : <span/>;
	return (
		<div className={'boardButton ' + orientation}>
			{content}
		</div>
	)
};
export default BoardButton;