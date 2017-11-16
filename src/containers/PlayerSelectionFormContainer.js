import React from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';
import { getCurrentPlayerForm } from '../reducers';
import PlayerSelectionForm from '../components/PlayerSelectionForm';

class PlayerSelectionFormContainer extends React.Component {
	componentDidMount() {
		this.fetchData();

	}

	componentDidUpdate(prevProps) {}

	fetchData() {
		const { fetchPlayerForm } = this.props;
		fetchPlayerForm();
	}

	render() {
		const { addPlayerToPlayerForm, removePlayerFromPlayerForm, playerNameUpdated, playerPositionUpdated, playerColourUpdated, playerFormSubmitted } = this.props;
		const initialised = this.props.form.initialised;
		const submitted = this.props.form.playerFormCompleted;
		if(initialised && !submitted) {
			return (
				<PlayerSelectionForm 
					formData={this.props.form}
					onAddButtonClick={addPlayerToPlayerForm}
					onRemoveButtonClick={removePlayerFromPlayerForm}
					onPlayerNameUpdate={playerNameUpdated}
					onPlayerPositionUpdate={playerPositionUpdated}
					onPlayerColourUpdate={playerColourUpdated}
					onSubmit={playerFormSubmitted}
				/>
			);
		} else if(!initialised) {
			return <p>Loading...</p>; 
		} else {
			return <span></span>
		}
		
	}
}


const mapStateToProps = (state, props) => {
	return {
		form: getCurrentPlayerForm(state),
	}
};

PlayerSelectionFormContainer = connect(
	mapStateToProps,
	actions
)(PlayerSelectionFormContainer);

export default PlayerSelectionFormContainer;