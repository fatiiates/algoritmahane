import * as actionTypes from '../../../actions/actionTypes';
import initialState from '../../initialState';

function changeSwitchDataset(state=initialState.PAGES.INDEX.SWITCH_DATASET, action){
    
    switch (action.type) {
        case actionTypes.CHANGE_INDEX_SWITCH_DATASET_DATA:
            return action.payload;
        default:
            return state;
    }

}

export default changeSwitchDataset;