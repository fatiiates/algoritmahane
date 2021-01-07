import { connect, ConnectedProps } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as indexActions from '../../../redux/actions/pages/indexActions';

function mapState(state) {
    return {
        algorithms: state.pagesIndexAlgorithmsReducers,
        activeStep: state.pagesIndexStepperReducers
    }
}

function mapDispatch(dispatch) {
    return {
        actions: {
            changeAlgorithms: bindActionCreators(indexActions.changeAlgorithms, dispatch),
            changeStepperActiveStep: bindActionCreators(indexActions.changeStepperActiveStep, dispatch),
        },
    }
}

export const connector = connect(mapState, mapDispatch)

export type TPropsFromRedux = ConnectedProps<typeof connector>

