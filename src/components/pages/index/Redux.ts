import { connect, ConnectedProps } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as indexActions from '../../../redux/actions/pages/indexActions';

function mapState(state) {
    return {
        algorithms: state.pagesIndexReducers
    }
}

function mapDispatch(dispatch) {
    return {
        actions: {
            changeAlgorithms: bindActionCreators(indexActions.changeAlgorithms, dispatch),
        },
    }
}

export const connector = connect(mapState, mapDispatch)

export type TPropsFromRedux = ConnectedProps<typeof connector>

