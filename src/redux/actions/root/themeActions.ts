import * as actionTypes from '../actionTypes';

export function changeTheme(value) {
    return { type: actionTypes.CHANGE_MATERIAL_THEME, payload: value };
}