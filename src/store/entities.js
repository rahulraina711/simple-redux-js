import {combineReducers} from 'redux';
import bugsReducer from './bugs';
import projectReducer from './projects';
import usersReducer from './users';

export default combineReducers({
    bugs : bugsReducer,
    projects : projectReducer,
    users: usersReducer
})