import { ISuccessResponse, IErrorResponse } from "../Response";

export const createISuccessResponse = (): ISuccessResponse => {
    return {
        ok: true,
        result: {}
    };
};

export const createIErrorResponse = (): IErrorResponse => {
    return {
        ok: false,
        err_code: 0,
        description: ""
    };
};
