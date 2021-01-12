import * as actionTypes from '../../../actions/actionTypes';
import initialState from '../../initialState';

function changeFormsDataset(state=initialState.PAGES.INDEX.FORMS.DATASET, action){

    switch (action.type) {
        case actionTypes.CHANGE_INDEX_FORMS_DATASET:
            return action.payload;
        default:
            return state;
    }

}

export default changeFormsDataset;