import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import {mergerReducer} from './mergerReducer';

export default createStore(mergerReducer, applyMiddleware(thunk));