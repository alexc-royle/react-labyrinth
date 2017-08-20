import React from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';
import { getCurrentBoard } from '../reducers';
import Board from '../components/Board';

class BoardContainer extends React.Component {
	componentDidMount() {
		this.fetchData();

	}

	componentDidUpdate(prevProps) {}

	fetchData() {
		const { fetchNewBoard } = this.props;
		fetchNewBoard().then(() => console.log('done!'));
	}

	render() {
		console.log('props', this.props)
		if(this.props.board) {
			return (
				<Board id={this.props.board.id}/>
			);
		} else {
			return <p>Loading...</p>; 
		}
		
	}
}


const mapStateToProps = (state, props) => {
	return {
		board: getCurrentBoard(state),
	}
};

BoardContainer = connect(
	mapStateToProps,
	actions
)(BoardContainer);

export default BoardContainer