import React from 'react';
import cookies from 'next-cookies'
import App, { AppContext, AppInitialProps } from 'next/app';

import { connect } from 'react-redux';
import { ThemeProvider } from '@material-ui/core';
import * as themeActions from '../redux/actions/root/themeActions';
import { darkTheme, lightTheme } from '../components/material/Theme';

interface IProvider {
    theme: boolean;
    children?: React.ReactNode;
}


class Provider extends React.Component<IProvider> {

    constructor(props) {
        super(props)
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

export default connect(mapState)(Provider);
