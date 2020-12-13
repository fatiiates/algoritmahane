import fs from 'fs';
import { CHANGE_LANG_TYPE } from '../actionTypes';

const changeLangTypeReducer = (state = {value: "tr-TR"}, action) => {
    switch (action.type) {
        case CHANGE_LANG_TYPE:
            var userLang = navigator.language; 
            if (fs.existsSync('../../constants/langs/' + userLang + '.json'))
                return {...state, value: state.value};
            return {...state, value: 'tr-TR'};
        default:
            return {...state};
    }
};

export default changeLangTypeReducer;

