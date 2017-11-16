import React from 'react';
import PlayerForm from './PlayerForm';

const PlayerFormList = ({
	formData,
	onRemoveButtonClick,
	onPlayerNameUpdate,
	onPlayerPositionUpdate,
	onPlayerColourUpdate
}) => (
	<div className="players">
		{formData.playersInFormList.map((player, index) =>
			<PlayerForm
				key={player.id}
				index={index}
				player={player}
				colours={formData.coloursList}
				positions={formData.positionsList}
				onRemoveButtonClick={() => onRemoveButtonClick(index)}
				onPlayerNameUpdate={(e) => onPlayerNameUpdate(index, e.target.value)}
				onPlayerPositionUpdate={(e) => onPlayerPositionUpdate(index, e.target.value) }
				onPlayerColourUpdate={(e) => onPlayerColourUpdate(index, e.target.value)}
			/>
		)}
	</div>
)

export default PlayerFormList;