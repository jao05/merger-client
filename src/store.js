import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import {mergerReducer} from './mergerReducer';
import {loadState, saveState} from './local-storage';

const persistedState = loadState();

const store = createStore(mergerReducer, persistedState, applyMiddleware(thunk));

store.subscribe(() => {
	saveState(store.getState());
});

export default store;