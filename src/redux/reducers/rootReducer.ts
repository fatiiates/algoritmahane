import changeLangTypeReducer from './langReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    changeLangType: changeLangTypeReducer
});

export default rootReducer;