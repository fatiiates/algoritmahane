import type { NextApiRequest, NextApiResponse } from 'next';

import { createErrorResponse, createSuccessResponse } from '../../../../constants/types/generators/Response';

import TResponse from '../../../../constants/types/Response';

const Main = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        res.setHeader('Content-Type', 'application/json')
        if (req.method === 'POST') {
            if (req.query.algorithm == undefined) {

                let send: TResponse = createErrorResponse({
                    err_code: 404,
                    description: "Bir algoritma adı bulunmadı."
                });
                return res.status(send.err_code).json(send);

            } else {

                var algorithmReadme = (str) => str.charAt(0).toUpperCase() + str.slice(1)

                let send: TResponse = createSuccessResponse({
                    result: require(`../../../../api/post/sort/info/${algorithmReadme(req.query.algorithm)}.md`).default
                });

                return res.status(200).json(send);
            }
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