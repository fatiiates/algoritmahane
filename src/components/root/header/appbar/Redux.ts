import { connect, ConnectedProps } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as rootDrawerActions from '../../../../redux/actions/root/drawerActions';
import * as themeActions from '../../../../redux/actions/root/themeActions';
import * as langActions from '../../../../redux/actions/root/langActions';

function mapState(state) {
    return {
        openDrawer: state.rootDrawerReducers,
        theme: state.rootMaterialTheme,
    }
}

function mapDispatch(dispatch) {
    return {
        actions: {
            changeDrawer: bindActionCreators(rootDrawerActions.changeDrawer, dispatch),
            changeTheme: bindActionCreators(themeActions.changeTheme, dispatch),
        },
    }
}

export const connector = connect(mapState, mapDispatch)

export type TPropsFromRedux = ConnectedProps<typeof connector>

