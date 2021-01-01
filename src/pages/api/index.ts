import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';

import performanceBinarySearch from '../../api/post/search/BinarySearch';
import getAllAlgorithms from '../../api';
import { createErrorResponse, createSuccessResponse } from '../../constants/types/generators/Response';

import TResponse from '../../constants/types/Response';

const Main = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        res.setHeader('Content-Type', 'application/json')
        if (req.method === 'POST') {
            
            let send: TResponse = createSuccessResponse({
                result: await getAllAlgorithms()
            });

            return res.status(200).json(send);
            
        } else {

            let send: TResponse = createErrorResponse({
                err_code: 405,
                description: "Yalnızca POST istekleri kabul edilir."
            });
            return res.status(send.err_code).json(send);

        }
    }
    catch (e: any) {

        let send: TResponse = createErrorResponse({
            err_code: 404,
            description: e.message
        });
        return res.status(send.err_code).json(send);
        
    }
}

export default Main;