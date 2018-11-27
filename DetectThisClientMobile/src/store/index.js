import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import DetectedObjectReducer from './reducers/DetectedObjectReducer';


const combinedReducers = combineReducers({
  DetectedObjectReducer
});

const store = createStore(combinedReducers, applyMiddleware(thunk));

export default store;