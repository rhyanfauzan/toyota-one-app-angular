export interface CommonResponse<Object> {
    responseCode: number;
    status: boolean;
    message: string;
    data?: Object;
}