import { connect, ConnectedProps } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as indexActions from '../../../../../../../redux/actions/pages/indexActions';

function mapState(state) {
    return {
        specialDataset: state.pagesIndexFormsDatasetSpecial,
        selectedAlgorithm: state.pagesIndexSelectedAlgorithmReducers,
        state: state
    }
}

function mapDispatch(dispatch) {
    return {
        actions: {
            changeSpecialDataSet: bindActionCreators(indexActions.changeFormsDatasetSpecial, dispatch),
        }
    }
}

export const connector = connect(mapState, mapDispatch)

export type TPropsFromRedux = ConnectedProps<typeof connector>

