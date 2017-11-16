import React from 'react';
//import { CirclePicker } from 'react-color';
import SelectBox from './SelectBox'; 
import InputBox from './InputBox'; 
import Button from './Button';

const PlayerForm = ({
	index,
	player,
	colours,
	positions,
	onRemoveButtonClick,
	onPlayerNameUpdate,
	onPlayerPositionUpdate,
	onPlayerColourUpdate
}) => (
	<div className="player">
		<span>Name: <InputBox startingValue={player.name} onChange={onPlayerNameUpdate} classNames={'name'}/></span>
		<span>Location: <SelectBox options={positions} pleaseSelectText={'Please Select'} classNames={'positions'} onChange={onPlayerPositionUpdate}/></span>
		<span>Colour: <SelectBox options={colours} pleaseSelectText={'Please Select'} classNames={'colours'} onChange={onPlayerColourUpdate}/></span>
		<Button displayText={'Delete'} classNames={'deletePlayer'} onClick={onRemoveButtonClick} glyphIcon={'glyphicon-remove'}/>
	</div>
)

export default PlayerForm;