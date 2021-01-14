import * as actionTypes from '../../../actions/actionTypes';
import initialState from '../../initialState';

export function changeFormsDatasetRandom(state=initialState.PAGES.INDEX.FORMS.DATASET.RANDOM_DATASET, action){

    switch (action.type) {
        case actionTypes.CHANGE_INDEX_FORMS_DATASET_RANDOM:
            return action.payload(state);
        default:
            return state;
    }

}

export function changeFormsDatasetSpecial(state=initialState.PAGES.INDEX.FORMS.DATASET.SPECIAL_DATASET, action){

    switch (action.type) {
        case actionTypes.CHANGE_INDEX_FORMS_DATASET_SPECIAL:
            return action.payload;
        default:
            return state;
    }

}

export function changeFormsDatasetSearched(state=initialState.PAGES.INDEX.FORMS.DATASET.SEARCHED, action){
    switch (action.type) {
        case actionTypes.CHANGE_INDEX_FORMS_DATASET_SEARCHED:
            return action.payload;
        default:
            return state;
    }
}