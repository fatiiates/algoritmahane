import * as actionTypes from '../actionTypes';

export function changeLang(value) {
    return { type: actionTypes.CHANGE_ROOT_LANG, payload: value };
}