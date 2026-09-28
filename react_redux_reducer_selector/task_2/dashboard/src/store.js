import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const rootReducer = (state = {}) => state;

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
