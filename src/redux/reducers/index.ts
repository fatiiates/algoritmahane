import { combineReducers } from 'redux';
import rootDrawerReducers from './root/drawerReducers';
import pagesIndexAlgorithmsReducers from './pages/index/algorithms';
import pagesIndexStepperReducers from './pages/index/stepper';

const rootReducer = combineReducers({
    rootDrawerReducers,
    pagesIndexAlgorithmsReducers,
    pagesIndexStepperReducers
});

export default rootReducer;