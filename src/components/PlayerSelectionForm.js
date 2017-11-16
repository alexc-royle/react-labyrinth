import React from 'react';
import Button from './Button';
import PlayerFormList from './PlayerFormList';

const PlayerSelectionForm = ({
	formData,
	onAddButtonClick,
	onRemoveButtonClick,
	onPlayerNameUpdate,
	onPlayerPositionUpdate,
	onPlayerColourUpdate,
	onSubmit
}) => {
		return (
			<div>
				<PlayerFormList 
					formData={formData}
					onRemoveButtonClick={onRemoveButtonClick}
					onPlayerNameUpdate={onPlayerNameUpdate}
					onPlayerPositionUpdate={onPlayerPositionUpdate}
					onPlayerColourUpdate={onPlayerColourUpdate}
				/>
				<Button displayText={'Add Player'} classNames={'addPlayer'} onClick={() => onAddButtonClick()} glyphIcon={'glyphicon-plus'}/>
				<Button displayText={'Go'} classNames={'validatePlayers'} onClick={() => onSubmit()} glyphIcon={'glyphicon-ok'}/>
			</div>
	)
};
export default PlayerSelectionForm;