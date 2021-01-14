import { connect, ConnectedProps } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as indexActions from '../../../../../../../redux/actions/pages/indexActions';

function mapState(state) {
    return {
        randomDataset: state.pagesIndexFormsDatasetRandom,
    }
}

function mapDispatch(dispatch) {
    return {
        actions: {
            changeRandomDataSet: bindActionCreators(indexActions.changeFormsDatasetRandom, dispatch),
        }
    }
}

export const connector = connect(mapState, mapDispatch)

export type TPropsFromRedux = ConnectedProps<typeof connector>

