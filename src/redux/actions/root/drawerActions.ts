import * as actionTypes from '../actionTypes';

export function changeDrawer(value) {
    return { type: actionTypes.CHANGE_ROOT_DRAWER_DATA, payload: value };
}