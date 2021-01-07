import * as actionTypes from '../../../actions/actionTypes';
import initialState from '../../initialState';

function changeAlgorithms(state=initialState.PAGES.INDEX.ALGORITHMS, action){
    
    switch (action.type) {
        case actionTypes.CHANGE_INDEX_ALGORITHMS_DATA:
            return action.payload;
        default:
            return state;
    }
}

export default changeAlgorithms;