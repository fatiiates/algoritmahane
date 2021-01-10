import React from 'react'

import axios from 'axios';
import ReactMarkdown from "react-markdown";

import ResultPage from '../../../components/pages/result';


const Default = ({ props }) => {
    console.log(props);
    return (
        <div>
            <ResultPage>
                <ReactMarkdown source={props} />
            </ResultPage>
        </div>
    );
}

Default.getInitialProps = async ({ query }) => {
    try {

        var result = null;
        await axios({
            method: 'post',
            url: `http://localhost:3000/api/${query.algorithmType}/${query.algorithm}`
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