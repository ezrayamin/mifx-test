export default class Result {
    isSuccessful: boolean = true;
    data: any;
    message: string = '';
    // [x: string]: any;
    constructor(isSuccessful: boolean, data: any, message: string) {
        return {
            isSuccessful,
            data,
            message
        }
    }
}