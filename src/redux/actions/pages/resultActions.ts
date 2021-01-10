import * as actionTypes from '../actionTypes';

export function changeOut(value) {
    return { type: actionTypes.CHANGE_RESULT_OUT_DATA, payload: value };
}