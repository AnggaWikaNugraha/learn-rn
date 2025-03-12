import axios, {
	AxiosError,
	AxiosResponse,
	InternalAxiosRequestConfig,
} from 'axios';
// import base64 from 'base-64';
// import CryptoJS from 'crypto-js';
// import rs, {RSAKey} from 'jsrsasign';
// import DeviceInfo from 'react-native-device-info';
// import * as uuid from 'uuid';

// import {RootState} from '@/store/index';
// import {setIsOffline, setIsServerError} from '@/store/reducers/error.reducer';
// import {handleUnauthorized} from '@/store/reducers/mutator';
// import {AuthorizationToken} from '@/types/authorization-token.type';

// import {apiVersion} from '../api/api-version';
// import * as navigation from '../navigation';
// import {partnerAuthAxiosInstance} from './partnerAuthInstance';
import {StoreType} from './type';
import { APIResponse } from '../../type/ApiResponse';

let store: StoreType;

let isUnauthorized = false;

export const injectStore = (_store: StoreType) => {
	store = _store;
};

// export function generateRandomString(length: number) {
// 	let text = '';
// 	const possible =
// 		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~';
// 	for (let i = 0; i < length; i++) {
// 		text += possible.charAt(Math.floor(Math.random() * possible.length));
// 	}
// 	return text;
// }

export async function storeKey(config: InternalAxiosRequestConfig) {
	// const state = store.getState() as RootState;

	// config.baseURL = state.config.API_BASE_URL;

	// const token = state.login.loginData?.accessToken;
	// const SECRET_KEY = state.config.SK;

	// if (!config.headers || !SECRET_KEY) {
	// 	return config;
	// }

	// const bundleId = DeviceInfo.getBundleId();

	// if (
	// 	(bundleId === 'com.senyum.uat' || bundleId === 'com.senyum.staging') &&
	// 	token
	// ) {
	// 	config.headers.Authorization = token;
	// 	return config;
	// }

	// if (bundleId === 'com.senyum.outer' || bundleId === 'com.senyum') {
	// 	if (!config.url?.match(/(login|register|otp)/g) && token) {
	// 		config.headers['X-Authorization'] = token;
	// 	}

	// 	const AUTHORIZATION_API_KEY = state.config.AAK;
	// 	const AUTHORIZATION_SECRET_KEY = state.config.ASK;
	// 	console.table({
	// 		AUTHORIZATION_API_KEY,
	// 		AUTHORIZATION_SECRET_KEY,
	// 	});

	// 	if (!AUTHORIZATION_API_KEY || !AUTHORIZATION_SECRET_KEY) {
	// 		throw new Error(
	// 			'AUTHORIZATION_API_KEY or AUTHORIZATION_SECRET_KEY not found',
	// 		);
	// 	}

	// 	const ACTUAL_AUTHORIZATION_API_KEY = CryptoJS.AES.decrypt(
	// 		AUTHORIZATION_API_KEY,
	// 		SECRET_KEY,
	// 	).toString(CryptoJS.enc.Utf8);

	// 	const ACTUAL_AUTHORIZATION_SECRET_KEY = CryptoJS.AES.decrypt(
	// 		AUTHORIZATION_SECRET_KEY,
	// 		SECRET_KEY,
	// 	).toString(CryptoJS.enc.Utf8);
	// 	console.table({
	// 		ACTUAL_AUTHORIZATION_API_KEY,
	// 		ACTUAL_AUTHORIZATION_SECRET_KEY,
	// 	});

	// 	// Generate code challenge and code verifier
	// 	const codeVerifier = generateRandomString(128);
	// 	const sha256 = CryptoJS.algo.SHA256.create();
	// 	sha256.update(codeVerifier);
	// 	const hash = sha256.finalize();
	// 	const rawCodeChallenge = CryptoJS.enc.Base64.stringify(hash);
	// 	const codeChallenge = rawCodeChallenge
	// 		.replace(/\+/g, '-')
	// 		.replace(/\//g, '_')
	// 		.replace(/[=]/g, '');

	// 	// Make request to authorize
	// 	await partnerAuthAxiosInstance.post<APIResponse>(
	// 		apiVersion.authorize.v1,
	// 		{
	// 			apikey: ACTUAL_AUTHORIZATION_API_KEY,
	// 			code_challenge: codeChallenge,
	// 			code_challenge_method: 'S256',
	// 		},
	// 	);

	// 	// Make request to get authorization token
	// 	const authTokenRes =
	// 		await partnerAuthAxiosInstance.post<AuthorizationToken>(
	// 			apiVersion.generateAuthorizationToken.v1,
	// 			{
	// 				code_verifier: codeVerifier,
	// 			},
	// 			{
	// 				params: {
	// 					grant_type: 'client_credentials',
	// 				},
	// 				headers: {
	// 					Authorization: base64.encode(
	// 						`${ACTUAL_AUTHORIZATION_API_KEY}:${ACTUAL_AUTHORIZATION_SECRET_KEY}`,
	// 					),
	// 				},
	// 			},
	// 		);

	// 	if (authTokenRes.data.access_token) {
	// 		config.headers.Authorization = `Bearer ${authTokenRes.data.access_token}`;
	// 	}

	// 	const timestamp = new Date().toISOString();
	// 	config.headers['BRI-Timestamp'] = timestamp;

	// 	const path = config.url;
	// 	const httpMethod = config.method?.toUpperCase();
	// 	const body = config.data ? JSON.stringify(config.data) : '';
	// 	const payload = `path=${path}&verb=${httpMethod}&token=Bearer ${authTokenRes.data.access_token}&timestamp=${timestamp}&body=${body}`;
	// 	console.table(payload);
	// 	const hmacSignature = CryptoJS.enc.Base64.stringify(
	// 		CryptoJS.HmacSHA256(payload, codeChallenge),
	// 	);

	// 	config.headers['BRI-Signature'] = hmacSignature;
	// }

	// const PUBLIC_KEY = state.config.PK;

	// if (!PUBLIC_KEY) {
	// 	return config;
	// }

	// const ACTUAL_PUBLIC_KEY = CryptoJS.AES.decrypt(
	// 	PUBLIC_KEY,
	// 	SECRET_KEY,
	// ).toString(CryptoJS.enc.Utf8);

	// const DEVICE_ID = config?.data?.deviceId;

	// if (!ACTUAL_PUBLIC_KEY || !DEVICE_ID) {
	// 	return config;
	// }

	// const trxId = uuid.v4();

	// const pubKey = base64.decode(ACTUAL_PUBLIC_KEY);
	// const publicKey = rs.KEYUTIL.getKey(pubKey) as RSAKey;

	// console.table({
	// 	PUBLIC_KEY,
	// 	ACTUAL_PUBLIC_KEY,
	// 	DECODED_PUBLIC_KEY: pubKey,
	// });

	// const encryptedTrxId = rs.KJUR.crypto.Cipher.encrypt(
	// 	trxId,
	// 	publicKey,
	// 	'RSAOAEP',
	// );

	// const base64EncryptedTrxId = rs.hextob64(encryptedTrxId);

	// const deviceSigning = new rs.KJUR.crypto.Mac({
	// 	alg: 'HmacSHA512',
	// 	pass: {
	// 		utf8: trxId,
	// 	},
	// });
	// deviceSigning.updateString(DEVICE_ID);
	// const deviceSignature = rs.hextob64(deviceSigning.doFinal());

	// config.headers['X-SENYUM-DEVICE-SIGNATURE'] = deviceSignature;
	// config.headers['X-SENYUM-TRX-ID'] = base64EncryptedTrxId;

	return config;
}

