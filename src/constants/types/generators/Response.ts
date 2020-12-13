import { ISuccessResponse, IErrorResponse } from "../Response";

export const createSuccessResponse = (): ISuccessResponse => {
    return {
        ok: true,
        result: {}
    };
};

export const createErrorResponse = (): IErrorResponse => {
    return {
        ok: false,
        err_code: 0,
        description: ""
    };
};
