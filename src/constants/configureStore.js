import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import game from '../reducers/index';

const configureStore = () => {
	
	const middlewares = [thunk];
	if(process.env.NODE_ENV !== 'production') {
		middlewares.push(logger);
	}
	return createStore(
		game,
		applyMiddleware(...middlewares)
	);
};

export default configureStore