import React from 'react';
import cookies from 'next-cookies'
import App, { AppContext, AppInitialProps } from 'next/app';

import { connect, ConnectedProps } from 'react-redux';
import { ThemeProvider } from '@material-ui/core';
import { bindActionCreators } from 'redux';
import * as themeActions from '../redux/actions/root/themeActions';

import { darkTheme, lightTheme } from '../components/material/Theme';
import { withCookies, Cookies } from 'react-cookie';

const connector = connect(mapState, mapDispatch);

interface IProvider extends ConnectedProps<typeof connector> {
    theme: boolean;
    children?: React.ReactNode;
    cookies: Cookies;
}


class Provider extends React.Component<IProvider> {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const { cookies } = this.props;
        const themeCookie = cookies.get('theme');
        const date = new Date();
        date.setMonth(date.getMonth() + 3)
        switch (themeCookie) {
            case "dark":
                this.props.actions.changeTheme(true);
                cookies.set('theme', "dark", {
                    expires: date
                });
                break;

            default:
                this.props.actions.changeTheme(false);
                cookies.set('theme', "light", {
                    expires: date
                });
                break;
        }

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

export default connector(withCookies(Provider));
