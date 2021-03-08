import { connect, ConnectedProps } from 'react-redux';

function mapState(state) {
    return {
        lang: state.rootLangReducers,
    }
}

export const connector = connect(mapState)

export type TPropsFromRedux = ConnectedProps<typeof connector>

