import { connect, ConnectedProps } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as indexActions from '../../../../../redux/actions/pages/indexActions';

function mapState(state) {
    return {
        specialDataset: state.pagesIndexFormsDatasetSpecial,
        randomDataset: state.pagesIndexFormsDatasetRandom,
        selectedAlgorithm: state.pagesIndexSelectedAlgorithmReducers,
        searched: state.pagesIndexFormsDatasetSearched,
        switchDataset: state.pagesIndexSwitchDataset,
        lang: state.rootLangReducers
    }
}

function mapDispatch(dispatch) {
    return {
        actions: {
            changeSpecialDataSet: bindActionCreators(indexActions.changeFormsDatasetSpecial, dispatch),
            changeRandomDataSet: bindActionCreators(indexActions.changeFormsDatasetRandom, dispatch),
            changeSearched: bindActionCreators(indexActions.changeFormsDatasetSearched, dispatch),
        }
    }
}

export const connector = connect(mapState, mapDispatch)

export type TPropsFromRedux = ConnectedProps<typeof connector>

