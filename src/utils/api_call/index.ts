import axios, { AxiosError, AxiosRequestConfig, Method } from "axios";
import { ERROR_CODES } from "./error_status_codes";
import Result from "./api_result";

const BASE_URL = "https://fe.dev.dxtr.asia/api"
const timeoutMilisecond = 8000

export default async function ApiCall({ method, path, params, body }: { method: Uppercase<Method>, path: string, params?: Object, body?: Object, }): Promise<Result> {
    try {
        let requestConfig: AxiosRequestConfig = {
            method: method,
            baseURL: BASE_URL,
            url: path,
            timeout: timeoutMilisecond
        }

        if (method === "GET" && params) {
            requestConfig.params = params
        }
        const isDataNeeded = method === "POST" || method === "PATCH" || method === "PUT";
        if (isDataNeeded && body) {
            requestConfig.data = body
        }

        const response = await axios(requestConfig)

        return new Result(true, response.data, '')
    }
    catch (e) {
        const err = e as AxiosError
        if (err.response) {
            const statusCode = err.response?.status;
            const body = err.response?.data
            const message = handleException({
                errorCode: statusCode,
            })
            return new Result(false, body, message)
        }

        // request error
        return new Result(false, body, "Please Try Again");
    }
}

function handleException({ errorCode }: { errorCode: number }): string {
    let error: Error = new Error("something went wrong");

    if (errorCode === ERROR_CODES.BAD_REQUEST_CODE) {
        error =  new Error("bad request")
    }
    if (errorCode === ERROR_CODES.UNAUTHORIZED_CODE) {
        error =  new Error("unauthorized")
    }
    if (errorCode === ERROR_CODES.FORBIDDEN_CODE) {
        error =  new Error("forbidden")
    }
    if (errorCode === ERROR_CODES.NOT_FOUND_CODE) {
        error =  new Error("not found")
    }
    if (errorCode === ERROR_CODES.UNPROCESSABLE_ENTITY_CODE) {
        error =  new Error("unprocessable")
    }
    return error.message
}