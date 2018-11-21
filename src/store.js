import {createStore} from 'redux';
import {mergerReducer} from './mergerReducer';

export default createStore(mergerReducer);