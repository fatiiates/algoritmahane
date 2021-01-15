import * as actionTypes from '../../actions/actionTypes';
import initialState from '../initialState';

function changeTheme(state=initialState.ROOT.THEME, action){
    
    switch (action.type) {
        case actionTypes.CHANGE_MATERIAL_THEME:
            return action.payload;
        default:
            return state;
    }

}


export default changeTheme;