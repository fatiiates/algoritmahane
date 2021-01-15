import React from 'react'

import axios from 'axios';
import ReactMarkdown from "react-markdown";

import InfoPage from '../../../components/pages/info';

const Default = ({ props }) => {
    
    return (
        <div>
            <InfoPage>
                <ReactMarkdown source={props.result} />
            </InfoPage>
        </div>
    );
}

Default.getInitialProps = async ({ query }) => {
    try {

        var result = null;
        await axios({
            method: 'post',
            url: `/api/${query.algorithmType}/info/${query.algorithm}`,
            baseURL: process.env.basePath 
        })
            .then(async function (res) {
                result = res.data.result;
            })
            .catch(function (err) {
                throw new Error(err.message);
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