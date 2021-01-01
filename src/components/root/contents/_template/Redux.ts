import { connect, ConnectedProps } from 'react-redux';

function mapState(state) {
    return {
        openDrawer: state.changeDrawer
    }
}

export const connector = connect(mapState)

export type TPropsFromRedux = ConnectedProps<typeof connector>

