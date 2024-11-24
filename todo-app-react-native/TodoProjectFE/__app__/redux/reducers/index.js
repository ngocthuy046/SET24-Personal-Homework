//TODO: 5- rootReducer
import { combineReducers } from 'redux';
import taskReducer from './taskReducer';

const rootReducer = combineReducers({
  tasks: taskReducer,
});

export default rootReducer;
