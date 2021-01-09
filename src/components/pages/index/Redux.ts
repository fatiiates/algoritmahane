import { connect, ConnectedProps } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as indexActions from '../../../redux/actions/pages/indexActions';

function mapState(state) {
    return {
        algorithms: state.pagesIndexAlgorithmsReducers,
        selectedAlgorithm: state.pagesIndexSelectedAlgorithmReducers,
        activeStep: state.pagesIndexStepperReducers,
        switchDataset: state.pagesIndexSwitchDataset
    }
}

function mapDispatch(dispatch) {
    return {
        actions: {
            changeAlgorithms: bindActionCreators(indexActions.changeAlgorithms, dispatch),
            changeSelectedAlgorithm: bindActionCreators(indexActions.changeSelectedAlgorithm, dispatch),
            changeStepperActiveStep: bindActionCreators(indexActions.changeStepperActiveStep, dispatch),
            changeSwitchDataset: bindActionCreators(indexActions.changeSwitchDataset, dispatch),
        },
    }
}

export const connector = connect(mapState, mapDispatch)

export type TPropsFromRedux = ConnectedProps<typeof connector>

