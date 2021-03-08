import * as actionTypes from '../../actions/actionTypes';
import initialState from '../initialState';

function changeLang(state=initialState.ROOT.LANG, action){
    
    switch (action.type) {
        case actionTypes.CHANGE_ROOT_LANG:
            return action.payload;
        default:
            return state;
    }

}


export default changeLang;