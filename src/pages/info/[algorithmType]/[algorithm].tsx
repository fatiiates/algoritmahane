import React from 'react'

import axios from 'axios';
import ReactMarkdown from "react-markdown";

import InfoPage from '../../../components/pages/info';
import { Typography } from '@material-ui/core';

const Default = ({ props, err }) => {
    
    return (
        <div>
            {<InfoPage>
                {!err && <ReactMarkdown source={props.result} />}
                {err && <Typography>{err}</Typography>}
            </InfoPage>}
        </div>
    );
}

Default.getInitialProps = async (ctx) => {
    try {
        const { query } = ctx;
        var result = null;
        await axios({
            data: {
                locale: ctx.store.getState().rootLangReducers
            },
            method: 'post',
            url: `/api/${query.algorithmType}/info/${query.algorithm}`,
            baseURL: process.env.basePath 
        })
            .then(async function (res) {
                
                result = res.data.result;
            })
            .catch(function (err) {
                throw new Error(err.response.data.description);
            });
            

        if (result === null)
            throw new Error("Bilinmeyen bir sorun oluştu...");

        return { props: { result } };

    }
    catch (err) {
        return { err: err.message };
    }
}


export default Default