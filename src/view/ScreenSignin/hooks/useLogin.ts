import { AxiosError } from 'axios';
import useSWRMutation, { SWRMutationConfiguration } from 'swr/mutation';

import { apiVersion } from '../../../config/axios/api';
import axios from '../../../config/axios';
import { APIResponse } from '../../../type/ApiResponse';

export interface LoginPayload {
    email: string;
    password: string;
}

export interface LoginData {
    name: string,
    email: string,
    token: string,
}

export interface LoginResponse extends APIResponse<LoginData> { }

export interface loginErrorData {
    reason?: string;
}

type ResponseDescription =
    | 'DIFFERENT_NIK'
    | 'REFERRAL_NOT_USED'
    | 'REFERRAL_EXCEEDED'
    | 'INVALID_APPLICATION_STATUS'
    | 'INVALID_CUSTOMER_VALUE'
    | 'FREEZED'
    | 'SUCCESS';

export interface LoginErrorResponse extends APIResponse<loginErrorData, ResponseDescription> { }

export interface LoginHookConfig extends SWRMutationConfiguration<LoginResponse, AxiosError<LoginErrorResponse>, string, LoginPayload> {
    throwOnError?: boolean;
}

export interface LoginHookProps { config?: LoginHookConfig }

export const fetcher = async (url: string, { arg }: { arg: LoginPayload }) => {
    const res = await axios.post<LoginResponse>(url, arg);
    return res.data;
};

export function useLogin(props?: LoginHookProps) {

    const rest = useSWRMutation(apiVersion.login.v1, fetcher, props?.config);

    return rest;
}
