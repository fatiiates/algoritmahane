import { connect, ConnectedProps } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as rootDrawerActions from '../../../redux/actions/root/drawerActions';

function mapState(state) {
    return {
        openDrawer: state.changeRootDrawer
    }
}

function mapDispatch(dispatch) {
    return {
        actions: {
            changeDrawer: bindActionCreators(rootDrawerActions.changeDrawer, dispatch),
        },
    }
}

export const connector = connect(mapState, mapDispatch)

export type TPropsFromRedux = ConnectedProps<typeof connector>

