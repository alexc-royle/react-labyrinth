import React from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';
import { getRowsForBoard } from '../reducers';
import RowList from '../components/RowList';

class RowListContainer extends React.Component {
	componentDidMount() {
		//this.fetchData();

	}

	componentDidUpdate(prevProps) {}

	fetchData() {
		const { fetchNewBoard } = this.props;
		fetchNewBoard().then(() => console.log('done!'));
	}

	render() {
		return (
			<RowList rows={this.props.rows}/>
		);
	}
}


const mapStateToProps = (state, props) => {
	return {
		rows: getRowsForBoard(state, props.boardId),
	}
};

RowListContainer = connect(
	mapStateToProps,
	actions
)(RowListContainer);

export default RowListContainer