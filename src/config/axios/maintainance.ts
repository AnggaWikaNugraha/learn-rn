import axios from 'axios';

import {generalError, responseInterceptor, storeKey} from './axiosUtils';

const instance = axios.create({
	timeout: 30000,
});

const customizableInstance = axios.create({
	timeout: 30000,
});

instance.interceptors.request.use(storeKey, function (error) {
	console.error('error', error);
	return Promise.reject(error);
});

customizableInstance.interceptors.request.use(storeKey, function (error) {
	console.error('error', error);
	return Promise.reject(error);
});

instance.interceptors.response.use(responseInterceptor, generalError);

export {instance, customizableInstance};
