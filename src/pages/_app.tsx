import React from 'react';

import Head from 'next/head';
import App, { AppContext } from 'next/app';
import CssBaseline from '@material-ui/core/CssBaseline';

import * as indexActions from '../redux/actions/pages/indexActions';
import * as langActions from '../redux/actions/root/langActions';

import wrapper from '../redux/reducers/wrapper';
import cookie from 'cookie';
import Provider from './_providers';
import axios from 'axios';

class MyApp extends App {

    constructor(props){
        super(props);
    }

    componentDidMount = () => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement!.removeChild(jssStyles);
        }
    }

    public static getInitialProps = async ({ Component, ctx }: AppContext) => {

        const cookies = cookie.parse(ctx.req ? ctx.req.headers.cookie || "" : document.cookie);
        if(!cookies.lang){
            ctx.res.setHeader('Set-Cookie', cookie.serialize('lang', process.env.defaultLocale, {
                maxAge: 60 * 60 * 24 * 7 // 1 week,
            }));
        }
        await ctx.store.dispatch(langActions.changeLang(cookies.lang || process.env.defaultLocale));
        
        await axios({
            data: {
                locale: ctx.store.getState().rootLangReducers
            },
            method: 'post',
            url: '/api',
            baseURL: process.env.basePath
        })
            .then(async function (res) {
                await ctx.store.dispatch(indexActions.changeAlgorithms(res.data.result));
            })
            .catch(function (err) {
                console.log(err);
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
