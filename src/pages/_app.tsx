import React from 'react';
import Head from 'next/head';
import App, { AppContext, AppInitialProps } from 'next/app';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../components/material/Theme';

import configureStore from '../redux/reducers/configureStore';
import wrapper from '../redux/reducers/wrapper';
import { Provider } from 'react-redux';

//const store = configureStore();

class MyApp extends App<AppInitialProps> {

    componentDidMount = () => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement!.removeChild(jssStyles);
        }
    }

    public render() {
        const { Component, pageProps } = this.props;

        return (
            <React.Fragment>
                <Head>
                    <title>Algoritma Tasarımı ve Analizi</title>
                    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
                    <meta name="author" content="Fatih ATEŞ" />
                </Head>
                <ThemeProvider theme={theme}>
                    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                        <CssBaseline />
                        <Component {...pageProps} />
                </ThemeProvider>
            </React.Fragment>
        );
    }
}

export default wrapper.withRedux(MyApp);
