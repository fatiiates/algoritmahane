import { connect, ConnectedProps } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as indexActions from '../../../../../redux/actions/pages/indexActions';

function mapState(state) {
    return {
        dataset: state.pagesIndexFormsDataset
    }
}

function mapDispatch(dispatch) {
    return {
        changeSpecialDataSet: bindActionCreators(indexActions.changeFormsDatasetSpecialDataset, dispatch),
        changeRandomDataSet: bindActionCreators(indexActions.changeFormsDatasetRandomDataset, dispatch)
    }
}

export const connector = connect(mapState, mapDispatch)

export type TPropsFromRedux = ConnectedProps<typeof connector>

