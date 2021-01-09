import { combineReducers } from 'redux';
import rootDrawerReducers from './root/drawerReducers';
import { changeAlgorithms as pagesIndexAlgorithmsReducers } from './pages/index/algorithms';
import { changeSelectedAlgorithm as pagesIndexSelectedAlgorithmReducers } from './pages/index/algorithms';
import pagesIndexStepperReducers from './pages/index/stepper';
import pagesIndexSwitchDataset from './pages/index/switch';

const rootReducer = combineReducers({
    rootDrawerReducers,
    pagesIndexAlgorithmsReducers,
    pagesIndexSelectedAlgorithmReducers,
    pagesIndexStepperReducers,
    pagesIndexSwitchDataset
});

export default rootReducer;