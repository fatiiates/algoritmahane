import React from 'react'

import IndexPage from '../components/pages/index';
import axios from 'axios';

import * as indexActions from '../redux/actions/pages/indexActions';
import wrapper from '../redux/reducers/wrapper';

const Default = () => {
    return (
        <div>
            <IndexPage></IndexPage>
        </div>
    );
}

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
    try {
        await axios({
            method: 'post',
            url: 'http://localhost:3000/api'
        })
            .then(async function (res) {
                await store.dispatch(indexActions.changeAlgorithms(res.data.result));
            })
            .catch(function (err) {
                throw new Error(err.message);
            });
        return {};
    }
    catch (err) {
        return { err: err.message };
    }
})

export default Default