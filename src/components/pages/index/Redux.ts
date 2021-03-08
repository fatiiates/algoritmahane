import { connect, ConnectedProps } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as indexActions from '@redux/actions/pages/indexActions';

function mapState(state) {
    return {
        algorithms: state.pagesIndexAlgorithmsReducers,
        selectedAlgorithm: state.pagesIndexSelectedAlgorithmReducers,
        activeStep: state.pagesIndexStepperReducers,
        switchDataset: state.pagesIndexSwitchDataset,
        out: state.pagesIndexOut,
        specialDataset: state.pagesIndexFormsDatasetSpecial,
        randomDataset: state.pagesIndexFormsDatasetRandom,
        searched: state.pagesIndexFormsDatasetSearched,
        lang: state.rootLangReducers
    }
}

function mapDispatch(dispatch) {
    return {
        actions: {
            changeSelectedAlgorithm: bindActionCreators(indexActions.changeSelectedAlgorithm, dispatch),
            changeStepperActiveStep: bindActionCreators(indexActions.changeStepperActiveStep, dispatch),
            changeSwitchDataset: bindActionCreators(indexActions.changeSwitchDataset, dispatch),
            changeOut: bindActionCreators(indexActions.changeOut, dispatch),
        },
    }
}

export const connector = connect(mapState, mapDispatch)

export type TPropsFromRedux = ConnectedProps<typeof connector>

