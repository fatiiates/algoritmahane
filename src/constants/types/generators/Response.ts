import { ISuccessResponse, IErrorResponse, IOptionalSuccessResponse, IOptionalErrorResponse } from "../Response";

export const createSuccessResponse = ({
            ok = false,
            result = {}
        }: IOptionalSuccessResponse
    ): ISuccessResponse => {
    return {
        ok,
        result
    };
};

export const createErrorResponse = ({
            ok = false,
            err_code = 0,
            description = "",
        }: IOptionalErrorResponse
    ): IErrorResponse => {
    return {
        ok,
        err_code,
        description
    };
};