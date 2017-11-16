import React from 'react';

const SelectBox = ({
	options,
	pleaseSelectText,
	classNames,
	onChange
}) => (
		<select className={'selectBox' + classNames} onChange={onChange}>
			<option value="">{pleaseSelectText}</option>
			{options.map(option => <option key={option.value} value={option.value}>{option.text}</option>)}
		</select>
);
export default SelectBox;