import { combineReducers } from 'redux';
import changeRootDrawer from './root/drawerReducers';
import pagesIndexReducers from './pages/indexReducers';

const rootReducer = combineReducers({
    changeRootDrawer,
    pagesIndexReducers
});

export default rootReducer;