import axios, {AxiosResponse, InternalAxiosRequestConfig} from 'axios';

// import {RootState} from '@/store/index';
// import {setIsServerError} from '@/store/reducers/error.reducer';

import {StoreType} from './type';

let store: StoreType;

export const injectStoreIntoPartnerAuthInstance = (_store: StoreType) => {
	store = _store;
};

const partnerAuthAxiosInstance = axios.create({
	timeout: 15000,
});

// partnerAuthAxiosInstance.interceptors.request.use(
// 	(config: InternalAxiosRequestConfig) => {
// 		const state = store.getState() as RootState;
// 		config.baseURL = state.config.API_AUTH_BASE_URL;
// 		console.log(config);
// 		return config;
// 	},
// 	(error: unknown) => {
// 		return Promise.reject(error);
// 	},
// );

// partnerAuthAxiosInstance.interceptors.response.use(
// 	(response: AxiosResponse) => {
// 		console.log(response);
// 		if (typeof response.data === 'string') {
// 			store.dispatch(setIsServerError(true));
// 			return Promise.reject('invalid response');
// 		}
// 		return response;
// 	},
// 	(error: unknown) => {
// 		console.log(error);
// 	},
// );

export {partnerAuthAxiosInstance};
