import type { NextApiRequest, NextApiResponse } from 'next';

import performanceLinearSearch from '../../constants/algorithms/search/LinearSearch';
import { createErrorResponse, createSuccessResponse } from '../../constants/types/generators/Response';

import TResponse from '../../constants/types/Response';

const Main = (req: NextApiRequest, res: NextApiResponse) => {
    res.setHeader('Content-Type', 'application/json')
    try {
        
        if (req.method === 'POST') {
            if (req.body.array != undefined || req.body.searched != undefined){

                const { array, searched } = req.body;
                
                const dataArray = array.split(',');

                let send: TResponse = createSuccessResponse();
                send.result = performanceLinearSearch<typeof searched>(dataArray, searched);
    
                res.json(send)
            }
        } else {
            res.statusCode = 405;

            let send: TResponse = createErrorResponse();
            send.err_code = res.statusCode;
            send.description = "Yalnızca POST istekleri kabul edilir.";

            res.json(send)
        }
    }
    catch(e) {
        res.statusCode = 404;

        let send: TResponse = createErrorResponse();
        send.err_code = res.statusCode;
        send.description = "Bir sonuç bulunamadı.";

        res.json(send)
    }
}

export default Main;