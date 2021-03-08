import React from 'react';

import { connect, ConnectedProps } from 'react-redux';
import { ThemeProvider } from '@material-ui/core';
import { bindActionCreators } from 'redux';

import * as themeActions from '../redux/actions/root/themeActions';

import { darkTheme, lightTheme } from '../components/material/Theme';

const connector = connect(mapState, mapDispatch);

interface IProvider extends ConnectedProps<typeof connector> {
    theme: boolean;
    children?: React.ReactNode;
}

class Provider extends React.Component<IProvider> {

    constructor(props) {
        super(props)
    }

    async componentDidMount() {

        const themeStorage = localStorage.getItem("theme");        
        this.props.actions.changeTheme(themeStorage == "dark");
        if (themeStorage == undefined)
            localStorage.setItem("theme", "light");

    }

    public render() {

        const { children, theme } = this.props;

        const themeConfig = theme ? darkTheme : lightTheme;
        return (
            <React.Fragment>
                <ThemeProvider theme={themeConfig}>
                    {children}
                </ThemeProvider>
            </React.Fragment>
        );
    }
}

function mapState(state) {
    return {
        theme: state.rootMaterialTheme,
    }
}

function mapDispatch(dispatch) {
    return {
        actions: {
            changeTheme: bindActionCreators(themeActions.changeTheme, dispatch),
        },
    }
}

export default connector(Provider);
