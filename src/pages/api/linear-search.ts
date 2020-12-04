import type { NextApiRequest, NextApiResponse } from 'next';

import performanceLinearSearch from '../../algorithms/search/LinearSearch';

import TResponse from '../../types/Response';

const main = (req: NextApiRequest, res: NextApiResponse) => {
    res.setHeader('Content-Type', 'application/json')
    try {
        
        if (req.method === 'POST') {
            if (req.body.array != undefined || req.body.searched != undefined){
                const { array, searched } = req.body;

                performanceLinearSearch<typeof searched>(array, searched);
            }
        } else {
            res.statusCode = 405;
            res.setHeader('Content-Type', 'application/json')

            let send: TResponse = {
                ok: false,
                err_code: res.statusCode,
                description: "Yalnızca POST istekleri kabul edilir."
            };

            res.end(JSON.stringify(send))
        }
    }
    catch(e) {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'application/json')

        let send: TResponse = {
            ok: false,
            err_code: res.statusCode,
            description: "Bir sonuç bulunamadı."
        };

        res.end(JSON.stringify(send))
    }
}

export default main;