export function responseInterceptor(response: AxiosResponse) {
	console.log('response', response); // don't remove it, for debug
	isUnauthorized = false;
	if (typeof response.data === 'string') {
		// store.dispatch(setIsServerError(true));
		return Promise.reject('invalid response');
	}
	return response;
}

export function handleUnauthorizedError() {
	// const state = store.getState() as RootState;

	isUnauthorized = true;
	// store.dispatch(handleUnauthorized());

	// if (state.auth.phoneNumber) {
	// 	return navigation.reset({
	// 		index: 0,
	// 		routes: [{name: 'Login'}],
	// 	});
	// } else {
	// 	return navigation.reset({
	// 		index: 1,
	// 		routes: [
	// 			{name: 'MainBottomTab', params: {screen: 'Home'}},
	// 			{name: 'LoginOrRegister'},
	// 		],
	// 	});
	// }

}

export function defaultErrorInterceptor(err: unknown) {
	console.log('error', err); // don't remove it, for debug
	if (!(axios.isAxiosError(err) && err.response)) {
		// store.dispatch(setIsOffline(true));
		return Promise.reject(err);
	}

	const error = err as AxiosError<APIResponse>;

	if (error.message === 'Network Error') {
		// store.dispatch(setIsOffline(true));
	}

	if (isUnauthorized) {
		return;
	}

	if (
		error.response?.status === 401 &&
		error.response.data.responseDescription === 'UNAUTHORIZED'
	) {
		handleUnauthorizedError();
	}

	return Promise.reject(error);
}

// export function errorFetchSimpedesUmi(error: unknown) {
// 	defaultErrorInterceptor(error);
// 	return Promise.reject(error);
// }

// export function errorUploadResponseInterceptor(error: unknown) {
// 	defaultErrorInterceptor(error);
// 	return Promise.reject(error);
// }

// export function errorTabunganEmasResponseInterceptor(error: unknown) {
// 	defaultErrorInterceptor(error);
// 	return Promise.reject(error);
// }

// export function errorPinjamanGadaiMonitoringInterceptor(error: unknown) {
// 	defaultErrorInterceptor(error);
// 	return Promise.reject(error);
// }

// export function errorPinjamanBriMonitoringInterceptor(error: unknown) {
// 	defaultErrorInterceptor(error);
// 	return Promise.reject(error);
// }

// export function errorAtmAgentLocatorInterceptor(error: unknown) {
// 	defaultErrorInterceptor(error);
// 	return Promise.reject(error);
// }

export function generalError(error: unknown) {
	defaultErrorInterceptor(error);

	const isAxiosError = axios.isAxiosError(error);

	if (!isAxiosError) {
		return Promise.reject(error);
	}

	const axiosError = error as AxiosError;
	const responseStatus = axiosError.response?.status;

	if (responseStatus && responseStatus >= 500) {
		// store.dispatch(setIsServerError(true));
	}

	return Promise.reject(error);
}
