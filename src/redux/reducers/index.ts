import { combineReducers } from 'redux';
import rootDrawerReducers from './root/drawerReducers';
import { changeAlgorithms as pagesIndexAlgorithmsReducers } from './pages/index/algorithms';
import { changeSelectedAlgorithm as pagesIndexSelectedAlgorithmReducers } from './pages/index/algorithms';
import pagesIndexStepperReducers from './pages/index/stepper';
import pagesIndexSwitchDataset from './pages/index/switch';
import { changeOut as pagesIndexOut} from './pages/index/out';
import pagesIndexFormsDataset from './pages/index/forms';

const rootReducer = combineReducers({
    rootDrawerReducers,
    pagesIndexAlgorithmsReducers,
    pagesIndexSelectedAlgorithmReducers,
    pagesIndexStepperReducers,
    pagesIndexSwitchDataset,
    pagesIndexOut,
    pagesIndexFormsDataset
});

export default rootReducer;