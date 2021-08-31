export type ValidType = {
    isValid: boolean;
    isTyped: boolean
}


export enum ValidInputs {
    NAME = 0,
    EMAIL = 1,
    MESSAGE = 2,
}


export interface MailData {
    name: string;
    email: string;
    message: string;
}


export interface CaptchaVerify {
    response: string,
    secret?: string,
    remoteip?: string
}