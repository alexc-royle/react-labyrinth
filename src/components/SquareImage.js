import React from 'react';
import '../css/SquareImage.css';

const SquareImage = ({
	id,
	name,
	desc,
	className
}) => {
	if(id) {
		return (
			<span className={'squareImage ' + className}/>
		);
	} else {
		return (
			<span/>
		);	
	}
	
	
	
}
export default SquareImage;