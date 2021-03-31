import { combineReducers} from 'redux';
import entityReducer from './entities';

export default combineReducers({
    entities: entityReducer,
});