import {combineReducers, createStore} from 'redux';
import Reducer from './Reducer';

const Store = createStore(combineReducers({
  state: Reducer
}))

export default Store;