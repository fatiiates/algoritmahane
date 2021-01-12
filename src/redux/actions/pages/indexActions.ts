import * as actionTypes from '../actionTypes';

export function changeAlgorithms(value) {
    return { type: actionTypes.CHANGE_INDEX_ALGORITHMS_DATA, payload: value };
}

export function changeSelectedAlgorithm(value) {
    return { type: actionTypes.CHANGE_INDEX_SELECTED_ALGORITHMS_DATA, payload: value };
}

export function changeStepperActiveStep(value) {
    return { type: actionTypes.CHANGE_INDEX_STEPPER_ACTIVE_STEP_DATA, payload: value };
}

export function changeSwitchDataset(value) {
    return { type: actionTypes.CHANGE_INDEX_SWITCH_DATASET_DATA, payload: value };
}

export function changeOut(value) {
    return { type: actionTypes.CHANGE_INDEX_OUT_DATA, payload: value };
}

export function changeFormsDatasetSpecialDataset(value) {
    return { type: actionTypes.CHANGE_INDEX_FORMS_DATASET_SPECIAL_DATASET, payload: value };
}

export function changeFormsDatasetRandomDataset(value) {
    return { type: actionTypes.CHANGE_INDEX_FORMS_DATASET_SPECIAL_DATASET, payload: value };
}