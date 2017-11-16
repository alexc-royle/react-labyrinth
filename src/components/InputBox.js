import React from 'react';

const InputBox = ({
	startingValue,
	onChange,
	classNames
}) => (
		<input type="text" className={'inputBox' + classNames} onChange={onChange} value={startingValue}/>
);
export default InputBox;