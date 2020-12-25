interface IResponse {
    readonly ok: boolean;
}

export interface ISuccessResponse extends IResponse {
    result: object;
}

export interface IErrorResponse extends IResponse {
    err_code: number;
    description: string;
}

// with optinal parameters

export interface IOptionalSuccessResponse {
    ok?: boolean;
    result?: object;
}

export interface IOptionalErrorResponse {
    ok?: boolean;
    err_code?: number;
    description?: string;
}


type TResponse = ISuccessResponse | IErrorResponse;

export default TResponse;