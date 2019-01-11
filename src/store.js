import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import {mergerReducer} from './mergerReducer';
import {loadState, saveState} from './local-storage';

const persistedState = loadState();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(mergerReducer, persistedState, composeEnhancer(applyMiddleware(thunk)));

store.subscribe(() => {
	saveState(store.getState());
});

export default store;