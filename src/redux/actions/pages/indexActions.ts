import * as actionTypes from '../actionTypes';

export function changeAlgorithms(value) {
    return { type: actionTypes.CHANGE_INDEX_ALGORITHMS_DATA, payload: value };
}

export function changeStepperActiveStep(value) {
    return { type: actionTypes.CHANGE_INDEX_STEPPER_ACTIVE_STEP_DATA, payload: value };
}

export function changeSelectedAlgorithms(value) {
    return { type: actionTypes.CHANGE_INDEX_SELECTED_ALGORITHMS_DATA, payload: value };
}