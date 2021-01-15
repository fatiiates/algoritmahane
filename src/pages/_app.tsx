import React from 'react';

import Head from 'next/head';
import App, { AppContext, AppInitialProps } from 'next/app';
import CssBaseline from '@material-ui/core/CssBaseline';

import wrapper from '../redux/reducers/wrapper';
import axios from 'axios';
import * as indexActions from '../redux/actions/pages/indexActions';
import Provider from './_providers';

class MyApp extends App<AppInitialProps> {
   
    componentDidMount = () => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement!.removeChild(jssStyles);
        }
    }

    public static getInitialProps = async ({ Component, ctx }: AppContext) => {


        await axios({
            method: 'post',
            url: '/api',
            baseURL: process.env.basePath
        })
            .then(async function (res) {
                await ctx.store.dispatch(indexActions.changeAlgorithms(res.data.result));
            })
            .catch(function (err) {
                throw new Error(err.message);
            });

        return {
            pageProps: {
                // Call page-level getInitialProps
                ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
                // Some custom thing for all pages
                pathname: ctx.pathname,
            },
        };

    };

    public render() {
        const { Component, pageProps } = this.props;

        return (
            <React.Fragment>
                <Head>
                    <title>Algoritma Tasarımı ve Analizi</title>
                    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
                    <meta name="author" content="Fatih ATEŞ" />
                </Head>
                <Provider>
                    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                    <CssBaseline />
                    <Component {...pageProps} />
                </Provider>
            </React.Fragment>
        );
    }
}

export default wrapper.withRedux(MyApp);
