import { connect, ConnectedProps } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as rootDrawerActions from '../../../../redux/actions/root/drawerActions';

function mapState(state) {
    return {
    }
}

function mapDispatch(dispatch) {
    return {
    }
}

export const connector = connect(mapState, mapDispatch)

export type TPropsFromRedux = ConnectedProps<typeof connector>

