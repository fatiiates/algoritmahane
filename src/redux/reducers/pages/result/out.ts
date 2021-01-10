import * as actionTypes from '../../../actions/actionTypes';
import initialState from '../../initialState';

export function changeOut(state=initialState.PAGES.RESULT.OUT, action){
    
    switch (action.type) {
        case actionTypes.CHANGE_RESULT_OUT_DATA:
            return action.payload;
        default:
            return state;
    }
}

