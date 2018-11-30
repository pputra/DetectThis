import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import detectedObjectReducer from './reducers/detectedObjectReducer';


const combinedReducers = combineReducers({
  detectedObjectReducer
});

const store = createStore(combinedReducers, applyMiddleware(thunk));

export default store;