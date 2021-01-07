import { connect, ConnectedProps } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as indexActions from '../../../../redux/actions/pages/indexActions';

function mapState(state) {
    return {
        activeStep: state.pagesIndexStepperReducers
    }
}

function mapDispatch(dispatch) {
    return {
        actions: {
            changeStepperActiveStep: bindActionCreators(indexActions.changeStepperActiveStep, dispatch),
        },
    }
}

export const connector = connect(mapState, mapDispatch)

export type TPropsFromRedux = ConnectedProps<typeof connector>

