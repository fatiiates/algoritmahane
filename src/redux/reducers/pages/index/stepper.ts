import * as actionTypes from '../../../actions/actionTypes';
import initialState from '../../initialState';

function changeStepperActiveStep(state=initialState.PAGES.INDEX.STEPPER.ACTIVE_STEP, action){
    
    switch (action.type) {
        case actionTypes.CHANGE_INDEX_STEPPER_ACTIVE_STEP_DATA:
            return action.payload;
        default:
            return state;
    }

}

export default changeStepperActiveStep;