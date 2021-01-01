import * as actionTypes from '../../actions/actionTypes';
import initialState from '../initialState';

function changeDrawer(state=initialState.ROOT.DRAWER.OPEN, action){
    
    switch (action.type) {
        case actionTypes.CHANGE_ROOT_DRAWER_DATA:
            return action.payload;
        default:
            return state;
    }

}


export default changeDrawer;