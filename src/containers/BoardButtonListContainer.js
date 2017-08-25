import React from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';
import { getNumberOfColumns, getNumberOfRows } from '../reducers';
import BoardButtonList from '../components/BoardButtonList';

class BoardButtonListContainer extends React.Component {
	componentDidMount() {
		//this.fetchData();

	}

	componentDidUpdate(prevProps) {}

	render() {
		const { insertSpareSquare } = this.props;
		const items = (this.props.type === 'column') ? this.props.columns : this.props.rows;
		return (
			<BoardButtonList
				items={items}
				orientation={this.props.orientation}
				type={this.props.type}
				onButtonClick={insertSpareSquare}
			/>
		);
	}
}


const mapStateToProps = (state, props) => {
	return {
		columns: getNumberOfColumns(state, props.boardId),
		rows: getNumberOfRows(state, props.boardId)
	}
};

BoardButtonListContainer = connect(
	mapStateToProps,
	actions
)(BoardButtonListContainer);

export default BoardButtonListContainer